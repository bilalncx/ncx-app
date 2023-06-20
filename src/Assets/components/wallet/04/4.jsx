import React from "react";
import './4.css';
import WalletImage from '../../../images/wallet__sc1.png';
import Button from "@mui/material/Button";

function TextLeftSide()
{
    return(
        <div className="wallet__left__sided">
            <div className="container">
                <div className="row">
                    <div className="col wsl__fdss">
                        <h3>Store</h3>
                        <h1>Gain <span>full control</span> over your crypto assets and private keys. Easily manage tokens across 12+ <span>Blockchains.</span></h1>
                        <p>Including Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora, xDai Chain, Harmony, Heco Chain, OKEx Chain.</p>
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