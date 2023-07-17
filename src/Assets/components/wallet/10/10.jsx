import React from "react";
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
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689497053/wallet__sc1_weztnb.png" alt="ncx-wallet" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextLeftSide;