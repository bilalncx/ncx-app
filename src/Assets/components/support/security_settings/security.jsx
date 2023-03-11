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


function SupportPageSet()
{
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
                                    <p>FAQs</p>
                                </div>
                                <div className="faq_nav">
                                    <a href="/faq">FAQs</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>Settings & Security</p>
                                </div>
                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        Google 2FA
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        Change Password
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        Forgot Password
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 4 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(4)}
                                        >
                                        Anti Phishing
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 5 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(5)}
                                        >
                                        Address Whitelist
                                        </button>
                                    </li>
                                </ul>
                                <h1 className="support_ticket">Open Support Ticket</h1>
                                <p className="support_txt">Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign In</a>
                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>How to Add Two-Factor Authentication</h1>
                                <p><strong>What is Google Authenticator</strong></p>
                                <p>Google Authenticator is a dynamic password tool and its work principle is like SMS dynamic verification. After binding Google Authenticator, it will generate a dynamic verification code every 30 seconds, and the verification code is used for security verification of login, withdrawal, security settings modification and other operations.</p>
                                <p><strong>How to enable Google Authenticator</strong></p>
                                <p>1. Install Google Authenticator App on your mobile device</p>
                                <p>Note:</p>
                                <p>iOS users can download Google Authenticator App via App Store;</p>
                                <p>Android users can download Google Authenticator via Google Play</p>
                                <p>iOS download link:</p>
                                <p><a href="https://itunes.apple.com/cn/app/google-authenticator/id388497605?mt=8" target="_blank" rel="noreferrer">https://itunes.apple.com/cn/app/google-authenticator/id388497605?mt=8</a></p>
                                <p>Android download link:</p>
                                <p><a href="https://play.google.com/store/search?q=google+authenticator&c=apps&hl" target="_blank" rel="noreferrer">https://play.google.com/store/search?q=google+authenticator&c=apps&hl</a></p>
                                <p>2. Get Google key</p>
                                <p>Go to Profile > Security, click on Google Authenticator</p>
                                <img src={FA3} alt="ncx-faq" />
                                <p>3. Download/Open Google Authenticator App on your mobile device and click proceed</p>
                                <img src={FA2} alt="ncx-faq" />
                                <p>4. Generate Google Authenticator code</p>
                                <p>Copy the key in [Bind Google Authenticator] page;</p>
                                <p>Reminder:</p>
                                <ul>
                                    <li>It is recommended to record it in paper documents but not electronic device.</li>
                                    <li>If the mobile phone is lost, you can restore your Google Authenticator through this key.</li>
                                    <li>Saving the QR code to the mobile phone or copying the key to the clipboard may pose a security risk. Please keep it properly.</li>
                                </ul>
                                <img src={FA4} alt="ncx-faq" />
                                <p>4. Enter Google Authenticator code and click ‘Enable’</p>
                                <img src={FA5} alt="ncx-faq" />
                                <p>5. Completed, your Google Authenticator is now active, you will be asked to enter the code for Log-Ins, Withdrawals, Account and Settings Changes, in order to disable Google Authenticator you will be asked to provide the security code sent to the account registered email address</p>
                                <img src={FA6} alt="ncx-faq" />
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h1>Change Password</h1>
                                <p>Please follow the simple steps below to Change your Account Password.</p>
                                <p>1. Login to your NCX Dashboard. </p>
                                <p>Go to Profile > Settings, click on Change Password</p>
                                <img src={ChangePass1} alt="ncx-change-password" />
                                <p>2. You will receive 5-Digit OTP Code to the registered email</p>
                                <img src={ChangePass2} alt="ncx-change-password" />
                                <p>3. Enter a 5-Digit OTP Code and click ‘Submit’</p>
                                <img src={ChangePass3} alt="ncx-change-password" />
                                <p>4. Enter your new secure Password, for additional security do not use the Password previously used on other platforms or websites, as these could potentially be compromised.</p>
                                <img src={ChangePass4} alt="ncx-change-password" />
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h1>Reset Password</h1>
                                <p>Please follow the simple steps below to Reset your Account Password.</p>
                                <p>1. Go to www.my.ncx.cx</p>
                                <p>Click ‘Forgot your password?’ to proceed</p>
                                <img src={ResetPassword1} alt="ncx-resetpassword" />
                                <p>2. Enter the email address linked to your NCX account</p>
                                <img src={ResetPassword2} alt="ncx-resetpassword" />
                                <p>3. You will receive  5-Digit OTP Code in your email inbox, in case you have not received the code within 2 minutes, please check your spam folder</p>
                                <img src={ResetPassword3} alt="ncx-resetpassword" />
                                <p>Enter  5-Digit OTP Code and click ‘Confirm’</p>
                                <img src={ResetPassword4} alt="ncx-resetpassword" />
                                <p>4. Enter your new secure Password, for additional security do not use the Password previously used on other platforms or websites, as these could potentially be compromised.</p>
                                <img src={ResetPassword5} alt="ncx-resetpassword" />
                            </div>
                            <div className={toggleState === 4 ? "sprt-content active" : "sprt-content"}>
                                <h1>How to Add Anti Phishing Code</h1>
                                <p><strong>What is phishing?</strong></p>
                                <p>The phishing attack is a criminal cheating process by getting sensitive information like username, password, fund, and ID by means of disguising others. These messages claim that they are from an official or internet administrator to get trust from the victim.</p>
                                <p>How to enable Anti Phishing Code</p>
                                <p>1. Login to your NCX Dashboard. </p>
                                <p>Go to Profile > Security, click on Anti Phishing</p>
                                <img src={Phishin1} alt="ncx-phishing" />
                                <p>2. Type in your 6-12 Digit Code, you can choose any number combination.</p>
                                <p>Please  make sure to make a note of your Anti Phishing Code and click ‘Proceed’</p>
                                <img src={Phishin2} alt="ncx-phishing" />
                                <p>3. Open Google Authenticator on your mobile device to check the Google Authenticator code for NCX.</p>
                                <p>Enter your 6-digit Google Authenticator code and click ‘Proceed’</p>
                                <img src={Phishin3} alt="ncx-phishing" />
                                <p>4. Completed</p>
                                <p>Your Anti Phishing Code has been activated. All email correspondence from NCX will now have your Anti Phishing Code listed  in the top right corner</p>
                                <img src={Phishin4} alt="ncx-phishing" />
                            </div>
                            <div className={toggleState === 5 ? "sprt-content active" : "sprt-content"}>
                                <h1>How to Add Address Whitelisting</h1>
                                <p>For security, new crypto withdrawal addresses need to be whitelisted before funds can be withdrawn to it.</p>
                                <p>Please follow the simple steps below to whitelist your withdrawal address.</p>
                                <p>1. Login to your NCX Dashboard.</p>
                                <p>Go to Profile>Security, click on Whitelist</p>
                                <img src={Whitelist1} alt="ncx-whitelist" />
                                <p>2. Click on ‘+ Add’</p>
                                <img src={Whitelist2} alt="ncx-whitelist" />
                                <p>3. Choose the Asset and add a Wallet Address, click ‘Submit’</p>
                                <img src={Whitelist3} alt="ncx-whitelist" />
                                <p>4. Enter the Code sent to your emails</p>
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