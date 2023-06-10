import React from "react";
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import WalletVideo from '../../../images/wallet-video.mp4';
import BuyCryptoVideombl from '../../../images/home__mblvdo.mp4';
import Button from "@mui/material/Button";
import './style.css';

function NCXAPPSection()
{
    return(
        <div id="wallet_main_screen" className="hom__ppo">
            <div id="home__ffgrr" className="ncxapp-section">
                <div id="ncx_buycrypto_video">
                    <div className="desktop">
                        <video 
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            >
                            <source src={WalletVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="buycrypto_container" className="container">
                    <div className="row">
                        <div className="col">
                            <div className="apps_barcod">
                                <h1>
                                    <span>NCX DeFi Wallet</span>
                                    <span>Your Keys,</span>
                                    <span>Your Crypto.</span>
                                </h1>
                                <p>
                                    <span>Store, Send, Swap, Buy Crypto</span>
                                    <span>Assets across 12 Chains NCX</span>
                                    <span>non-custodial wallet, hold</span>
                                    <span>your own Private Keys</span>
                                </p>
                                <div className="barcodd">
                                    <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                    <p>Scan to Download NCX App</p>
                                </div>
                                <div className="apps-divi">
                                    <NCXApple />
                                    <a href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer"><NCXGoogle /></a>
                                </div>
                                <div className="home__btnff">
                                    <Button href="https://my.ncx.cx/register" target="_blank" rel="noreferrer" className="sin__op">Sign Up</Button>
                                    <Button href="#" className="cl__drp">Claim Airdrop</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <div className="mbl__lpl">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src={WalletVideo} type="video/mp4" />
                </video>
                <h1>NCX DeFi Wallet</h1>
                <p>Store, Send, Swap, Buy Crypto Assets across 12 Chains NCX non-custodial wallet, hold your own Private Keys</p>
                <div className="home__btnff">
                    <Button href="#" className="sin__op">Sign Up</Button>
                    <Button href="#" className="cl__drp">Claim Airdrop</Button>
                </div>
            </div>
        </div>
    )
}
export default NCXAPPSection;