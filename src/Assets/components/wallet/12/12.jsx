import React from "react";
import WalletImage from '../../../images/safe_protocol.png';
import Button from "@mui/material/Button";

function TextLeftSide()
{
    return(
        <div id="safe__protocol" className="wallet__right__sided">
            <div className="container">
                <div className="row">
                    <div className="col img__vv">
                        <img src={WalletImage} alt="ncx-wallet" />
                    </div>
                    <div className="col wsl__fdss">
                        <h1>Desktop <span>Extension.</span> Seamlessly connect your <span>DeFi Wallet</span> App to a desktop browser.</h1>
                        <p>Send and receive crypto, view balances, and easily confirm DApp transactions. All this without having to switch devices.</p>
                        <div className="wal__btns">
                            <Button className="pp__fd" href="#">Get started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextLeftSide;