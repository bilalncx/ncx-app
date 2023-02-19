import React from "react";
import '../footer/footer.css';
import Footerlogo from '../footer/NCX-logo.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import Instagram from '../../images/instagram.svg';
import { ReactComponent as NCXGoogle } from '../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../images/ncxappstore.svg';
import NCXBarcode from '../../images/ncx-barcode.png';
import { ReactComponent as NCXNewsletterarrow } from '../../images/ncx-newsletterarrow.svg';

function MyFooter() 
{
    return(
        <div id="footerdiv">
            <div className="container footer">
                <div class="footer-row">
                    <div class="first-column">
                        <h1>Products</h1>
                        <ul className="ul-one">
                            <li><a href="https://ncx.cx/buy-crypto">Buy Crypto</a></li>
                            <li><a href="#">Spot Trading</a></li>
                            <li><a href="https://ncx.cx/market-makers">Markets</a></li>
                            <li><a href="#">DEX</a></li>
                            <li><a href="https://ncx.cx/ncx-card">NCX Card</a></li>
                            <li><a href="#">NCX Token</a></li>
                        </ul>
                        <h1>Derivatives Trading</h1>
                        <ul className="ul-two">
                            <li><a href="#">Crypto Derivatives</a></li>
                            <li><a href="#">Equities Trading</a></li>
                            <li><a href="#">EFTs Trading</a></li>
                            <li><a href="#">Forex Trading</a></li>
                            <li><a href="#">Metals Trading</a></li>
                            <li><a href="#">Indices Trading</a></li>
                            <li><a href="#">Oil & Gas Trading</a></li>
                        </ul>
                    </div>
                    <div class="second-column">
                        <h1>Services</h1>
                        <ul className="ul-one">
                            <li><a href="https://ncx.cx/task-rewards">Referral Program</a></li>
                            <li><a href="https://ncx.cx/market-makers">Market Makers</a></li>
                            <li><a href="https://ncx.cx/institutional">Institutional Services</a></li>
                            <li><a href="https://ncx.cx/ncx-otc">OTC</a></li>
                            <li><a href="https://ncx.cx/insights">NCX Trends</a></li>
                            <li><a href="https://ncx.cx/ncx-ambassador">NCX Ambassador</a></li>
                        </ul>
                        <h1>Company</h1>
                        <ul className="ul-two">
                            <li><a href="#">About Us</a></li>
                            <li><a href="https://ncx.cx/insights">Media & Press</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Support</a></li>
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
                            <li className="hiddendss"><a>Red</a></li>
                        </ul>
                        <h1>Apps</h1>
                        <ul className="ul-two">
                            <li><a href="#">NCX App on App Store</a></li>
                            <li><a href="#">NC App on Google Play Store</a></li>
                        </ul>
                    </div>
                    <div class="fourth-column">
                        <div>
                            <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                            <div className="app-barcode-row">
                                <div className="appsttore">
                                    <p>Mobile App</p>
                                    <NCXGoogle />
                                    <NCXApple />
                                </div>
                                <div className="bardcodd">
                                    < img src={NCXBarcode} alt="NCX Barcode to Download App" />
                                    <p>Scan to Download NCX App</p>
                                </div>
                            </div>
                            <div class="social-media">
                                <p>Follow us</p>
                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                            <div className="fot-newsleter">
                                <p>Sign Up for Updates</p>
                                <form>
                                    <input aria-label="Your email address" name="email_address" placeholder="Enter Your Email" required type="email" />
                                    <button><NCXNewsletterarrow /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="copyright">
                    <p>By using any services provided by NCX Platform you agree with NCX Digital Exchange L.L.C. <a href="https://ncx.cx/user-agreement">User Agreement</a>, <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a> and <a href="https://ncx.cx/privacy-policy">Privacy Policy</a></p>
                    <p>NCX does not offer Services to residents of USA, Afghanistan, American Samoa, the Bahamas, Botswana, Democratic People's Republic of Korea, Ethiopia, Ghana, Guam, Iran, Iraq, Libya, Panama, Puerto Rico, Samoa, Saudi Arabia, Sri Lanka, Syria, Trinidad and Tobago, Tunisia, US Virgin Islands, Yemen</p>
                    <p>NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2022 © 2022-2023 All rights reserved.</p>
                </div>
            </div>
            <div className="mobile-footer">
                <div className="mob-foot-head">
                    <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                </div>
                <div className="mob-foot-ul">
                    <ul>
                        <h1>Products</h1>
                        <li><a href="https://ncx.cx/buy-crypto">Buy Crypto</a></li>
                        <li><a href="#">Spot Trading</a></li>
                        <li><a href="https://ncx.cx/market-makers">Markets</a></li>
                        <li><a href="https://ncx.cx/ncx-card">NCX Card</a></li>
                        <li><a href="#">NCX Token</a></li>
                    </ul>
                    <ul>
                        <h1>Services</h1>
                        <li><a href="https://ncx.cx/task-rewards">Referral Program</a></li>
                        <li><a href="https://ncx.cx/market-makers">Market Makers</a></li>
                        <li><a href="https://ncx.cx/ncx-otc">OTC</a></li>
                        <li><a href="https://ncx.cx/insights">NCX Trends</a></li>
                        <li><a href="https://ncx.cx/ncx-ambassador">NCX Ambassador</a></li>
                    </ul>
                </div>
                <div className="mob-foot-ul">
                    <ul>
                        <h1>Derivatives Trading</h1>
                        <li><a href="#">Crypto Derivatives</a></li>
                        <li><a href="#">Equities Trading</a></li>
                        <li><a href="#">EFT's Trading</a></li>
                        <li><a href="#">Forex Trading</a></li>
                        <li><a href="#">Metals Trading</a></li>
                        <li><a href="#">Indices Trading</a></li>
                        <li><a href="#">Oil & Gas Trading</a></li>
                    </ul>
                    <ul>
                        <h1>Company</h1>
                        <li><a href="#">About Us</a></li>
                        <li><a href="https://ncx.cx/insights">Media & Press</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="mob-foot-ul">
                    <ul>
                        <h1>Legal</h1>
                        <li><a href="https://ncx.cx/user-agreement">User Agreement</a></li>
                        <li><a href="https://ncx.cx/kyc-aml-policy">AML and KYC Policy</a></li>
                        <li><a href="https://ncx.cx/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://ncx.cx/api-agreement">API Documentation</a></li>
                        <li><a href="https://ncx.cx/cookie-policy">Cookie Policy</a></li>
                    </ul>
                    <ul>
                        <h1>Apps</h1>
                        <li><a href="#">NCX App on App Store</a></li>
                        <li><a href="#">NCX App on Google Play Store</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <p>Follow us</p>
                    <div className="social-icons">
                        <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                        <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                        <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                    </div>
                </div>
                <div className="fot-newsleter">
                    <p>Sign Up for Updates</p>
                    <form>
                        <input aria-label="Your email address" name="email_address" placeholder="Enter Your Email" required type="email" value="" />
                        <button><NCXNewsletterarrow /></button>
                    </form>
                </div>
                <div className="app-barcode-row">
                    <div className="appsttore">
                        <p>Mobile App</p>
                        <NCXGoogle />
                        <NCXApple />
                    </div>
                    <div className="bardcodd">
                        < img src={NCXBarcode} alt="NCX Barcode to Download App" />
                        <p>Scan to Download NCX App</p>
                    </div>
                </div>
                <div class="copyright">
                    <p>By using any services provided by NCX Platform you agree with NCX Digital Exchange L.L.C. <a href="https://ncx.cx/user-agreement">User Agreement</a>, <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a> and <a href="https://ncx.cx/privacy-policy">Privacy Policy</a></p>
                    <p>NCX does not offer Services to residents of USA, Afghanistan, American Samoa, the Bahamas, Botswana, Democratic People's Republic of Korea, Ethiopia, Ghana, Guam, Iran, Iraq, Libya, Panama, Puerto Rico, Samoa, Saudi Arabia, Sri Lanka, Syria, Trinidad and Tobago, Tunisia, US Virgin Islands, Yemen</p>
                    <p>NCX Digital Exchange L.L.C., Company Reg. Number - 2477 LLC 2022 © 2022-2023 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;