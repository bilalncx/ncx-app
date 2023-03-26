import {React, useState} from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from './NCX-logo.svg';
import './header.css';
import { ReactComponent as NCXMore } from '../../images/ncx-header-more.svg';
import { ReactComponent as AppleIcon } from '../../images/apple-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/play-icon.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import Instagram from '../../images/instagram.svg';
import AppBarCode from '../../images/ncx-QRcode.svg';
import {ReactComponent as DropdownICon} from '../../images/menu-dropdown.svg';
  
export default function Header() {   
  const [isNavExpanded, setIsNavExpanded] = useState(false) 
  
  return (
      <AppBar position="static" id="header-row">
        <Toolbar>
          <div id="main-header" className="desktop">
            <div className="logo-nav">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                className="header-logo"
                sx={{ mr: 2 }}
              >
              <a href="https://ncx.cx"><img src={Logo} alt="NCX-Logo" /></a>
              </IconButton>
              <div className="headermore_row">
                <a className="header-more" href="#"><NCXMore /></a>
                <div id="new-headermenu" className="mega_menu"> 
                    <div className="col1">
                      <div className="top_heading connect_link_title"> 
                        <h4>Services</h4> 
                        <h4>NCXT</h4>
                        <h4>Company</h4> 
                      </div>
                      <div className="menu_box">
                        <div className="col">
                          <div className="main_service_wrapper">
                            <div className="community_inner">
                              <div className="main_service">
                                <a href="https://ncx.cx/task-rewards">Rewards Program</a>
                                <a href="https://ncx.cx/insights">News & Insights</a>
                                <a href="https://ncx.cx/market-makers">Market Makers</a>
                                <a href="https://ncx.cx/institutional">Institutional Services</a>
                                <a href="https://ncx.cx/ncx-otc">OTC</a>
                                <a href="https://ncx.cx/ncx-ambassador">NCX Ambassador</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner"> 
                                <a href="#">NCXT Overview</a>
                                <a href="#">Claim Airdrop</a>
                                <a href="#">Presale Dashboard</a>
                                <a href="#">Referral Program</a>
                                <a href="#">Official Telegram</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner">
                                {/* <a href="#">About Us</a> */}
                                <a href="https://ncx.cx/insights">Media & Press</a>
                                <a href="https://ncx.cx/user-agreement">User Agreement</a>
                                <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a>
                                <a href="https://ncx.cx/privacy-policy">Privacy Policy</a>
                                <a href="https://ncx.cx/api-agreement">API Documentation</a>
                                <a href="https://ncx.cx/cookie-policy">Cookie Policy</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col2">
                      <div className="right_inner">
                        <h4> Support </h4>
                        <div className="connect_links">
                          <div className="box">
                            <div className="boxx-links">
                              <a href="https://ncx.cx/faq">FAQ</a>
                              <a href="#">Open Support Ticket</a>
                              <a href="#">Support via Telegram</a>
                            </div>
                            <h4> Social Media</h4>
                            <div className="social-icons">
                              <div class="icons"><a href="https://ncx.cx"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                              <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                              <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <ul className="navlink">
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/buy-crypto">Buy Crypto</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a>
                </li>
                <li className="main_title white_bg">
                  <a href="#">Derivatives</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/market-makers">Markets</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/ncx-card">NCX Card</a>
                </li>
                <li className="main_title white_bg">
                  <a href="#">NCX Wallet</a>
                </li>
                <li className="main_title white_bg">
                  <a href="#" target="_blank" rel="noreferrer">NCX Token</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/task-rewards">Rewards</a>
                </li>
              </ul>
            </div>
            <div className="login-buttons">
              <Button href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer" className="signin">Sign in</Button>
              <Button className="launch-dex" href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DeFi</Button>
              <div className="downloadQRCode">
                <div id="downloadlink" className="storeicons">
                  <AppleIcon />
                  <GooglePlayIcon />
                </div>
                <div id="headerDownloadApp">
                  <div class="download-box">
                    <div class="qr-box">
                      <div class="img-box">
                        <img src={AppBarCode} alt="NCX Mobile App"/>
                      </div>
                    </div>
                    <div class="pc-box">
                      <div class="text">Scan the QR code to download NCX mobile APP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="translate_lng">
                <div id="tran_lang">
                  <h1>English</h1>
                  <DropdownICon />
                </div>
                <div id="language_trans">
                  <div class="language-box">
                    <a href="#">English</a>
                    <a href="#">हिन्दी</a>
                    <a href="#">Español</a>
                    <a href="#">中文</a>
                    <a href="#">Bahasa</a>
                    <a href="#">Tiếng Việt</a>
                    <a href="#">Русский</a>
                    <a href="#">Melayu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          
          
          <div id="header-newmobile" className={
                    isNavExpanded ? "header-expanded avtive" : "header-expanded"
                  }>
            <nav className="navigation">
              <div className="navigation-one">
                <div className="mobile-toogle">
                  <button 
                    className="hamburger"
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded)
                    }}>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.875 0.5H18.125V1.49902H0.875V0.5ZM1 7.50098L18.125 7.5V8.49902L1 8.5V7.50098ZM0.875 14.5H18.125V15.499H0.875V14.5Z" fill="white"/>
                    </svg>
                  </button>
                  <div
                    className={
                      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
                    <ul>
                      <li>
                        <a href="https://ncx.cx/buy-crypto">Buy Crypto</a>
                      </li>
                      <li>
                        <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a>
                      </li>
                      <li>
                        <a href="#">Derivatives</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/market-makers">Markets</a>
                      </li>
                      <li>
                        <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/ncx-card">NCX Card</a>
                      </li>
                      <li>
                        <a href="#">NCX Token</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/task-rewards">Rewards</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/insights">News & Insights</a>
                      </li>
                      {/* <li>
                        <a className="btn01 signup launching-btn">Sign Up</a>
                      </li> */}
                      <li>
                        <a className="signin launching-btn" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign In / Sign Up</a>
                      </li>
                      {/* <li>
                        <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="launch-dex launching-btn">Launch DEX</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="mobile-logo">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className="header-logo"
                  sx={{ mr: 2 }}
                >
                <a href="https://ncx.cx/"><img src={Logo} alt="NCX-Logo" /></a>
                </IconButton>
                </div>
              </div>
              <div className="mobile-launch">
              <div class="dropdown">
                <button class="dropbtn">Launch DEX</button>
                <div class="dropdown-content">
                  <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">Launch DEX</a>
                  <a href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign in</a>
                  {/* <a href="#" target="_blank" rel="noreferrer">Sign Up</a> */}
                </div>
              </div>
              </div>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
  );
}