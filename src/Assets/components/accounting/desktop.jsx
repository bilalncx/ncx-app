import React from "react";
import './style.css';
import Button from "@mui/material/Button";

function AccountingDesktop(){
    return(
        <div className="accnt__pg">
            <div className="accnt__v one">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Effortless <span>bookkeeping</span></h2>
                            <p>A  better way to get your company’s bookkeeping.</p>
                            <p>Say goodbye to the mountains of </p>
                            <p>paper invoices and receipts.</p>
                            <Button href="#">Compare our Plans</Button>
                        </div>
                        <div className="col mgi">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687037/31-min_y9urtu.png" alt="ncx"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accnt__v tw">
                <div className="container">
                    <div className="row xcm">
                        <div className="col">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1692687062/49_xvl9p4.png" alt="ncx"/>
                        </div>
                        <div className="col mla">
                            <h2>Prepare your bookkeeping in no time</h2>
                            <ul>
                                <li>Upload scans of your receipts in a just few clicks or taps</li>
                                <li>Automate your supplier invoice processing and data entry</li>
                                <li>Connect your accounting software with your NCX account and accelerate the reconciliation process</li>
                            </ul>
                            <Button href="#">Open an account</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountingDesktop;