import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from './NCX-logo.svg';
import './header.css';
  
export default function Header() {
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
                <a href="https://ncx.cx/#market">Market</a>
              </li>
              <li className="main_title white_bg">
                <a href="https://ncx.cx/#features">Features</a>
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
            <Button className="launch-dex">Launch DEX</Button>
          </div>
          <div id="mobile-header">
            <div className="mobile-container">
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
              <div className="mobile-menu">
                <label for="nav" class="nav-btn">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </label>
                <input type="checkbox" id="nav" />
                <ul class="nav-overlary">
                  <li><a href="https://ncx.cx/">Home</a></li>
                  <li><a href="https://ncx.cx/#market">Market</a></li>
                  <li><a href="https://ncx.cx/#features">Features</a></li>
                  <li><a href="https://ncx.cx/blog">Blog</a></li>
                  <div className="buttons-div">
                    <Button className="btn01 signup">Sign Up</Button>
                    <Button className="signin">Sign In</Button>
                    <Button className="launch-dex">Launch DEX</Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
  );
}