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
import Withdrawal1 from '../../../images/withdrwal1.png';
import Withdrawal2 from '../../../images/withdrwal2.png';
import Withdrawal3 from '../../../images/withdrwal3.png';
import Withdrawal4 from '../../../images/withdrwal4.png';
import Withdrawal5 from '../../../images/withdrwal5.png';
import Withdrawal6 from '../../../images/withdrwal6.png';
import Withdrawal7 from '../../../images/withdrwal7.png';
import Withdrawal8 from '../../../images/withdrwal8.png';



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

            <div id="support_faq_details" className="details_faqs">
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
                                    <p>Withdrawal</p>
                                </div>

                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        Withdrawals on Desktop
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        Deposits on Mobile App
                                        </button>
                                    </li>
                                </ul>

                                <h1 className="support_ticket">Open Support Ticket</h1>
                                <p className="support_txt">Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="#">Sign In</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>Make a Withdrawal</h1>
                                <p>Please follow the simple steps below to Withdraw Cryptocurrencies from your NCX Wallet.</p>
                                <p>1. Go to ‘Wallets’ section in NCX Dashboard and select the Asset you wish to Withdraw.</p>
                                <img src={Withdrawal1} alt="ncx-deposits" />
                                <p>2. Click on 3 dots in the top right corner of the wallet widget, select ‘Withdraw’</p>
                                <img src={Withdrawal2} alt="ncx-deposits" />
                                <p>3. Choose the Blockchain Network, make sure you are sending assets via correct network, if you send the funds via wrong network, they would be permanently lost</p>
                                <img src={Withdrawal3} alt="ncx-deposits" />
                                <p>4. Enter the amount</p>
                                <img src={Withdrawal4} alt="ncx-deposits" />
                                <p>5. Enter a withdrawal wallet address or select the address from  ‘Saved Withdrawals’</p>
                                <img src={Withdrawal5} alt="ncx-deposits" />
                                <p>6. Enter a confirmation code sent to the registered email, if you have not received an email check junk/spam folder</p>
                                <img src={Withdrawal6} alt="ncx-deposits" />
                                <img src={Withdrawal7} alt="ncx-deposits" />
                                <p>7. You will receive a ‘successful withdrawal’ confirmation email, to view your recent withdrawals go to ‘Transactions’ section in your NCX Dashboard and select ‘Withdraw’</p>
                                <img src={Withdrawal8} alt="ncx-deposits" />
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h2>How to Make a Withdrawal on Mobile</h2>
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