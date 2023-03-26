import React from "react";
import './cardpage.css';
import NCXHomeSliderVideo from '../../../images/ncx_card_bgvideo.mp4';
import NCXCardTrade from '../../../images/ncx-card-trade.png';
import GradientSect from '../cardgradient/gradcard';
import MobileVideo from '../../../images/ncx_poweredby.mp4';

function CardfirstSection()
{
    return(
        <div className="cardvideo-sect">
            <div id="ncxcardvideo-desk">
                <div className="desktop">
                    <video 
                        id='video-scss'
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_card_poster.png"
                        >
                        <source src={NCXHomeSliderVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container">
                <div id="ncxcard_cardset">
                    <div className="ncx-card-trade">
                        <div className="cardtrade-row">
                            <div className="col">
                                <h1>NCX Crypto Debit Card</h1>
                                <p className="cardp1">Stake NCX and get your Premium Card, perfect solution for everyday purchases. Top up with crypto and use for payments - Anytime, Anywhere!</p>
                                <div className="bullets">
                                    <span>Pay at 44 Million Merchant locations Worldwide</span>
                                    <span>Virtual Card</span>
                                </div>
                                <div className="bullets">
                                    <span>ATM Withdrawals</span>
                                    <span>Top up by Crypto</span>
                                    <span>Powered by MasterCard</span>
                                </div>
                                <div className="bullets">
                                    <span>Premium Metal Card</span>
                                    <span>24/7 Support</span>
                                    <span>Online Payments</span>
                                </div>
                                <div className="bullets">
                                    <span>Apple Pay</span>
                                    <span>Google Pay</span>
                                    <span>Samsung Pay</span>
                                </div>
                                <div id="mobile-butller">
                                    <div className="bullets">
                                        <span>Pay at 44 Million Merchant locations Worldwide</span>
                                    </div>
                                    <div className="bullets">                                
                                        <span>Powered by MasterCard</span>
                                        <span>ATM Withdrawals</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Top up by Crypto</span>
                                        <span>Premium Metal Card</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Online Payments</span>
                                        <span>Apple Pay</span>
                                        <span>Google Pay</span>
                                    </div>
                                </div>
                                <p className="cardp2">One Card, Unlimited Possibilities!</p>
                                <div className="prod-butns">
                                    <a className="der-buttons" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign Up</a>
                                    <a className="buycrypt-btn" href="#" target="_blank" rel="noreferrer">Get the App</a>
                                </div>
                            </div>
                            <div className="col product-img">
                                <img className="cardtr-image" src={NCXCardTrade} alt="NCX Trading" />
                                <div id="ncxcardvideo-mbl">
                                    <div className="desktop">
                                        <video 
                                            id='video-scss'
                                            autoPlay={true}
                                            muted={true}
                                            loop={true}
                                            playsInline={true}
                                            preload="auto"
                                            poster="https://ncx.cx/images/ncx_poweredby_poster.png"
                                            >
                                            <source src={MobileVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GradientSect />
            </div>
        </div>
    )
}

export default CardfirstSection;