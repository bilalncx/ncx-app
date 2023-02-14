import React from "react";
import './cardpage.css';
import NCXHomeSliderVideo from '../../../images/ncx-firstslidervideo.mp4';
import NCXCardTrade from '../../../images/ncx-card-trade.png';
import GradientSect from '../cardgradient/gradcard';

function CardfirstSection()
{
    return(
        <div className="cardvideo-sect">
            <div id="Homevideosection">
                <div className="homevideodiv">
                    <video 
                        id='hhero-video'
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        // poster={"../src/assets/images/roadmap-bg.png"}
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
                                    <span>Apple Pay</span>
                                </div>
                                <div className="bullets">
                                    <span>Online Payments</span>
                                    <span>Google Play</span>
                                    <span>Samsung Play</span>
                                </div>
                                <p className="cardp2">One Card, Unlimited Possibilities!</p>
                                <div className="prod-butns">
                                    <a className="der-buttons" href="#">Sign Up</a>
                                    <a className="buycrypt-btn" href="#">Get the App</a>
                                </div>
                            </div>
                            <div className="col product-img">
                                <img className="cardtr-image" src={NCXCardTrade} />
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