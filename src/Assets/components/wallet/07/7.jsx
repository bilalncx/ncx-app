import React from "react";
import Button from "@mui/material/Button";

function TextLeftSide()
{
    return(
        <div className="wallet__left__sided">
            <div className="container">
                <div className="row">
                    <div className="col wsl__fdss">
                        <h3>Swap</h3>
                        <h1>With built-in <span>Cross-Chain Swap</span> get the best price on every swap</h1>
                        <p>Chose the best route, safe on gas fees and time</p>
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