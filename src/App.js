import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Assets/pages/blog/blog';
import Home from './Assets/pages/home';
import Press from './Assets/pages/bloglisting';
import PrivacyPolicy from './Assets/pages/privacy-policy/privacy-policy';
import KYCAMLPolicy from './Assets/pages/kyc-aml-policy/kyc-aml-policy';
import UserAgreement from './Assets/pages/user-agreement/user-agreement';

const App = () => {
  return (
    <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog' element={<Press />}/>
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/kyc-aml-policy' element={<KYCAMLPolicy />}/>
          <Route path='/user-agreement' element={<UserAgreement />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

