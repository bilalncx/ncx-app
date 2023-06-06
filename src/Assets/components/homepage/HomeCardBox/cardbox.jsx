import React from "react";
import CardImage from '../../../images/ncx-card1.png';
import Button from "@mui/material/Button";
import './cardbox.css';

function CryptoCardSecondSection()
{
    return(
        <div className="card_box nrtbv__gerg">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <img src={CardImage} alt="ncx"/>
                    </div>
                    <div className="col vedc">
                        <h1>The Crypto Card that gives you extra</h1>
                        <ul>
                            <li>Pay with Crypto converted into currency at 44 million merchant locations Worldwide.</li>
                            <li>Spending Limits up to $150,000 per month.</li>
                            <li>ATM Withdrawals up to $20,000 per month.</li>
                            <li>Apple Pay, Google Pay Integrated.</li>
                            <li>Premium metal Mastercard with unique design.</li>
                            <li>Global Coverage, Online Payments, Virtual Card</li>
                            <li>Payment and Fraud Protection.</li>
                        </ul>
                        {/* <div className="vwecx">
                            <Button className="bgb_bf" href="https://ncx.cx/ncx-card">View Cards</Button>
                            <Button className="bgfgb" href="https://my.ncx.cx/en/register">Sign Up</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCardSecondSection;