import React from "react";
import '../footer/footer.css';
import Footerlogo from '../../images/new_sitelogo.svg';
import Telegram from '../footer/telegram.svg';
import Twitter from '../footer/twitter.svg';
import Instagram from '../../images/instagram.svg';
import { ReactComponent as NCXGoogle } from '../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../images/ncxappstore.svg';
import MBLNCXGoogle from '../../images/ncxgoogleplay.svg';
import MBLNCXAppStore from '../../images/ncxappstore.svg';
import NCXBarcode from '../../images/ncx-barcode.png';
import { ReactComponent as NCXNewsletterarrow } from '../../images/ncx-newsletterarrow.svg';
import NCXNewsletter from '../newsletter/subscribe';
import { useTranslation } from "react-i18next";


function MyFooter() 
{
    const { t } = useTranslation();

    return(
        <div id="footerdiv">
            <div className="container footer">
                <div class="footer-row">
                    <div class="first-column ftr-col">
                        <h1>{t("products")}</h1>
                        <ul className="ul-one">
                            <li><a href="https://ncx.cx/buy-crypto">{t("buy_crypto")}</a></li>
                            <li><a href="https://trade.ncx.cx/">{t("spot_trading")}</a></li>
                            <li><a href="https://ncx.cx/derivatives">{t("crypto_derivatives")}</a></li>
                            <li><a href="https://ncx.cx/markets">{t("markets")}</a></li>
                            <li><a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("cross_chain_dex")}</a></li>
                            <li><a href="https://ncx.cx/ncx-card">{t("ncx_card")}</a></li>
                            <li><a href="https://ncx.cx/wallet">{t("ncx_defi_wallet")}</a></li>
                            <li><a href="https://ncx.cx/ncx-token">{t("ncx_token")}</a></li>
                            <li><a href="https://ncx.cx/derivatives">{t("stocks_trading")}</a></li>
                            <li><a href="https://ncx.cx/derivatives">{t("forex_trading")}</a></li>
                            <li><a href="https://ncx.cx/derivatives">{t("commodities_trading")}</a></li>
                        </ul>
                        {/* <h1>Derivatives Trading</h1>
                        <ul className="ul-two">
                            <li><a href="#">Crypto Derivatives</a></li>
                            <li><a href="#">Equities Trading</a></li>
                            <li><a href="#">EFTs Trading</a></li>
                            <li><a href="#">Forex Trading</a></li>
                            <li><a href="#">Metals Trading</a></li>
                            <li><a href="#">Indices Trading</a></li>
                            <li><a href="#">Oil & Gas Trading</a></li>
                        </ul> */}
                    </div>
                    <div class="second-column ftr-col">
                        <h1>{t("services")}</h1>
                        <ul className="ul-one">
                            <li><a href="https://ncx.cx/market-insights">{t("ncx_insights")}</a></li>
                            <li><a href="https://ncx.cx/rewards">{t("rewards_program")}</a></li>
                            <li><a href="https://ncx.cx/market-makers">{t("market_makers")}</a></li>
                            <li><a href="https://ncx.cx/institutional">{t("institutional_services")}</a></li>
                            <li><a href="https://ncx.cx/ncx-otc">{t("otc")}</a></li>
                            <li><a href="https://ncx.cx/ncx-ambassador">{t("ncx_ambassador")}</a></li>
                            <li><a href="https://ncx.cx/faq">{t("faq")}</a></li>
                            <li><a href="https://my.ncx.cx/en/helpdesk/chat" target="_blank" rel="noreferrer">{t("support")}</a></li>
                            <li><a href="https://ncx.cx/about-us">{t("about_us")}</a></li>
                            <li><a href="https://ncx.cx/market-insights">{t("media_press")}</a></li>
                        </ul>
                        {/* <h1>Company</h1>
                        <ul className="ul-two">
                            <li><a href="https://ncx.cx/insights">Media & Press</a></li>
                            <li><a href="https://ncx.cx/faq">FAQ</a></li>
                            <li><a href="#">Support</a></li>
                        </ul> */}
                    </div>
                    <div class="third-column ftr-col">
                        <h1>{t("legal")}</h1>
                        <ul className="ul-one">
                        <li><a href="https://ncx.cx/user-agreement">{t("user_agreement")}</a></li>
                            <li><a href="https://ncx.cx/kyc-aml-policy">{t("aml_kyc_policy")}</a></li>
                            <li><a href="https://ncx.cx/privacy-policy">{t("privacy_policy")}</a></li>
                            <li><a href="https://ncx.cx/api-agreement">{t("api_documentation")}</a></li>
                            <li><a href="https://ncx.cx/cookie-policy">{t("cookie_policy")}</a></li>
                            {/* <li className="hiddendss"><a>Red</a></li> */}
                        </ul>
                        <h1>{t("apps")}</h1>
                        <ul className="ul-two">
                            <li><a href="#">{t("ncx_app_on_app_store")}</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer">{t("ncx_app_on_google_play_store")}</a></li>
                            <li><a href="#">{t("ncx_ctrader_on_app_store")}</a></li>
                            <li><a href="#">{t("ncx_ctrader_on_google_play_store")}</a></li>
                        </ul>
                    </div>
                    <div class="fourth-column ftr-col">
                        <div>
                            <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                            <div className="app-barcode-row">
                                <div className="appsttore">
                                    <p>{t("mobile_app")}</p>
                                    <a href="#" target="_blank" rel="noreferrer"><NCXGoogle /></a>
                                    <NCXApple />
                                </div>
                                <div className="bardcodd">
                                    < img src={NCXBarcode} alt="NCX Barcode to Download App" />
                                    <p>{t("scan_to_download_ncx_app")}</p>
                                </div>
                            </div>
                            <div class="social-media">
                                <p>{t("follow_us")}</p>
                                <div className="social-icons">
                                    <div class="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                </div>
                            </div>
                            <div className="fot-newsleter">
                                <p>{t("sign_up_for_updates")}</p>
                                <NCXNewsletter />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="copyright">
                    <p>{t("footer_copyright_1")} <a href="https://ncx.cx/user-agreement">{t("user_agreement")}</a>, <a href="https://ncx.cx/kyc-aml-policy">{t("aml_kyc_policy")}</a> {t("and")} <a href="https://ncx.cx/privacy-policy">{t("privacy_policy")}</a></p>
                    <p>{t("footer_copyright_2")}</p>
                    <p>{t("footer_copyright_3")}</p>
                </div>
            </div>
            <div className="mobile-footer">
                <div className="mob-foot-head">
                    <div class="footer-logo"><a title="NCX" href="https://ncx.cx/"><img src={Footerlogo} alt="NCX" title="NCX" /></a></div>
                </div>
                <div className="mob-foot-ul">
                    <ul>
                        <h1>{t("products")}</h1>
                        <li><a href="https://ncx.cx/buy-crypto">{t("buy_crypto")}</a></li>
                        <li><a href="https://trade.ncx.cx/">{t("spot_trading")}</a></li>
                        <li><a href="https://ncx.cx/derivatives">{t("crypto_derivatives")}</a></li>
                        <li><a href="https://ncx.cx/markets">{t("markets")}</a></li>
                        <li><a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("cross_chain_dex")}</a></li>
                        <li><a href="https://ncx.cx/ncx-card">{t("ncx_card")}</a></li>
                        <li><a href="https://ncx.cx/wallet">{t("ncx_defi_wallet")}</a></li>
                        <li><a href="https://ncx.cx/derivatives">{t("ncx_token")}</a></li>
                        <li><a href="https://ncx.cx/derivatives">{t("stocks_trading")}</a></li>
                        <li><a href="https://ncx.cx/derivatives">{t("forex_trading")}</a></li>
                        <li><a href="https://ncx.cx/derivatives">{t("commodities_trading")}</a></li>
                    </ul>
                    <ul>
                        <h1>{t("services")}</h1>
                        <li><a href="https://ncx.cx/market-insights">{t("ncx_insights")}</a></li>
                        <li><a href="https://ncx.cx/rewards">{t("rewards_program")}</a></li>
                        <li><a href="https://ncx.cx/market-makers">{t("market_makers")}</a></li>
                        <li><a href="https://ncx.cx/institutional">{t("institutional_services")}</a></li>
                        <li><a href="https://ncx.cx/ncx-otc">{t("otc")}</a></li>
                        <li><a href="https://ncx.cx/ncx-ambassador">{t("ncx_ambassador")}</a></li>
                        <li><a href="https://ncx.cx/faq">{t("faq")}</a></li>
                        <li><a href="https://my.ncx.cx/en/helpdesk/chat" target="_blank" rel="noreferrer">{t("support")}</a></li>
                        <li><a href="https://ncx.cx/about-us">{t("about_us")}</a></li>
                        <li><a href="https://ncx.cx/market-insights">{t("media_press")}</a></li>
                    </ul>
                </div>
                {/* <div className="mob-foot-ul">
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
                        <li><a href="https://ncx.cx/insights">Media & Press</a></li>
                        <li><a href="https://ncx.cx/faq">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div> */}
                <div className="mob-foot-ul">
                    <ul>
                        <h1>{t("legal")}</h1>
                        <li><a href="https://ncx.cx/user-agreement">{t("user_agreement")}</a></li>
                        <li><a href="https://ncx.cx/kyc-aml-policy">{t("aml_kyc_policy")}</a></li>
                        <li><a href="https://ncx.cx/privacy-policy">{t("privacy_policy")}</a></li>
                        <li><a href="https://ncx.cx/api-agreement">{t("api_documentation")}</a></li>
                        <li><a href="https://ncx.cx/cookie-policy">{t("cookie_policy")}</a></li>
                    </ul>
                    <ul>
                        <h1>{t("apps")}</h1>
                        <li><a href="#">{t("ncx_app_on_app_store")}</a></li>
                        <li><a href="#" target="_blank" rel="noreferrer">{t("ncx_app_on_google_play_store")}</a></li>
                        <li><a href="#">{t("ncx_ctrader_on_app_store")}</a></li>
                        <li><a href="#">{t("ncx_ctrader_on_google_play_store")}</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <p>{t("follow_us")}</p>
                    <div className="social-icons">
                        <div class="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                        <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                        <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                    </div>
                </div>
                <div className="fot-newsleter">
                    <p>{t("sign_up_for_updates")}</p>
                    <NCXNewsletter />
                    {/* <form>
                        <input aria-label="Your email address" name="email_address" placeholder="Enter Your Email" required type="email" />
                        <button><NCXNewsletterarrow /></button>
                    </form> */}
                </div>
                <div className="app-barcode-row">
                    <div className="appsttore">
                        <p>{t("mobile_app")}</p>
                        <a href="#" target="_blank" rel="noreferrer"><img src={MBLNCXGoogle} alt="ncx-app-on-googleplay-store" /></a>
                        <img src={MBLNCXAppStore} alt="ncx-app-on-appstore" />
                    </div>
                    <div className="bardcodd">
                        < img src={NCXBarcode} alt="NCX Barcode to Download App" />
                        <p>{t("scan_to_download_ncx_app")}</p>
                    </div>
                </div>
                <div class="copyright">
                    <p>{t("footer_copyright_1")} <a href="https://ncx.cx/user-agreement">{t("user_agreement")}</a>, <a href="https://ncx.cx/kyc-aml-policy">{t("aml_kyc_policy")}</a> {t("and")} <a href="https://ncx.cx/privacy-policy">{t("privacy_policy")}</a></p>
                    <p>{t("footer_copyright_2")}</p>
                    <p>{t("footer_copyright_3")}</p>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;