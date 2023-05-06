import {React, useState} from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from '../../images/ncxtoken-logo.svg';
import '../header/header.css';
import { ReactComponent as NCXMore } from '../../images/ncx-header-more.svg';
import { ReactComponent as AppleIcon } from '../../images/apple-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../../images/play-icon.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import Instagram from '../../images/instagram.svg';
import AppBarCode from '../../images/ncx-QRcode.svg';
import {ReactComponent as DropdownICon} from '../../images/menu-dropdown.svg';
import ChangeButtons from '../../../selectlanguage';
import { useTranslation } from "react-i18next";
import { ReactComponent as CloseIcon } from '../../images/clos.svg';
  
export default function Header() {   

  const { t, i18n } = useTranslation();

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
                        <h4>{t("services")}</h4> 
                        <h4>{t("ncxt")}</h4>
                        <h4>{t("company")}</h4> 
                      </div>
                      <div className="menu_box">
                        <div className="col">
                          <div className="main_service_wrapper">
                            <div className="community_inner">
                              <div className="main_service">
                                <a href="https://ncx.cx/rewards">{t("rewards_program")}</a>
                                <a href="https://ncx.cx/market-insights">{t("news_insights")}</a>
                                <a href="https://ncx.cx/market-makers">{t("market_makers")}</a>
                                <a href="https://ncx.cx/institutional">{t("institutional_services")}</a>
                                <a href="https://ncx.cx/ncx-otc">{t("otc")}</a>
                                <a href="https://ncx.cx/ncx-ambassador">{t("ncx_ambassador")}</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner"> 
                                <a href="#">{t("ncxt_overview")}</a>
                                <a href="#">{t("claim_airdrop")}</a>
                                <a href="#">{t("presale_dashboard")}</a>
                                <a href="#">{t("referral_program")}</a>
                                <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer">{t("official_telegram")}</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner">
                                <a href="https://ncx.cx/about-us">{t("about-us")}</a>
                                <a href="https://ncx.cx/market-insights">{t("media_press")}</a>
                                <a href="https://ncx.cx/user-agreement">{t("user_agreement")}</a>
                                <a href="https://ncx.cx/kyc-aml-policy">{t("aml_kyc_policy")}</a>
                                <a href="https://ncx.cx/privacy-policy">{t("privacy_policy")}</a>
                                <a href="https://ncx.cx/api-agreement">{t("api_documentation")}</a>
                                <a href="https://ncx.cx/cookie-policy">{t("cookie_policy")}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col2">
                      <div className="right_inner">
                        <h4>{t("support")}</h4>
                        <div className="connect_links">
                          <div className="box">
                            <div className="boxx-links">
                              <a href="https://ncx.cx/faq">{t("faq")}</a>
                              <a href="#">{t("open_support_ticket")}</a>
                              <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer">{t("support_via_telegram")}</a>
                            </div>
                            <h4>{t("social_media")}</h4>
                            <div className="social-icons">
                              <div class="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                              <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                              <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <ul className="navlink">
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/buy-crypto">{t("buy_crypto")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">{t("spot_trading")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="/derivatives">{t("derivatives")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="/markets">{t("markets")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("dex")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/ncx-card">{t("ncx_card")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="/wallet">{t("ncx_wallet")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="/ncx-token">{t("ncx_token")}</a>
                </li>
                <li className="main_title white_bg">
                  <a href="/rewards">{t("rewards")}</a>
                </li>
              </ul>
            </div>
            <div className="login-buttons">
              <Button href="#" target="_blank" rel="noreferrer" className="signin">{t("claim_airdrop")}</Button>
              <Button className="launch-dex" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in")}</Button>
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
                      <div class="text">{t("scan_qr_code_to_download_ncx_mobile_app")}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="translate_lng">
                <div id="tran_lang">
                  <h1>{t("english")}</h1>
                  <DropdownICon />
                </div>
                <div id="language_trans">
                  <div class="language-box">
                    {/* <a href="#">English</a>
                    <a href="#">हिन्दी</a>
                    <a href="#">Español</a>
                    <a href="#">中文</a>
                    <a href="#">Bahasa</a>
                    <a href="#">Tiếng Việt</a>
                    <a href="#">Русский</a>
                    <a href="#">Melayu</a> */}
                    <ChangeButtons />
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
                    <div className="mplo">
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.875 0.5H18.125V1.49902H0.875V0.5ZM1 7.50098L18.125 7.5V8.49902L1 8.5V7.50098ZM0.875 14.5H18.125V15.499H0.875V14.5Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="clols">
                      <CloseIcon />
                    </div>
                  </button>
                  <div
                    className={
                      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
                    <ul>
                      <li>
                        <a href="https://ncx.cx/buy-crypto">{t("buy_crypto")}</a>
                      </li>
                      <li>
                        <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">{t("spot_trading")}</a>
                      </li>
                      <li>
                        <a href="/derivatives">{t("derivatives")}</a>
                      </li>
                      <li>
                        <a href="/market">{t("markets")}</a>
                      </li>
                      <li>
                        <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("dex")}</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/ncx-card">{t("ncx_card")}</a>
                      </li>
                      <li>
                        <a href="ncx-token">{t("ncx_token")}</a>
                      </li>
                      <li>
                        <a href="/rewards">{t("rewards")}</a>
                      </li>
                      <li>
                        <a href="/market-insights">{t("news_insights")}</a>
                      </li>
                      {/* <li>
                        <a className="btn01 signup launching-btn">Sign Up</a>
                      </li> */}
                      <li>
                        <a className="signin launching-btn" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in_sign_up")}</a>
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
              {/* <div className="mobile-launch">
              <div class="dropdown">
                <button class="dropbtn">{t("launch_dex")}</button>
                <div class="dropdown-content">
                  <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("launch_dex")}</a>
                  <a href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in")}</a>
                </div>
              </div>
              </div> */}
              <div className="translate_lng">
                <div id="tran_lang">
                  <h1>{t("english")}</h1>
                  <DropdownICon />
                </div>
                <div id="language_trans">
                  <div class="language-box">
                    {/* <a href="#">English</a>
                    <a href="#">हिन्दी</a>
                    <a href="#">Español</a>
                    <a href="#">中文</a>
                    <a href="#">Bahasa</a>
                    <a href="#">Tiếng Việt</a>
                    <a href="#">Русский</a>
                    <a href="#">Melayu</a> */}
                    <ChangeButtons />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
  );
}