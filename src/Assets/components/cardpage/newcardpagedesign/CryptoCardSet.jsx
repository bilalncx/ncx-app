import React from "react";
import CardImage from '../../../images/ncx-card1.png';
import Button from "@mui/material/Button";
import './style.css';

function CryptoCardSecondSection()
{
    return(
        <div className="card_box csdvw__vew">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <img src={CardImage} alt="ncx"/>
                    </div>
                    <div className="col vedc">
                        <h1>The Crypto card that gives you extra</h1>
                        <ul>
                            <li>Spend up to $150,000 per month.</li>
                            <li>ATM Withdrawals up to  $20,000 per month.</li>
                            <li>No fees when you spend in foreign currencies.</li>
                            <li>A 17-gram, metal Mastercard with unique design.</li>
                            <li>Premium insurance, for greater peace of mind</li>
                            <li>Concierge Service and VIP lounge access included.</li>
                        </ul>
                        <div className="vwecx">
                            <Button className="vea_vv" href="#compare-cards">Compare Cards</Button>
                            <Button className="evc" href="#insurance-benefits">See Insurance Benefits</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCardSecondSection;