import React from "react";
import '../../cardpage/newcardpagedesign/style.css';
import CardSelect from '../../../images/ncx-card4.png';
import CardGold from '../../../images/ncx-card5.png';
import CardPlatinum from '../../../images/ncx-card3.png';
import CardBlack from '../../../images/ncx-card2.png';
import { ReactComponent as WhiteTick } from '../../../images/white-tick.svg';
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

                <div className="card_rnag_mbl">
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

                        <Slider className="pjiur">
                            <Slide index={0} className="yuio">
                                <div className="qwrc">
                                    <img src={CardSelect} alt="ncx-card"/>
                                    <p>Select Card</p>
                                </div>

                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Price</p>
                                            <span>Staked NCXT Required</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>Free</p>
                                            <span className="cwee">100,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Card Payment Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$15,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawal Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$2,500</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                            <span>Then $2 excl. VAT per withdrawal</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>0</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Netflix Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Spotify Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Concierge Service & Lounge Access</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Compatible with Apple Pay, Google Pay </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={1} className="yuio">
                                <div className="qwrc">
                                    <img src={CardGold} alt="ncx-card"/>
                                    <p>Gold Card</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Price</p>
                                            <span>Staked NCXT Required</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>Free</p>
                                            <span className="cwee">400,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Card Payment Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$35,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawal Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$5,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                            <span>Then $2 excl. VAT per withdrawal</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>5</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Netflix Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Spotify Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Concierge Service & Lounge Access</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Compatible with Apple Pay, Google Pay </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={2} className="yuio">
                                <div className="qwrc">
                                    <img src={CardPlatinum} alt="ncx-card"/>
                                    <p>Platinum Card</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Price</p>
                                            <span>Staked NCXT Required</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>Free</p>
                                            <span className="cwee">1,000,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Card Payment Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$75,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawal Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$10,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                            <span>Then $2 excl. VAT per withdrawal</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>10</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Netflix Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Spotify Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Concierge Service & Lounge Access</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Compatible with Apple Pay, Google Pay </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={3} className="yuio">
                                <div className="qwrc">
                                    <img src={CardBlack} alt="ncx-card"/>
                                    <p>Black Card</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Price</p>
                                            <span>Staked NCXT Required</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>Free</p>
                                            <span className="cwee">5,000,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Card Payment Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$150,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawal Limits</p>
                                            <span>Per calendar month</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$20,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Cash Withdrawals Included</p>
                                            <span>Then $2 excl. VAT per withdrawal</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>unlimited</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Netflix Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Free Spotify Subscription</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Concierge Service & Lounge Access</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>Compatible with Apple Pay, Google Pay </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
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