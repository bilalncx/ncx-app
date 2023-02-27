import React, { useState } from 'react';
// import EmptyList from '../../blogcomponents/common/EmptyList/empty';
// import BlogList from '../../blogcomponents/homeblog/BlogList/bloglis';
// import Header from '../../blogcomponents/homeblog/Header/blogheader';
import SearchBar from '../../../blogcomponents/homeblog/SearchBar/searchbar';
import blogListdata from '../../../config/jata';
// import MyHeader from '../components/header/header';
// import MyFooter from '../components/footer/footer';
import SliderBlog from '../../../blogcomponents/homeblog/BlogSlider/blogslider';
import { ReactComponent as NCXLogo } from '../../images/NCX-logo.svg';
import { ReactComponent as Telegram } from '../../components/footer/telegram.svg';
import { ReactComponent as Twitter } from '../../components/footer/twitter.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';

function QuestionTabs()
{
    const [blogs, setBlogs] = useState(blogListdata);
    const [searchKey, setSearchKey] = useState('');
      // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogListdata;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogListdata);
        setSearchKey('');
    };
    return(
        <div id="question_tabs">
            <div className="container">
                <div className='blog_heading'>
                    <div className="trend">
                        <NCXLogo />
                        <h3>FAQs</h3>
                    </div>
                    <ul>
                        <li><a href="https://ncx.cx/faq">Account Registration</a></li>
                        <li><a href="https://ncx.cx/faq">KYC</a></li>
                        <li><a href="https://ncx.cx/faq_security_google_2fa" alt="Settings & Security">Settings & Security</a></li>
                        <li><a href="https://ncx.cx/faq_deposits">Deposits</a></li>
                        <li><a href="https://ncx.cx/faq_withdrawal">Withdtrawal</a></li>
                        <li><a href="https://ncx.cx/faq">DEX</a></li>
                        <li><a href="https://ncx.cx/faq">Spot Trading</a></li>
                        <li><a href="https://ncx.cx/faq">Derivatives</a></li>
                        <li><a href="https://ncx.cx/faq">Rewards & Referrals</a></li>
                    </ul>
                    {/* <SearchBar
                        value={searchKey}
                        clearSearch={handleClearSearch}
                        formSubmit={handleSearchBar}
                        handleSearchKey={(e) => setSearchKey(e.target.value)}
                    /> */}
                    <h1 className='open-ticket'>Open Support Ticket</h1>
                    <p className='ticker_pass'>Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                    <button className='support_singbtn' href="#">Sign In</button>
                    <div className="social-links">
                        <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
                        <a href="https://ncx.cx/" target="_blank" rel="noreferrer"><Telegram /></a>
                        <a  href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
                    </div>
                    {/* <SliderBlog /> */}
                </div>
                <div className="question_ssdedaa">
                    <div className="question_row">
                        <a href="#" className="col first animated animation:fade-in-up">
                            <h1>Account Registration</h1>
                            <p>Sign Up via Desktop</p>
                            <p>Sign Up via Mobile App</p>
                        </a>
                        <a href="#" className="col second animated animation:fade-in-up">
                            <h1>KYC</h1>
                            <p>Identity Verification</p>
                            <p>Requirements</p>
                        </a>
                        <a href="/faq_security_google_2fa" className="col third animated animation:fade-in-up">
                            <h1>Settings & Security</h1>
                            <p>Google 2FA</p>
                            <p>Password Reset</p>
                            <p>Anti Phishing</p>
                            <p>Device Management</p>
                            <p>Address Whitelist</p>
                        </a>
                    </div>
                    <div className="question_row">
                        <a href="/faq_deposits" className="col first animated animation:fade-in-up">
                            <h1>Deposits</h1>
                            <p>Deposits on Desktop</p>
                            <p>Deposits on Mobile App</p>
                        </a>
                        <a href="/faq_withdrawal" className="col second animated animation:fade-in-up">
                            <h1>Withdrawals</h1>
                            <p>Withdrawals on Desktop</p>
                            <p>Withdrawals on Mobile App</p>
                        </a>
                        <a href="#" className="col third animated animation:fade-in-up">
                            <h1>DEX</h1>
                            <p>Swaps</p>
                            <p>Liquidity Pools</p>
                        </a>
                    </div>
                    <div className="question_row">
                        <a href="#" className="col first animated animation:fade-in-up">
                            <h1>Spot Trading</h1>
                            <p>Spot Trading Tutorial</p>
                        </a>
                        <a href="#" className="col second animated animation:fade-in-up">
                            <h1>Derivatives</h1>
                            <p>Derivatives Trading Tutorial</p>
                        </a>
                        <a href="#" className="col third animated animation:fade-in-up">
                            <h1>Rewards & Referrals</h1>
                            <p>Rewards Program</p>
                            <p>Referral Program</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuestionTabs;