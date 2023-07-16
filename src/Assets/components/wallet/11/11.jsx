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
                        <h3>NFTs</h3>
                        <h1>Store, Send, Deposit, NFTs across various blockchains</h1>
                        <p>NCX non-custodial wallet that gives you access to a full suite of DeFi services in one place.</p>
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