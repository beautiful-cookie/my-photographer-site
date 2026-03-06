const express = require('express'); 
const path = require('path'); 
const app = express(); 
const cors = require('cors'); 
const nodemailer = require('nodemailer'); 
const dotenv = require('dotenv'); // Added to load environment variables

dotenv.config(); // Load environment variables from .env file

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json({ extended: true })); 
app.use('/images', express.static(path.join(__dirname, 'images'))); 

app.use('/category', require('./routes/upload.route')); 

const sendEmail = ({from, subject, message}) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.MYEMAIL, 
                pass: process.env.PASS, 
            }
        }); 

        const mail_configs = {
            from: from, 
            to: process.env.MYEMAIL, 
            subject: subject, 
            html: `
            <strong>Фотографирование</strong>
            <p><strong>Отправитель:</strong> ${subject}</p> 
            <p><strong>Email:</strong> ${from}</p>
            <p><strong>Сообщение:</strong></p>
            <p>${message}</p>`, 
        }; 

        transporter.sendMail(mail_configs, (err, info) => {
            if (err) {
                console.log(err); 
                return reject({message: 'Error sending email'}); 
            } else {
                return resolve({message: 'Email sent successfully ' + info.response}); 
            }
        }); 
    }); 
};


app.get("/sendemail", (req, res) => {
    sendEmail(req.query)
    .then(response => res.send(response.message)) 
    .catch(err => res.status(500).send(err.message)); 
}); 


const PORT = process.env.PORT ?? 3001; 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`); 
}); 
