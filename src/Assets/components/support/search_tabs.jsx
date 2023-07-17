import React, { useState } from 'react';
// import EmptyList from '../../blogcomponents/common/EmptyList/empty';
// import BlogList from '../../blogcomponents/homeblog/BlogList/bloglis';
// import Header from '../../blogcomponents/homeblog/Header/blogheader';
import SearchBar from '../../../blogcomponents/homeblog/SearchBar/searchbar';
import blogListdata from '../../../config/jata';
// import MyHeader from '../components/header/header';
// import MyFooter from '../components/footer/footer';
import Button from "@mui/material/Button";
import SliderBlog from '../../../blogcomponents/homeblog/BlogSlider/blogslider';
import { ReactComponent as NCXLogo } from '../../images/new_sitelogo.svg';
import { ReactComponent as Telegram } from '../../components/footer/telegram.svg';
import { ReactComponent as Twitter } from '../../components/footer/twitter.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';

function QuestionTabs()
{
    return(
        <div id="question_tabs">
            <div className="container">
                <div className='blog_heading'>
                    <div className="trend">
                        <NCXLogo />
                        <h3>FAQs</h3>
                    </div>
                    <ul>
                        <li><a href="https://ncx.cx/faq">Registration & KYC</a></li>
                        <li><a href="https://ncx.cx/faq_security_google_2fa" alt="Settings & Security">Settings & Security</a></li>
                        <li><a href="https://ncx.cx/faq_deposits">Deposits</a></li>
                        <li><a href="https://ncx.cx/faq_withdrawal">Withdtrawal</a></li>
                        <li><a href="https://ncx.cx/faq">DEX</a></li>
                        <li><a href="https://ncx.cx/faq_spot_trading">Spot Trading</a></li>
                        <li><a href="https://ncx.cx/faq">Derivatives Trading</a></li>
                        <li><a href="https://ncx.cx/faq">Rewards & Referrals</a></li>
                        <li><a href="https://ncx.cx/faq_learn">Learn</a></li>
                    </ul>
                    {/* <SearchBar
                        value={searchKey}
                        clearSearch={handleClearSearch}
                        formSubmit={handleSearchBar}
                        handleSearchKey={(e) => setSearchKey(e.target.value)}
                    /> */}
                    <h1 className='open-ticket'>Open Support Ticket</h1>
                    <p className='ticker_pass'>Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                    <Button className='support_singbtn' href="https://exchange.ncx.cx/login" target="_blank" rel="noreferrer">Sign In</Button>
                    <div className="social-links">
                        <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
                        <a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
                        <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><Telegram /></a>
                    </div>
                    {/* <SliderBlog /> */}
                </div>
                <div className="question_ssdedaa">
                    <div className="question_row">
                        <a href="#" className="col first animated animation:fade-in-up">
                            <h1>Registration & KYC</h1>
                            <p>Sign Up via Desktop</p>
                            <p>Sign Up via Mobile App</p>
                        </a>
                        <a href="/faq_security_google_2fa" className="col second animated animation:fade-in-up">
                            <h1>Settings & Security</h1>
                            <p>Google 2FA</p>
                            <p>Password Reset</p>
                            <p>Anti Phishing</p>
                            <p>Device Management</p>
                            <p>Address Whitelist</p>
                        </a>
                        <a href="/faq_deposits" className="col third animated animation:fade-in-up">
                            <h1>Deposits</h1>
                            <p>Deposits on Desktop</p>
                            <p>Deposits on Mobile App</p>
                            <p>Minimum Deposits</p>
                        </a>
                    </div>
                    <div className="question_row">
                        <a href="/faq_withdrawal" className="col first animated animation:fade-in-up">
                            <h1>Withdrawals</h1>
                            <p>Withdrawals on Desktop</p>
                            <p>Withdrawals on Mobile App</p>
                            <p>Minimum Withdrawal</p>
                        </a>
                        <a href="#" className="col second animated animation:fade-in-up">
                            <h1>DEX</h1>
                            <p>Swaps</p>
                            <p>Liquidity Pools</p>
                        </a>
                        <a href="/faq_spot_trading" className="col third animated animation:fade-in-up">
                            <h1>Spot Trading</h1>
                            <p>Order Types</p>
                            <p>How to Trade Spot on Web</p>
                            <p>How to Trade Spot on App</p>
                            <p>What is Taker & Maker?</p>
                            <p>Definitions and Calculations</p>
                        </a>
                    </div>
                    <div className="question_row">
                        <a href="#" className="col first animated animation:fade-in-up">
                            <h1>Derivatives Trading</h1>
                            <p>Derivatives Trading Tutorial</p>
                        </a>
                        <a href="#" className="col second animated animation:fade-in-up">
                            <h1>Rewards & Referrals</h1>
                            <p>Rewards Program</p>
                            <p>Referral Program</p>
                        </a>
                        <a href="/faq_learn" className="col third animated animation:fade-in-up">
                            <h1>Learn</h1>
                            <p>Learn about Blockchain</p>
                            <p>Cryptocurrencies, Web3, NFTs,</p>
                            <p>Gas Fees, Smart Contracts,</p>
                            <p>Common Q&A</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuestionTabs;