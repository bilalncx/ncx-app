import React from "react";
import { ReactComponent as NCXGooglePay } from '../../../images/ncx-googlepay.svg';
import { ReactComponent as NCXApplePay } from '../../../images/ncx-applepay.svg';
import './fourth.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXIphoneAddWallet from '../../../images/ncx-iphone-addwallet.png';
import NCXiPhoneTransactions from '../../../images/ncx-iphonetransactions.png';
import NCXLogo from '../../../images/ncx-black-logo.svg';

function NCXDebitCardSection()
{
    return(
        <div className="ncxcard">
            <div className="container">
                <div className="card-row row">
                    <div id="mobile-showcard">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-cardddd">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>Card</p>
                            </div>
                            <h1>One Card</h1>
                            <h1 className="trprr">Unlimited Possibilities</h1>
                            <h1>Launching 2023 <span className="trprr">Apply Now</span></h1>
                            <form id="email-subscription">
                                <input aria-label="Your email address" name="email_address" placeholder="Email" type="email" required />
                                <button>Apply</button>
                            </form>
                            <div className="cryptopay">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="cardmobileimg">
                            <div className="ncx-iphoneimages">
                                <img src={NCXIphoneAddWallet} alt="NCX iPhone Add wallet" />
                            </div>
                            <div className="ncx-transactionphone">
                                <img className="transact-iphone"  src={NCXiPhoneTransactions} alt="NCX iPhone Transactions"/>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-cardddd">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>Card</p>
                            </div>
                            <h1>One Card,</h1>
                            <h1>Unlimited Possibilities</h1>
                            <h1>Apply Now</h1>
                            <form id="email-subscription">
                                <input aria-label="Your email address" name="email_address" placeholder="Email" type="email" required />
                                <button>Apply</button>
                            </form>
                            <div className="cryptopay">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXDebitCardSection;