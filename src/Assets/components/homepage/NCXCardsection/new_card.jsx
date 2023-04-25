import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/ncx-whitecard.png';
import Device2 from '../../../images/ncx-platniumcard.png';
import Device3 from '../.././../images/ncx-blackcard.png';
import Device4 from '../../../images/ncx-whitegoldcard.png';

function Indices5()
{
    return(
        <div id="card__new" className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">NCX Innovative Trading Platforms</h1>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Select <span>Card</span></h2>
                        </div>
                        <p>
                            <span>Monthly Limit $10,000 | ATM Withdrawals  $2,500 Monthly</span>
                            <span>Trading Fee Discount 0%</span>
                            <span>Free Premium Metal Card | Virtual Card</span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Platinum <span>Card</span></h2>
                        </div>
                        <p>
                            <span>Monthly Limit $25,000 | ATM Withdrawals  $5,000 Monthly</span>
                            <span>Trading Fee Discount 10%</span>
                            <span>Free Premium Metal Card | Virtual Card</span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device2} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Black <span>Card</span></h2>
                        </div>
                        <p>
                            <span>Monthly Limit $100,000 | ATM Withdrawals  $15,000 Monthly</span>
                            <span>Trading Fee Discount 20% | 10% Discount on Booking.com</span>
                            <span>Free Premium Metal Card | 10% Discount on Expedia.com</span>
                            <span>Virtual Card  | Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device3} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Gold <span>Card</span></h2>
                        </div>
                        <p>
                            <span>Monthly Limit $50,000 | ATM Withdrawals  $10,000 Monthly</span>
                            <span>Trading Fee Discount 15% | 10% Discount on Booking.com</span>
                            <span>Free Premium Metal Card | Virtual Card </span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device4} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;