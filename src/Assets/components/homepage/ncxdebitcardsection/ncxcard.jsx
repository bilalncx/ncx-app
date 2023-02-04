import React from "react";
import Button from "@mui/material/Button";
import NCXMblCardScreen from '../../../images/ncx-card-mbl.png';
import { ReactComponent as NCXGooglePay } from '../../../images/ncx-googlepay.svg';
import { ReactComponent as NCXApplePay } from '../../../images/ncx-applepay.svg';
import './ncxcard.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXDebitCard from '../../../images/ncx-blackcard.png';
import NCXIphoneAddWallet from '../../../images/ncx-iphone-addwallet.png';
import NCXiPhoneTransactions from '../../../images/ncx-iphonetransactions.png';

function NCXDebitCardSection()
{
    return(
        <div className="ncxcard">
            <div className="container">
                <div className="card-row row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>NCX Debit Card</h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3><span>Powered By</span>Crypto</h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>One Card</h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3><span>Unlimited Possibilities</span></h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>Pay with NCX Premium MasterCard at 44 Million Merchant locations Worldwide ATM Withdrawals, Top up by Crypto or Fiat</p>
                            <div className="cryptopay">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                            <Button href="https://ncx.cx" className="card-view-all">View All</Button>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <div className="cardmobileimg">
                            <div className="ncx-iphoneimages">
                                <img src={NCXIphoneAddWallet} alt="NCX iPhone Add wallet" />
                            </div>
                            <div className="ncx-transactionphone">
                                <img className="transact-iphone"  src={NCXiPhoneTransactions} alt="NCX iPhone Transactions"/>
                                {/* <img className="floatingcard" src={NCXDebitCard} alt="NCX Debit Card" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXDebitCardSection;