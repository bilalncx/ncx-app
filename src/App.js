import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './script';
import Blog from './Assets/pages/blog/blog';
import Home from './Assets/pages/home';
import Press from './Assets/pages/bloglisting';
import PrivacyPolicy from './Assets/pages/privacy-policy/privacy-policy';
import KYCAMLPolicy from './Assets/pages/kyc-aml-policy/kyc-aml-policy';
import UserAgreement from './Assets/pages/user-agreement/user-agreement';
import CookiePolicy from './Assets/pages/cookie-policy/cookie-policy';
import APIDocumentation from './Assets/pages/api-documentation/api-documentation';
import BuyCrypto from './Assets/pages/buy_crypto/buy-crypto';
import TaskReward from './Assets/pages/taskrewards/taskreward';
import NCXCard from './Assets/pages/ncxcard/ncxcard';
import NCXOTC from './Assets/pages/ncxotcpage/otc';
import NCXAmbassador from './Assets/pages/ncx-ambassador/ambassador';
import NCXMarketMaker from './Assets/pages/ncx-marketmakers/marketmaker';
import NCXInstitution from './Assets/pages/ncx-institution/institution';

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
          <Route path='/cookie-policy' element={<CookiePolicy />}/>
          <Route path='/api-agreement' element={<APIDocumentation />}/>
          <Route path='/buy-crypto' element={<BuyCrypto />}/>
          <Route path='/task-rewards' element={<TaskReward />} />
          <Route path='/ncx-card' element={<NCXCard />}/>
          <Route path='ncx-otc' element={<NCXOTC />} />
          <Route path='ncx-ambassador' element={<NCXAmbassador />} />
          <Route path='market-makers' element={<NCXMarketMaker />} />
          <Route path='ncx-institution' element={<NCXInstitution />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

