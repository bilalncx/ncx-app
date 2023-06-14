import React from "react";
import './st.css';
import '../../cardpage/newcardpagedesign/style.css';
import CardSelect from '../../../images/ncx-card4.png';
import CardGold from '../../../images/ncx-card5.png';
import CardPlatinum from '../../../images/ncx-card3.png';
import CardBlack from '../../../images/ncx-card2.png';
import { ReactComponent as WhiteTick } from '../../../images/white-tick.svg';
import { ReactComponent as Mobiletick } from '../../../images/tickvector.svg';
import { ReactComponent as BlankDash } from '../../../images/dashvector.svg';
import { ReactComponent as InfoIcon } from '../../../images/info-circle-grey.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardLeftArrow } from '../../../images/card_leftarrow.svg';
import { ReactComponent as CardRightArrow } from '../../../images/card_rightarrow.svg';

function NCXCardRanges()
{
    return(
        <div id="compare-cards" className="range_cards">
            <h1 className="rnag_gg">NCX Card Range</h1>
            <div className="brtgh">
                <div className="vwexx card__hrd container">
                    <div className="qwrc"></div>
                    <div className="qwrc">
                        <img src={CardSelect} alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src={CardGold} alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src={CardPlatinum} alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src={CardBlack} alt="ncx-card"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card_bt">
                    <div className="vwexx card__bmf">
                        <div className="qwrc"></div>
                        <div className="qwrc">
                            <p>Select Card</p>
                        </div>
                        <div className="qwrc">
                            <p>Gold Card</p>
                        </div>
                        <div className="qwrc">
                            <p>Platinum Card</p>
                        </div>
                        <div className="qwrc">
                            <p>Black Card</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Price</p>
                            <span>Staked NCXT Required</span>
                        </div>
                        <div className="qwrc">
                            <p>Free</p>
                            <p className="cwee">100,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>Free</p>
                            <p className="cwee">400,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>Free</p>
                            <p className="cwee">1,000,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>Free</p>
                            <p className="cwee">5,000,000 NCXT</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Card Payment Limits</p>
                            <span>Per calendar month</span>
                        </div>
                        <div className="qwrc">
                            <p>$15,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$35,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$75,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$150,000</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Cash Withdrawal Limits</p>
                            <span>Per calendar month</span>
                        </div>
                        <div className="qwrc">
                            <p>$2,500</p>
                        </div>
                        <div className="qwrc">
                            <p>$5,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$10,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$20,000</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Cash Withdrawals Included</p>
                            <span>Then $2 excl. VAT per withdrawal</span>
                        </div>
                        <div className="qwrc">
                            <p>0</p>
                        </div>
                        <div className="qwrc">
                            <p>5</p>
                        </div>
                        <div className="qwrc">
                            <p>10</p>
                        </div>
                        <div className="qwrc">
                            <p>Unlimited</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Free Netflix Subscription</p>
                            {/* <span><InfoIcon /></span> */}
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Free Spotify Subscription</p>
                            {/* <span><InfoIcon /></span> */}
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Concierge Service & Lounge Access</p>
                            {/* <span><InfoIcon /></span> */}
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>Compatible with Apple Pay, Google Pay </p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                </div>

                <div id="home__card_slide" className="card_rnag_mbl">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={500}
                        // hasMasterSpinner
                        // isPlaying={true}
                        // interval={3000}
                        // orientation="horizontal"
                        // infinite
                        // playDirection="forward"
                    >
                        <div className="cscs__bt">
                            <ButtonBack className="mht"><CardLeftArrow /></ButtonBack>
                            <ButtonNext className="ertgb"><CardRightArrow /></ButtonNext>
                        </div>

                        <Slider 
                        className="pjiur"
                        classNameAnimation="scroll"
                        >
                            <Slide index={0} className="yuio">
                                <div className="qwrc">
                                    <img src={CardSelect} alt="ncx-card"/>
                                    <p>Select Card</p>
                                </div>

                                <div className="mjhgf select__Card__selected">
                                    <div className="qaq__m">
                                        <h3>Features</h3>
                                        <h3>Select</h3>
                                        <h3>Gold</h3>
                                        <h3>Platinum</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>Price</h3>
                                            <h3>Staked NCXT Required</h3>
                                            <h3>Card Payment Limits <span>Per calendar month</span></h3>
                                            <h3 className="qws__mk">Cash Withdrawal Limits <span>Per calendar month</span></h3>
                                            <h3>Cash Withdrawals Included</h3>
                                            <h3>Free Netflix Subscription</h3>
                                            <h3>Free Spotify Subscription</h3>
                                            <h3>VIP Airport Lounge Access</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>Fraud Protection Insurance</h3>
                                            <h3>Travel Protection Insurance</h3>
                                            <h3>Purchase Protection Insurance</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>Free</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>Free</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>Free</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={1} className="yuio">
                                <div className="qwrc">
                                    <img src={CardGold} alt="ncx-card"/>
                                    <p>Gold Card</p>
                                </div>
                                <div className="mjhgf gold__Card__selected">
                                    <div className="qaq__m">
                                        <h3>Features</h3>
                                        <h3>Select</h3>
                                        <h3>Gold</h3>
                                        <h3>Platinum</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>Price</h3>
                                            <h3>Staked NCXT Required</h3>
                                            <h3>Card Payment Limits <span>Per calendar month</span></h3>
                                            <h3 className="qws__mk">Cash Withdrawal Limits <span>Per calendar month</span></h3>
                                            <h3>Cash Withdrawals Included</h3>
                                            <h3>Free Netflix Subscription</h3>
                                            <h3>Free Spotify Subscription</h3>
                                            <h3>VIP Airport Lounge Access</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>Fraud Protection Insurance</h3>
                                            <h3>Travel Protection Insurance</h3>
                                            <h3>Purchase Protection Insurance</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>Free</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>Free</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>Free</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={2} className="yuio">
                                <div className="qwrc">
                                    <img src={CardPlatinum} alt="ncx-card"/>
                                    <p>Platinum Card</p>
                                </div>
                                <div className="mjhgf platinum__Card__selected">
                                    <div className="qaq__m">
                                        <h3>Features</h3>
                                        <h3>Select</h3>
                                        <h3>Gold</h3>
                                        <h3>Platinum</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>Price</h3>
                                            <h3>Staked NCXT Required</h3>
                                            <h3>Card Payment Limits <span>Per calendar month</span></h3>
                                            <h3 className="qws__mk">Cash Withdrawal Limits <span>Per calendar month</span></h3>
                                            <h3>Cash Withdrawals Included</h3>
                                            <h3>Free Netflix Subscription</h3>
                                            <h3>Free Spotify Subscription</h3>
                                            <h3>VIP Airport Lounge Access</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>Fraud Protection Insurance</h3>
                                            <h3>Travel Protection Insurance</h3>
                                            <h3>Purchase Protection Insurance</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>Free</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>Free</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>Free</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={3} className="yuio">
                                <div className="qwrc">
                                    <img src={CardBlack} alt="ncx-card"/>
                                    <p>Black Card</p>
                                </div>
                                <div className="mjhgf black__Card__selected">
                                    <div className="qaq__m">
                                        <h3>Features</h3>
                                        <h3>Gold</h3>
                                        <h3>Platinum</h3>
                                        <h3>Black</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>Price</h3>
                                            <h3>Staked NCXT Required</h3>
                                            <h3>Card Payment Limits <span>Per calendar month</span></h3>
                                            <h3 className="qws__mk">Cash Withdrawal Limits <span>Per calendar month</span></h3>
                                            <h3>Cash Withdrawals Included</h3>
                                            <h3>Free Netflix Subscription</h3>
                                            <h3>Free Spotify Subscription</h3>
                                            <h3>VIP Airport Lounge Access</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>Fraud Protection Insurance</h3>
                                            <h3>Travel Protection Insurance</h3>
                                            <h3>Purchase Protection Insurance</h3>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>Free</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>Free</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__black">
                                            <h3>Free</h3>
                                            <h3>5,000,000 NCXT</h3>
                                            <h3>$150,000</h3>
                                            <h3 className="qws__mk">$20,000</h3>
                                            <h3>Unlimited</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$2,000</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}
export default NCXCardRanges;