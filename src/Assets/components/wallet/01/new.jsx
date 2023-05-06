import React from "react";
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/home__newvideo.mp4';
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
                            // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                            >
                            <source src={BuyCryptoVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div id="buycrypto_container" className="container">
                    <div className="row">
                        <div className="col">
                            <div className="apps_barcod">
                                <h1>NCX DeFi Wallet Your Keys, Your Crypto.</h1>
                                <p>A non-custodial wallet that gives you access to a full suite of DeFi services in one place.</p>
                                <div className="barcodd">
                                    <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                    <p>Scan to Download NCX App</p>
                                </div>
                                <div className="apps-divi">
                                    <NCXApple />
                                    <a href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd&pli=1" target="_blank" rel="noreferrer"><NCXGoogle /></a>
                                </div>
                                <div className="home__btnff">
                                    <Button href="https://my.ncx.cx/register" target="_blank" rel="noreferrer" className="sin__op">Sign Up</Button>
                                    <Button href="#" className="cl__drp">Claim Airdrop</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col hidden_col">
                            <div className="app-texts-src">
                                <div className="apptexts">
                                    <h1>GLOBAL REACH</h1>
                                    <p>Powered by MasterCard, Pay at 44 Million Merchant locations Worldwide.</p>
                                </div>
                                <div className="apptexts">
                                    <h1>ATM WITHDRAWALS</h1>
                                    <p>Turn your Crypto into Cash instantly, use NCX Card across 3.2m ATMs Worldwide.</p>
                                </div>
                                <div className="apptexts">
                                    <h1>ONLINE PAYMENTS</h1>
                                    <p>Use you card for Online Payments as well as Apple Pay, Google Pay, Samsung Pay, Paypal, and many more.</p>
                                </div>
                                <div className="apptexts">
                                    <h1>TOP UP BY CRYPTO</h1>
                                    <p>Top Up on the go with one of 80 available Cryptocurrencies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mbl__lpl">
                <h1>NCX Exchange</h1>
                <p>Hybrid CEX | DEX | Trading Platform & DeFi Ecosystem</p>
                <div className="yy__tr">
                    <span>Advanced CEX</span>
                    <span>Cross-Chain DEX</span>
                    <span>Trading Platfrom</span>
                </div>
                <div className="yy__tr">
                    <span>Crypto Derivatives</span>
                    <span>Swap 500k+ Tokens Across 10 Chains</span>
                </div>
                <div className="yy__tr">
                    <span>Trade 500+ Derivatives Markets</span>
                    <span>Stocks</span>
                    <span>Commodities</span>
                </div>
                <div className="yy__tr">
                    <span>Indices</span>
                    <span>Forex</span>
                    <span>ETF’s</span>
                    <span>200+ Cryptocurrencies</span>
                </div>
                <div className="yy__tr">
                    <span>Crypto Debit Card</span>
                    <span>DeFi Wallet</span>
                    <span>Buy Crypto</span>
                </div>
                <div className="home__btnff">
                    <Button href="#" className="sin__op">Sign Up</Button>
                    <Button href="#" className="cl__drp">Claim Airdrop</Button>
                </div>
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                    >
                    <source src={BuyCryptoVideombl} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
export default NCXAPPSection;