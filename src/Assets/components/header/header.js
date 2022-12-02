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
      <AppBar position="static">
        <Toolbar id="main-header">
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
        </Toolbar>
      </AppBar>
  );
}