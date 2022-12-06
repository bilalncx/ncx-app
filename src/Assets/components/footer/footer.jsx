import React from "react";
import '../footer/footer.css';
import Footerlogo from '../footer/NCX-logo.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';

function MyFooter() 
{
    return(
        <div id="footerdiv">
            <div className="container">
                <div class="footer-row">
                    <div class="first-column">
                        <ul>
                            <li><a href="https://ncx.cx/">Markets</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="https://ncx.cx/market">Security</a></li>
                            <li><a href="https://ncx.cx/staking">NeroSwap</a></li>
                            <li><a href="https://ncx.cx/rewards">Staking</a></li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <ul>
                            <li><a href="https://ncx.cx/user-agreement">Whitepaper</a></li>
                            <li><a href="https://ncx.cx/privacy-policy">Nero Coin</a></li>
                        </ul>
                    </div>
                    <div class="third-column">
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">KYC and AML Policy</a></li>
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
                    <p>© 2022 NCX all rights reserved NCX Digital Exchange LLC, Company Reg. Number - 2477 LLC 2022 </p>
                    <p>Registered Office Address - Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines</p>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;