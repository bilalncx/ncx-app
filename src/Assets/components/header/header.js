import {React, useState} from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from './NCX-logo.svg';
import './header.css';
  
export default function Header() {   
  const [isNavExpanded, setIsNavExpanded] = useState(false) 
  
  return (
      <AppBar position="static" id="header-row">
        <Toolbar>
          <div id="main-header" className="desktop">
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
            <ul className="navlink">
              <li className="main_title white_bg">
                <a href="https://ncx.cx/">Home</a>
              </li>
              <li className="main_title white_bg">
                <a href="#">Exchange</a>
              </li>
              <li className="main_title white_bg">
                <a href="#">Trade</a>
              </li>
              <li className="main_title white_bg">
                <a href="https://ncx.cx/#market">Markets</a>
              </li>
              <li className="main_title white_bg">
                <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
              </li>
              <li className="main_title white_bg">
                <a href="#">Connect
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80486 5L9.62305 0.181818L9.42824 -2.32303e-09L4.80486 4.62338L0.181488 -1.12589e-07L-0.000329914 0.181818L4.80486 5Z" fill="white"></path> </svg>
                </a>
                <div className="mega_menu"> 
                  <div className="col1">
                    <div className="top_heading connect_link_title"> 
                      <h4> Community </h4> 
                      <h4> Social </h4> 
                    </div>
                    <div className="menu_box">
                      <div className="col">
                        <div className="main_service_wrapper">
                          <div className="community_inner">
                            <div className="main_service">
                              <a href="./blog">Press & News 
                                <p> Discover the latest NCX news and industry related articles</p> 
                              </a>
                            </div>
                          </div>
                          <div className="social_links">
                            {/* <div className="social_link_inner"> 
                              <a href="#" target="_blank" rel="noreferrer">Telegram</a> 
                            </div> */}
                            <div className="social_link_inner"> 
                              <a href="https://twitter.com/ncx_cx" target="_blank" rel="noreferrer">Twitter</a> 
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
                          <a href="#">Contact
                            <p>Sign in to open a Support Ticket</p>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.49399L7.07931 9.00006L6.89362 8.81787L11.6154 4.49399L6.89362 0.1701L7.07931 5.96875e-05L12 4.49399Z" fill="#141414"></path> 
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.31366H11.7447V4.57085H0V4.31366Z" fill="#141414"></path> 
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Button className="btn01 signup">Sign Up</Button>
            <Button className="signin">Sign In</Button>
            <Button href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="launch-dex">Launch DEX</Button>
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
                        <a href="https://ncx.cx">Home</a>
                      </li>
                      <li>
                        <a href="#market">Market</a>
                      </li>
                      <li>
                        <a href="#features">Features</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/blog">Press & News</a>
                      </li>
                      <li>
                        <a className="btn01 signup launching-btn">Sign Up</a>
                      </li>
                      <li>
                        <a className="signin launching-btn">Sign In</a>
                      </li>
                      <li>
                        <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="launch-dex launching-btn">Launch DEX</a>
                      </li>
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
                  <a href="#" target="_blank" rel="noreferrer">Sign In</a>
                  <a href="#" target="_blank" rel="noreferrer">Sign Up</a>
                </div>
              </div>
              </div>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
  );
}