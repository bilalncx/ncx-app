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
            <a href="#home"><img src={Logo} alt="NCX-Logo" /></a>
            </IconButton>
            <navlink>
              <a href="#home">home</a>
              <a href="#">Exchange</a>
              <a href="#">DEX</a>
              <a href="#">Blog</a>
            </navlink>
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
              <a href="#home"><img src={Logo} alt="NCX-Logo" /></a>
              </IconButton>
              </div>
              <div className="mobile-menu">
                <label for="nav" class="nav-btn">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </label>
                <input type="checkbox" id="nav" />
                <ul class="nav-overlary">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Exchange</a></li>
                  <li><a href="#">DEX</a></li>
                  <li><a href="#">Blog</a></li>
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