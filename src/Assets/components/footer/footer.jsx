import React from "react";
import '../footer/footer.css';
import Footerlogo from '../footer/NCX-logo.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import MobileTelegram from './telegrss.svg';
import Instagram from '../../images/instagram.svg';

function MyFooter() 
{
    return(
        <div id="footerdiv">
            <div className="container footer">
                <div class="footer-row">
                    <div class="first-column">
                        <h1>Products</h1>
                        <ul className="ul-one">
                            <li><a href="">Buy Crypto</a></li>
                            <li><a href="#">Spot Trading</a></li>
                            <li><a href="#">Markets</a></li>
                        </ul>
                        <h1>Derivatives Trading</h1>
                        <ul className="ul-two">
                            <li><a href="#">Crypto Futures Trading</a></li>
                            <li><a href="#">Equities Trading</a></li>
                            <li><a href="#">EFTs Trading</a></li>
                            <li><a href="#">Forex Trading</a></li>
                            <li><a href="#">Metals Trading</a></li>
                            <li><a href="#">Indices Trading</a></li>
                            <li><a href="#">Oil & Gas Trading</a></li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <h1>DEX</h1>
                        <ul className="ul-one">
                            <li><a href="#">BSC Network</a></li>
                            <li><a href="#">Ethereum Network</a></li>
                            <li><a href="#">Polygon Network</a></li>
                            <li><a href="#">Avalance Network</a></li>
                        </ul>
                        <h1>About</h1>
                        <ul className="ul-two">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">NCX Trends</a></li>
                            <li><a href="#">Media & Press</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Referral Program</a></li>
                            <li><a href="#">Claim Sign Up Bonus Airdrop</a></li>
                        </ul>
                    </div>
                    <div class="third-column">
                        <h1>Legal</h1>
                        <ul className="ul-one">
                            <li><a href="https://ncx.cx/user-agreement">User Agreement</a></li>
                            <li><a href="https://ncx.cx/kyc-aml-policy">AML and KYC Policy</a></li>
                            <li><a href="https://ncx.cx/privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://ncx.cx/api-agreement">API Documentation</a></li>
                            <li><a href="https://ncx.cx/cookie-policy">Cookie Policy</a></li>
                        </ul>
                        <h1>Apps</h1>
                        <ul className="ul-two">
                            <li><a href="#">NCX App on App Store</a></li>
                            <li><a href="#">NC App on Google Play Store</a></li>
                            <li><a href="#">NCX Trade on App Store</a></li>
                            <li><a href="#">NCX Trade on Google Play Store</a></li>
                        </ul>
                    </div>
                    <div class="fourth-column">
                        <div>
                            <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                            <div class="social-media">
                                <div class="icons"><a href="https://ncx.cx"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                
                                <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>

                                <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                            </div>
                            <div class="info-mail"><a title="NCX Mail" href="mailto:support@ncx.cx">support@ncx.cx</a></div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="copyright">
                    <p>By using any services provided by NCX Platform you agree with NCX Digital Exchange L.L.C. <a href="https://ncx.cx/user-agreement">User Agreement</a>, <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a> and <a href="https://ncx.cx/privacy-policy">Privacy Policy</a></p>
                    <p>NCX does not offer Services to residents of USA, Afghanistan, American Samoa, the Bahamas, Botswana, Democratic People's Republic of Korea, Ethiopia,  Ghana, Guam, Iran, Iraq, Libya, Panama, Puerto Rico, Samoa, Saudi Arabia, Sri Lanka, Syria, Trinidad and Tobago, Tunisia, US Virgin Islands, Yemen. NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2022, Registered Office Address - Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines</p>
                    <p>NCX Digital Exchange L.L.C. © 2022-2023 All rights reserved.</p>
                </div>
            </div>
            <div className="mobile-footer">
                <div className="mob-foot-head">
                    <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                    <button><a href="#">Sign In</a></button>
                </div>
                <div className="mob-foot-ul">
                    <ul>
                        <li><a href="https://ncx.cx">Home</a></li>
                        <li><a href="#">Exchange</a></li>
                        <li><a href="#">Trade</a></li>
                        <li><a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a></li>
                        <li><a href="https://ncx.cx/#market">Markets</a></li>
                        <li><a href="https://ncx.cx/blog">Connect</a></li>
                        <li><a href="https://ncx.cx/#faq">FAQ</a></li>
                        <li><a href="https://ncx.cx/api-agreement">Documentation</a></li>
                    </ul>
                    <div class="social-media">
                        <div class="icons"><a href="https://ncx.cx"><img src={MobileTelegram} alt="NCX" title="Telegram"/></a></div>
                        <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Contact Support at <a title="NCX Mail" href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                    <p>By using any services provided by NCX Exchange including exchnage.ncx.cx, dex.ncx.cx, trade.ncx.cx, my.ncx.cx you agree with NCX Digital Exchange L.L.C.  <a href="https://ncx.cx/user-agreement">User Agreement</a>, <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a> and <a href="https://ncx.cx/privacy-policy">Privacy Policy</a></p>
                    <p>NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2022, Registered Office Address - Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines</p>
                    <p>NCX Digital Exchange L.L.C. © 2022-2023 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;