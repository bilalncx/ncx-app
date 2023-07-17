import React from "react";
import Button from "@mui/material/Button";

function TextLeftSide()
{
    return(
        <div className="wallet__right__sided">
            <div className="container">
                <div className="row">
                    <div className="col img__vv">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689497126/wallet__sc2_zmlzph.png" alt="ncx-wallet" />
                    </div>
                    <div className="col wsl__fdss">
                        <h3>Send</h3>
                        <h1><span>Send crypto</span> at your preferred confirmation speed and <span>network</span> fee.</h1>
                        <p>Our Gas Meter gives you real-time updates on gas fees and transaction speeds.</p>
                        <div className="wal__btns">
                            <Button className="sf__ffp" href="#"> Sign Up</Button>
                            <Button className="ff__dsw" href="#">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextLeftSide;