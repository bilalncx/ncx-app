import React from "react";
import './third.css';
import '../../homepage/sect_poweredby/powered.css';
import NCXApp from '../../../images/ncx-slide1.png';
import { ReactComponent as NCXBarCode } from '../../../images/ncx-QRcode.svg';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/ncx_poweredby.mp4';
import { ReactComponent as NCXGooglePay } from '../../../images/ncx-googlepay.svg';
import { ReactComponent as NCXApplePay } from '../../../images/ncx-applepay.svg';

function NCXAPPSection()
{
    return(
        <div id="powered_by" className="ncxapp-section">
            <div id="ncx_buycrypto_video">
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster="https://ncx.cx/images/ncx_poweredby_poster.png"
                        >
                        <source src={BuyCryptoVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="buycrypto_container" className="container">
                <div className="row">
                    <div className="col">
                        <div className="apps_barcod">
                            <h1>NCX Card Premium Debit Card, Powered by Crypto</h1>
                            <p>Top up with Crypto and use for payments - Anytime, Anywhere!</p>
                            <div className="cryptopays">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                            <div className="barcodd">
                                <NCXBarCode />
                                <p>Scan to Download NCX App</p>
                            </div>
                            {/* <div className="apps-divi">
                                <NCXApple />
                                <NCXGoogle />
                            </div> */}
                        </div>
                    </div>
                    <div className="col">
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
    )
}
export default NCXAPPSection;