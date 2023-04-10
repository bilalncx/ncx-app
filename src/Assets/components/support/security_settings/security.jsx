import { React, useState} from "react";
import '../../../pages/support/support.css';
import MyHeader from '../../../components/header/header';
import MyFooter from '../../../components/footer/footer';
import SearchModal from '../../../components/support/autosearch';
import ArticleSlider from '../article_slide';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Telegram from '../../../components/footer/telegram.svg';
import Twitter from '../../../components/footer/twitter.svg';
import Instagram from '../../../images/instagram.svg';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import FA6 from '../../../images/2fa-6.png'; 
import FA2 from '../../../images/2fa-2.png'; 
import FA3 from '../../../images/2fa-3.png'; 
import FA4 from '../../../images/2fa-4.png'; 
import FA5 from '../../../images/2fa-5.png';
import Phishin1 from '../../../images/antiphishing1.png';
import Phishin2 from '../../../images/antiphishing2.png';
import Phishin3 from '../../../images/antiphishing3.png';
import Phishin4 from '../../../images/antiphishing4.png'; 
import ChangePass1 from '../../../images/changepass1.png';
import ChangePass2 from '../../../images/changepass2.png';
import ChangePass3 from '../../../images/changepass3.png';
import ChangePass4 from '../../../images/changepass4.png';
import Whitelist1 from '../../../images/whitelist1.png';
import Whitelist2 from '../../../images/whitelist2.png';
import Whitelist3 from '../../../images/whitelist3.png';
import Whitelist4 from '../../../images/whitelist4.png';
import Whitelist5 from '../../../images/whitelist5.png';
import ResetPassword1 from '../../../images/resetpass1.png';
import ResetPassword2 from '../../../images/resetpass2.png';
import ResetPassword3 from '../../../images/resetpass3.png';
import ResetPassword4 from '../../../images/resetpass4.png';
import ResetPassword5 from '../../../images/resetpass5.png';
import { useTranslation } from "react-i18next";

function SupportPageSet()
{

    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div id="support_faqdetails">

            <MyHeader />

            <SearchModal />

            <div id="insight_page" className="details_faqs">
                <div className="container">
                    <div className="row">
                        <div className="col fest">
                            <div className="support_leftbar">
                                <div className="ncx-trends">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <p>{t("faq")}</p>
                                </div>
                                <div className="faq_nav">
                                    <a href="/faq">{t("faq")}</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>{t("settings_&_security")}</p>
                                </div>
                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        {t("google_2fa")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        {t("change_password")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        {t("forgot_password")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 4 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(4)}
                                        >
                                        {t("anti_phishing")}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 5 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(5)}
                                        >
                                        {t("address_whitelist")}
                                        </button>
                                    </li>
                                </ul>
                                <h1 className="support_ticket">{t("open_support_ticket")}</h1>
                                <p className="support_txt">{t("open_support_ticket_text")}<a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in")}</a>
                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("how_to_add_two_factor_authentication")}</h1>
                                <p><strong>{t("what_is_google_authenticator")}</strong></p>
                                <p>{t("answer_what_is_google_authenticator")}</p>
                                <p><strong>{t("how_to_enable_google_authenticator")}</strong></p>
                                <p>{t("enable_step_1")}</p>
                                <p>{t("note")}</p>
                                <p>{t("enable_step_2")}</p>
                                <p>{t("enable_step_3")}</p>
                                <p>{t("enable_step_4")}</p>
                                <p><a href="https://itunes.apple.com/cn/app/google-authenticator/id388497605?mt=8" target="_blank" rel="noreferrer">{t("enable_step_5")}</a></p>
                                <p>{t("enable_step_6")}</p>
                                <p><a href="https://play.google.com/store/search?q=google+authenticator&c=apps&hl" target="_blank" rel="noreferrer">{t("enable_step_7")}</a></p>
                                <p>{t("enable_step_8")}</p>
                                <p>{t("enable_step_9")}</p>
                                <img src={FA3} alt="ncx-faq" />
                                <p>{t("enable_step_10")}</p>
                                <img src={FA2} alt="ncx-faq" />
                                <p>{t("enable_step_11")}</p>
                                <p>{t("enable_step_12")}</p>
                                <p>{t("reminder")}</p>
                                <ul>
                                    <li>{t("enable_step_13")}</li>
                                    <li>{t("enable_step_14")}</li>
                                    <li>{t("enable_step_15")}</li>
                                </ul>
                                <img src={FA4} alt="ncx-faq" />
                                <p>{t("enable_step_16")}</p>
                                <img src={FA5} alt="ncx-faq" />
                                <p>{t("enable_step_17")}</p>
                                <img src={FA6} alt="ncx-faq" />
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("change_password")}</h1>
                                <p>{t("change_password_step_1")}</p>
                                <p>{t("change_password_step_2")}</p>
                                <p>{t("change_password_step_3")}</p>
                                <img src={ChangePass1} alt="ncx-change-password" />
                                <p>{t("change_password_step_4")}</p>
                                <img src={ChangePass2} alt="ncx-change-password" />
                                <p>{t("change_password_step_5")}</p>
                                <img src={ChangePass3} alt="ncx-change-password" />
                                <p>{t("change_password_step_6")}</p>
                                <img src={ChangePass4} alt="ncx-change-password" />
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("reset_password")}</h1>
                                <p>{t("reset_password_step_1")}</p>
                                <p>{t("reset_password_step_2")}</p>
                                <p>{t("reset_password_step_3")}</p>
                                <img src={ResetPassword1} alt="ncx-resetpassword" />
                                <p>{t("reset_password_step_4")}</p>
                                <img src={ResetPassword2} alt="ncx-resetpassword" />
                                <p>{t("reset_password_step_5")}</p>
                                <img src={ResetPassword3} alt="ncx-resetpassword" />
                                <p>{t("reset_password_step_6")}</p>
                                <img src={ResetPassword4} alt="ncx-resetpassword" />
                                <p>{t("reset_password_step_7")}</p>
                                <img src={ResetPassword5} alt="ncx-resetpassword" />
                            </div>
                            <div className={toggleState === 4 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("how_to_add_anti_phishing_code")}</h1>
                                <p><strong>{t("what_is_phishing_")}</strong></p>
                                <p>{t("answer_what_is_phishing")}</p>
                                <p>{t("how_to_enable_anti_phishing_code")}</p>
                                <p>{t("enable_phishing_code_1")}</p>
                                <p>{t("enable_phishing_code_2")}</p>
                                <img src={Phishin1} alt="ncx-phishing" />
                                <p>{t("enable_phishing_code_3")}</p>
                                <p>{t("enable_phishing_code_4")}</p>
                                <img src={Phishin2} alt="ncx-phishing" />
                                <p>{t("enable_phishing_code_5")}</p>
                                <p>{t("enable_phishing_code_6")}</p>
                                <img src={Phishin3} alt="ncx-phishing" />
                                <p>{t("completed")}</p>
                                <p>{t("enable_phishing_code_7")}</p>
                                <img src={Phishin4} alt="ncx-phishing" />
                            </div>
                            <div className={toggleState === 5 ? "sprt-content active" : "sprt-content"}>
                                <h1>{t("how_to_add_address_whitelisting")}</h1>
                                <p>{t("answer_how_to_add_address_whitelisting")}</p>
                                <p>{t("please_follow_simple_steps_below_to_whitelist_withdrawal_address")}</p>
                                <p>{t("login_ncx_dashboard")}</p>
                                <p>{t("go_to_profile_security")}</p>
                                <img src={Whitelist1} alt="ncx-whitelist" />
                                <p>{t("click_on_add")}</p>
                                <img src={Whitelist2} alt="ncx-whitelist" />
                                <p>{t("choose_asset_add_wallet")}</p>
                                <img src={Whitelist3} alt="ncx-whitelist" />
                                <p>{t("enter_the_code_sent_emails")}</p>
                                <img src={Whitelist4} alt="ncx-whitelist" />
                                <img src={Whitelist5} alt="ncx-whitelist" />
                            </div>
                        </div>
                        <div className="col thest">
                            <ArticleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <MyFooter />

        </div>
    )
}

export default SupportPageSet;