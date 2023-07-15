import React from "react";
import Button from "@mui/material/Button";
import './style.css';

function CryptoCardSecondSection()
{
    return(
        <div className="card_box csdvw__vew">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411496/ncx-card1_zm0n4g.png" alt="ncx"/>
                    </div>
                    <div className="col vedc">
                        <h1>The Crypto card that <span>gives you extra</span></h1>
                        <ul>
                            <li>Pay with Crypto converted into currency at 44 million merchant locations Worldwide.</li>
                            <li>Spending Limits up to $150,000 per month.</li>
                            <li>ATM Withdrawals up to  $20,000 per month.</li>
                            <li>Apple Pay, Google Pay Integrated.</li>
                            <li>Premium metal Mastercard with unique design.</li>
                            <li>Global Coverage, Online Payments, Virtual Card  </li>
                        </ul>
                        {/* <div className="vwecx">
                            <Button className="vea_vv" href="#compare-cards">Compare Cards</Button>
                            <Button className="evc" href="#insurance-benefits">See Insurance Benefits</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCardSecondSection;