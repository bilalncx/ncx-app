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
                        <h1>A premium card. And so much more.</h1>
                        <ul>
                            <li>Automate your account reconciliation by connecting Qonto to your accounting tool.</li>
                            <li>Scan all your receipts and proofs of purchase; they’ll have the same legal value as the original paper versions.</li>
                            <li>Forget manual entry of your expense report data thanks to automatic VAT detection.</li>
                            <li>Keep control of your spend, in real time. By yourself or as a team.</li>
                        </ul>
                        <Button className="vea_vv" href="#">Discover our Business accounts</Button>
                    </div>
                    <div className="col vedc">
                        <img src={CardImage} alt="ncx"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumCardBox;