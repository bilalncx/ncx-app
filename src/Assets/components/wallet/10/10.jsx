import React from "react";
import WalletImage from '../../../images/wallet__sc1.png';
import Button from "@mui/material/Button";

function TextLeftSide()
{
    return(
        <div className="wallet__left__sided">
            <div className="container">
                <div className="row">
                    <div className="col wsl__fdss">
                        <h3>Browser</h3>
                        <h1>Explore the most popular <span>dApps</span> in browser without leaving NCX <span>DeFi Wallet</span> App</h1>
                        <p>Seamlessly connect to swap, farm, and mine on the hottest DeFi protocols</p>
                        <div className="wal__btns">
                            <Button className="sf__ffp" href="#"> Sign Up</Button>
                            <Button className="ff__dsw" href="#">Learn More</Button>
                        </div>
                    </div>
                    <div className="col img__vv">
                        <img src={WalletImage} alt="ncx-wallet" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextLeftSide;