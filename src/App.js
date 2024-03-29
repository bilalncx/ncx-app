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
// import NCXCard from './Assets/pages/ncxcard/ncxcard';
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
import BlogNews from './Posts/main';
import CryptoDetails from './Posts/Crypto/SinglePage';
import CryptoListing from './Posts/Crypto/ArticlesList';
import PostForexDetails from './Posts/PostForex/SinglePage';
import PostForexList from './Posts/PostForex/ArticlesList';
import PostMarketDetails from './Posts/PostMarkets/SinglePage';
import PostMarketList from './Posts/PostMarkets/ArticlesList';
import PostCommoditiesDetails from './Posts/PostCommodities/SinglePage';
import PostCommoditiesList from './Posts/PostCommodities/ArticlesList';
import PostIndicesDetails from './Posts/PostIndices/SinglePage';
import PostIndicesList from './Posts/PostIndices/ArticlesList';
import NCXCardPage from './Assets/pages/ncxcard/newcard';
import AccountPage from './Assets/pages/company-card/card';
import BusinessAccountPage from './Assets/pages/business-account/business';
import Accounting from './Assets/pages/accounting/account';

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
          <Route path='/rewards' element={<TaskReward />} />
          <Route path='/ncx-card' element={<NCXCardPage />}/>
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
          <Route path='/market-insights' element={<BlogNews />} />
          <Route path='/post-crypto' element={<CryptoListing />}/>
          <Route path='/post-crypto/:id' element={<CryptoDetails />} />
          <Route path='/post-forex' element={<PostForexList />}/>
          <Route path='/post-forex/:id' element={<PostForexDetails />} />
          <Route path='/post-indices' element={<PostIndicesList />}/>
          <Route path='/post-indices/:id' element={<PostIndicesDetails />} />
          <Route path='/post-commodities' element={<PostCommoditiesList />}/>
          <Route path='/post-commodities/:id' element={<PostCommoditiesDetails />} />
          <Route path='/post-markets' element={<PostMarketList />}/>
          <Route path='/post-markets/:id' element={<PostMarketDetails />} />
          <Route path='/company-cards' element={<AccountPage />} />
          <Route path='/business-accounts' element={<BusinessAccountPage />} />
          <Route path='/accounting' element={<Accounting />} />
          {/* <Route path='/new-card' element={<NCXCard />} /> */}
        </Routes>
      </BrowserRouter>
    // </div>
  );
};

export default App;

