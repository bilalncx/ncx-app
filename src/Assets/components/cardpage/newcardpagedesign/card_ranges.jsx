import React from "react";
import './style.css';
import CardSelect from '../../../images/ncx-card4.png';
import CardGold from '../../../images/ncx-card4.png';
import CardPlatinum from '../../../images/ncx-card3.png';
import CardBlack from '../../../images/ncx-card2.png';
import {ReactComponent as WhiteTick} from '../../../images/white-tick.svg';
import { ReactComponent as InfoIcon } from '../../../images/info-circle-grey.svg';

function NCXCardRanges()
{
    return(
        <div className="range_cards">
            <div className="container">
                <h1 className="rnag_gg">NCX Card Ranges</h1>
                <div className="card_bt">
                    <div className="vwexx">
                        <div className="qwrc"></div>
                        <div className="qwrc">
                            <img src={CardSelect} alt="ncx-card"/>
                            <p>Select Card</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardGold} alt="ncx-card"/>
                            <p>Gold Card</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardPlatinum} alt="ncx-card"/>
                            <p>Platinum Card</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardBlack} alt="ncx-card"/>
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
                            <span><InfoIcon /></span>
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
                            <p>Free Netflix Subscription</p>
                            <span><InfoIcon /></span>
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
                            <p>Free Netflix Subscription</p>
                            <span><InfoIcon /></span>
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
            </div>
        </div>
    )
}
export default NCXCardRanges;