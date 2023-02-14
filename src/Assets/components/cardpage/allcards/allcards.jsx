import React from "react";
import './allcards.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXWhiteCard from '../../../images/ncx-whitecard.png';
import NCXPlatinumCard from '../../../images/ncx-platniumcard.png';
import NCXWhiteGoldCard from '../../../images/ncx-whitegoldcard.png';
import NCXBlackCard from '../../../images/ncx-blackcard.png';

function NCXAllCards()
{
    return(
        <div className="ncxallcarddiv">
            <div className="container">
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXWhiteCard} alt="NCX White Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>Select</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Monthly Limit <span>$10,000</span></p></li>
                                    <li><p>ATM Withdrawals <span>$2,500 Monthly</span></p></li>
                                    <li><p>Trading Fee Discount <span>0%</span></p></li>
                                    <li><p>Free Premium Metal Card</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Top-Up By Crypto</p></li>
                                    <li><p>Virtual Card</p></li>
                                    <li><p>0.5% Wire Transfer</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Card Security Features</p></li>
                                    <li><p>24/7 Support</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXPlatinumCard} alt="NCX Platinum Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>Platinum</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Monthly Limit <span>$25,000</span></p></li>
                                    <li><p>ATM Withdrawals <span>$5,000 Monthly</span></p></li>
                                    <li><p>Trading Fee Discount <span>10%</span></p></li>
                                    <li><p>Free Premium Metal Card</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Top-Up By Crypto</p></li>
                                    <li><p>Virtual Card</p></li>
                                    <li><p>Free Wire Transfer</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Card Security Features</p></li>
                                    <li><p>24/7 Support</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXWhiteGoldCard} alt="NCX White Gold Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>Gold</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Monthly Limit <span>$50,000</span></p></li>
                                    <li><p>ATM Withdrawals <span>$10,000 Monthly</span></p></li>
                                    <li><p>Trading Fee Discount <span>15%</span></p></li>
                                    <li><p>10% Discount on <span>Booking.com</span></p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Free Premium Metal Card</p></li>
                                    <li><p>Top-Up By Crypto</p></li>
                                    <li><p>Virtual Card</p></li>
                                    <li><p>Free Wire Transfer</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Card Security Features</p></li>
                                    <li><p>24/7 Support</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="carddetails">
                    <div className="carddetailsimg">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={NCXBlackCard} alt="NCX Black Debit Card" />
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="row">
                            <div className="col">
                                <h1>Black</h1>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Monthly Limit <span>$100,000</span></p></li>
                                    <li><p>ATM Withdrawals <span>$15,000 Monthly</span></p></li>
                                    <li><p>Trading Fee Discount <span>20%</span></p></li>
                                    <li><p>Free Premium Metal Card</p></li>
                                    <li><p>Free Wire Transfer</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Free <span>Spotify</span> Subscription</p></li>
                                    <li><p>10% Discount on <span>Expedia.com</span></p></li>
                                    <li><p>10% Discount on <span>Booking.com</span></p></li>
                                    <li><p>Airport Lounge Access</p></li>
                                    <li><p>Card Security Features</p></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><p>Virtual Card</p></li>
                                    <li><p>24/7 Support</p></li>
                                    <li><p>Apple Pay, Google Pay, Samsung Pay</p></li>
                                    <li><p>Top-Up By Crypto  </p></li>
                                </ul>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}
export default NCXAllCards;