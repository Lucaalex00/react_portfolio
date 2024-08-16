import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./views/HomePage"
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import ErrorPage from './views/ErrorPage';
import FooterComponent from './components/footer/FooterComponent';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-500 flex flex-col items-center ">
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
