import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENT
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from './components/footer/FooterComponent';

//PAGES
import HomePage from "./views/HomePage"
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import ErrorPage from './views/ErrorPage';
import FrontEndPage from './views/Front-Back/FrontEndPage';
import BackEndPage from './views/Front-Back/BackEndPage';

//CONTEXTS
import { MenuProvider } from './stores/FooterMenuContext';


function App() {
  return (
    <Router>
       <MenuProvider>
        <div className="min-h-screen bg-gray-500 flex flex-col items-center ">
          <HeaderComponent/>
          <Routes>
            {/* NAV PAGES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* READ MORE PAGES */}
            <Route path="/frontend" element={<FrontEndPage />} />
            <Route path="/backend" element={<BackEndPage />} />

            {/* ERROR PAGE */}
            <Route path="*" element={<ErrorPage />} />

          </Routes>
          <FooterComponent/>
        </div>
      </MenuProvider>
    </Router>
  );
}

export default App;
