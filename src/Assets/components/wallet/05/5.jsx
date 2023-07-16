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
                        <h3>Import Wallet</h3>
                        <h1>Import your <span>existing Wallet</span> seamlessly with a 12/18/24-word <span>recovery phrase.</span></h1>
                        <p>Import unlimited wallets into NCX DeFi Wallet, keep full custody of your assets with all added benefits of </p>
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