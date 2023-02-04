import {React, useState} from "react";
import './whatwe.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
import Button from "@mui/material/Button";
import DerivativesTrading from '../../../images/ncx-derivatives-trading.png';
import CryptoTrading from '../../../images/ncx-crypto-trading.png';
import NCXCuttingEdge from '../../../images/ncx-cutting-edge.png';

function WhatweDoSection(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="widerangencxproducts">
            <div className="container">
                <div className="whatwe-head">
                    <p>What We Do</p>
                    <h1>Wide range of NCX products</h1>
                </div>
                <div className="product-tabs-btn">
                    <button
                        className={toggleState === 1 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(1)}
                    >
                    Derivatives Trading
                    </button>
                    <button
                        className={toggleState === 2 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(2)}
                    >
                    Buy Crypto
                    </button>
                    <button
                        className={toggleState === 3 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(3)}
                    >
                    Crypto Trading
                    </button>
                    <button
                        className={toggleState === 4 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(4)}
                    >
                    DEX
                    </button>
                    <button
                        className={toggleState === 5 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(5)}
                    >
                    NCX Card
                    </button>
                    <button
                        className={toggleState === 6 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(6)}
                    >
                    API
                    </button>
                    <button
                        className={toggleState === 7 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(7)}
                    >
                    Earn with NCX
                    </button>
                </div>
                <div className="product-content-tabs">
                    <div className={toggleState === 1 ? "pro-content  active" : "pro-content"}>
                        <div className="derivatives-trade">
                            <div className="deri-row">
                                <div className="col">
                                    <h1>Trade Derivatives with up to 200x Leverage</h1>
                                    <div className="bullets">
                                        <span>Crypto Derivatives</span>
                                        <span>Equities (US, EU, Asia Stock Markets)</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Over 500 Trading Pairs</span>
                                        <span>Oil & Gas Trading</span>
                                        <span>Forex Trading</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Metals Trading</span>
                                        <span>ETFs Trading</span>
                                        <span>Trade with up to 100x Leverage</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Trade World Markets with NCX Superior Execution</span>
                                    </div>
                                    <p>The more you trade, the higher your level, earn NCX Tokens with every level and better trading conditions</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="get-app" href="#">Get the App</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="deri-image" src={DerivativesTrading} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "pro-content  active" : "pro-content"}>
                        <div className="crypto-trade">
                            <div className="crypto-row">
                                <div className="col">
                                    <h1>Buy Crypto with one of over 95 Fiat Currencies </h1>
                                    <p>Low Fees, Global Coverage!</p>
                                    <div className="bullets">
                                        <span>Credit/Debit Card</span>
                                        <span>Apple Pay</span>
                                        <span>Google Pay</span>
                                    </div>
                                    <div className="bullets">
                                        <span>We transfer</span>
                                        <span>InstaPay</span>
                                        <span>Ali Pay</span>
                                        <span>Prompt Pay</span>
                                    </div>
                                    <div className="bullets">
                                        <span>>16 Payment Methods</span>
                                        <span>>200 Cryptocurrencies</span>
                                    </div>
                                    <div className="bullets">
                                        <span>>95 Fiat Currencies</span>
                                        <span>>180 Countries</span>
                                    </div>
                                    <p className="pro-desc">Buy Crypto in just a few clicks on NCX</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="buycrypt-btn" href="#">Buy Crypto</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="deri-image" src={CryptoTrading} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "pro-content  active" : "pro-content"}>
                        <div className="cutting-edge-trade">
                            <div className="deri-row">
                                <div className="col">
                                    <h1>Trading just got easier with NCX Cutting-Edge Trading Tools</h1>
                                    <div className="bullets">
                                        <span>Over 80 Spot Trading Pairs</span>
                                        <span>Crypto-Fiat Trading </span>
                                        <span>Fast Executions</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Grouping of Volumes</span>
                                        <span>Institutional Grade Liquidity</span>
                                        <span>Customisable Interface</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Market, Limit, Stop-Limit Orders</span>
                                        <span>IOC, FOK, OCO - Order Types </span>
                                    </div>
                                    <div className="bullets">
                                        <span>Zero Fees Trading*</span>
                                        <span>0% Withdrawal Fee**</span>
                                        <span>Multi-level Market Depth</span>
                                    </div>
                                    <p className="p-01">* - Get up to 100% Trading Fee Discount Staking NCX Tokens</p>
                                    <p className="p-02">** - Get up to 100% Withdrawal Fee Refund  Staking NCX Tokens</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="get-app" href="#">Get the App</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="deri-image" src={NCXCuttingEdge} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 4 ? "pro-content  active" : "pro-content"}>
                        <h1>Heading four</h1>
                    </div>
                    <div className={toggleState === 5 ? "pro-content  active" : "pro-content"}>
                        <h1>Heading five</h1>
                    </div>
                    <div className={toggleState === 6 ? "pro-content  active" : "pro-content"}>
                        <h1>Heading six</h1>
                    </div>
                    <div className={toggleState === 7 ? "pro-content  active" : "pro-content"}>
                        <h1>Heading seven</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatweDoSection;