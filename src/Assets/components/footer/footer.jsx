import React from "react";
import '../footer/footer.css';
import Footerlogo from '../footer/NCX-logo.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import MobileTelegram from './telegrss.svg';

function MyFooter() 
{
    return(
        <div id="footerdiv">
            <div className="container footer">
                <div class="footer-row">
                    <div class="first-column">
                        <ul>
                            <li><a href="">Exchange</a></li>
                            <li><a href="https://ncx.cx/#features">Trade</a></li>
                            <li><a href="https://ncx.cx/#market">Markets</a></li>
                            <li><a href="">Swap</a></li>
                            <li><a href="#">Earn</a></li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <ul>
                            <li><a href="https://ncx.cx/blog">News & Press</a></li>
                            <li><a href="https://ncx.cx/#faq">FAQ</a></li>
                            <li><a href="https://ncx.cx/blog">Connect</a></li>
                            <li><a href="#">Download App</a></li>
                        </ul>
                    </div>
                    <div class="third-column">
                        <ul>
                            <li><a href="https://ncx.cx/user-agreement">User Agreement</a></li>
                            <li><a href="https://ncx.cx/kyc-aml-policy">AML and KYC Policy</a></li>
                            <li><a href="https://ncx.cx/privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://ncx.cx/api-agreement">API Documentation</a></li>
                            <li><a href="https://ncx.cx/cookie-policy">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div class="fourth-column">
                        <div>
                            <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                            <div class="social-media">
                                <div class="icons"><a href="https://ncx.cx"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                
                                <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                            </div>
                            <div class="info-mail"><a title="NCX Mail" href="mailto:support@ncx.cx">support@ncx.cx</a></div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="copyright">
                    <p>By using any services provided by NCX Exchange including exchnage.ncx.cx, dex.ncx.cx, trade.ncx.cx, my.ncx.cx you agree with NCX Digital Exchange L.L.C.  <a href="https://ncx.cx/user-agreement">User Agreement</a>, <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a> and <a href="https://ncx.cx/privacy-policy">Privacy Policy</a></p>
                    <p>NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2022, Registered Office Address - Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines</p>
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
                        <li><a href="#">DEX</a></li>
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