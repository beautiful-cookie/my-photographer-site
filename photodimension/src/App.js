import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe'; 
import Portfolio from './components/Portfolio/Portfolio'; 
import NotFoundPage from './components/NotFoundPage/NotFoundPage'; 
import Layout from './components/Layout/Layout'; 
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import AdminPanel from './components/AdminPanel/AdminPanel'; 
import ImageGeneration from './components/ImageGeneration/ImageGeneration';
import Contacts from './components/Contacts/Contacts';
import Prices from './components/Prices/Prices';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="category/:category_name" element={<CategoryComponent />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="prices" element={<Prices />} />
          <Route path="reference" element={<ImageGeneration />} />
          <Route path="ap" element={<AdminPanel />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
