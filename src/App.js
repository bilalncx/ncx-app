import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './script';
import InsightDetails from './Assets/pages/blog/blog';
import Home from './Assets/pages/home';
import Insights from './Assets/pages/bloglisting';
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
import PageNotFound from './Assets/components/404page/404';
import MarketPage from './Assets/pages/market/marketpage';
import SupportPage from './Assets/pages/support/support';
import FAQSecurityGoogle2FA from './Assets/components/support/security_settings/security';
import FAQDesposits from './Assets/components/support/deposits/deposit';
import FAQWithdrawal from './Assets/components/support/withdrawal/withdrawal';
import FAQSpotTrading from './Assets/components/support/spottrading/sporttrading';
import FAQLearn from './Assets/components/support/learn/learn';
import ApplyNow from './Assets/pages/Horizontalpage/horizontalpage';
import NCXTokenPage from './Assets/pages/ncx-token/token';
import MarketHomePageSection from './Assets/components/our_markets/home_market';
import NCXAboutUs from './Assets/pages/about-us/about';
import Wallet from './Assets/pages/wallet/wallet';
import IndicesPage from './Assets/pages/indices/indices';
import IndicesPage1 from './Assets/pages/indices/indices1';

const App = () => {
  return (
    // <div className='roo-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/insights' element={<Insights />}/>
          <Route path='/insights/:id' element={<InsightDetails />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/kyc-aml-policy' element={<KYCAMLPolicy />}/>
          <Route path='/user-agreement' element={<UserAgreement />}/>
          <Route path='/cookie-policy' element={<CookiePolicy />}/>
          <Route path='/api-agreement' element={<APIDocumentation />}/>
          <Route path='/buy-crypto' element={<BuyCrypto />}/>
          <Route path='/task-rewards' element={<TaskReward />} />
          <Route path='/ncx-card' element={<NCXCard />}/>
          <Route path='/ncx-otc' element={<NCXOTC />} />
          <Route path='/ncx-ambassador' element={<NCXAmbassador />} />
          <Route path='/market-makers' element={<NCXMarketMaker />} />
          <Route path='/institutional' element={<NCXInstitution />} />
          <Route path='*' element={<PageNotFound />}/>
          <Route path='/markets' element={<MarketPage />} />
          <Route path='/faq' element={<SupportPage />} />
          <Route path='/faq_security_google_2fa' element={<FAQSecurityGoogle2FA />}/>
          <Route path='/faq_deposits' element={<FAQDesposits />} />
          <Route path='/faq_withdrawal' element={<FAQWithdrawal />}/>
          <Route path='/faq_spot_trading' element={<FAQSpotTrading />} />
          <Route path='/faq_learn' element={<FAQLearn />} />
          <Route path='/apply-now' element={<ApplyNow />} />
          <Route path='/ncx-token' element={<NCXTokenPage />} />
          <Route path='/home-market' element={<MarketHomePageSection />} />
          <Route path='/about-us' element={<NCXAboutUs />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/indices' element={<IndicesPage />} />
          <Route path='/derivatives' element={<IndicesPage1 />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
};

export default App;

