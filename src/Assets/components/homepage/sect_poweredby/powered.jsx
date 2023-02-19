import React from "react";
import './powered.css';
import NCXApp from '../../../images/ncx-slide1.png';
import NCXBarCode from '../../../images/ncx-barcode.png';
import { ReactComponent as NCXGoogle } from '../../../images/ncxgoogleplay.svg';
import { ReactComponent as NCXApple } from '../../../images/ncxappstore.svg';
import BuyCryptoVideo from '../../../images/ncx_poweredby.mp4';

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
                            <div className="barcodd">
                                <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                                <p>Scan to Download NCX App</p>
                            </div>
                            <div className="apps-divi">
                                <NCXApple />
                                <NCXGoogle />
                            </div>
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
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>NCX App The Power of Crypto x Fintech in your hands.</h1>
                        <p>Trade, Earn, Access Funds from just about anywhere.</p>
                        <div className="barcodd">
                            <img src={NCXBarCode} alt="NCX Bard Code to Download app" />
                            <p>Scan to Download NCX App</p>
                        </div>
                        <div className="apps-divi">
                            <NCXApple />
                            <NCXGoogle />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mobile-photo">
                            <img src={NCXApp} alt="NCX Exchange Mobile Screen" />
                        </div>
                        <div className="app-texts-src">
                            <div className="apptexts">
                                <h1>MANAGE YOUR ACCOUNT, WALLETS  & BALANCES</h1>
                                <p>Easily access your funds from anywhere in the World, check your Balances, open Support Tickets, set API’s and Security Credentials.</p>
                            </div>
                            <div className="apptexts">
                                <h1>TRADE ON THE GO</h1>
                                <p>Trade over 500 Markets, Anytime, Anywhere with NCX cutting-edge yet easy to use Trading Tools, open & close orders in Seconds.</p>
                            </div>
                            <div className="apptexts">
                                <h1>ENJOY EXCITING BENEFITS</h1>
                                <p>Earn and redeem Rewards, earn NCXT and up to 100% discounts on all platform Fees.</p>
                            </div>
                            <div className="apptexts">
                                <h1>MANAGE YOUR PAYMENTS, DEPOSITS & WITHDRAWALS</h1>
                                <p>Make all your payments seem-less, in just a few clicks </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default NCXAPPSection;