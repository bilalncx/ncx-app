import React from "react";
import CardImage from '../../../images/cardbox.png';
import Button from "@mui/material/Button";
import './style.css';

function PremiumCardBox()
{
    return(
        <div className="card_box">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <h1>Premium card. <span>And so much more.</span></h1>
                        <img className="mbL_fwc" src={CardImage} alt="ncx"/>
                        <ul>
                            <li>Set max Transaction Amount to prevent Fraud.</li>
                            <li>Freeze/Unfreeze your NCX Card in just one click.</li>
                            <li>Add to Apple Pay / Google Pay.</li>
                            <li>Payment and Fraud Protection.</li>
                            <li>Track your Transactions. Enable push Notifications.</li>
                            <li>Keep control of your spend in real time. </li>
                        </ul>
                        {/* <Button className="vea_vv" href="#">Stake NCXT and get your card for free</Button> */}
                    </div>
                    <div className="col vedc bmld_we">
                        <img src={CardImage} alt="ncx"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumCardBox;