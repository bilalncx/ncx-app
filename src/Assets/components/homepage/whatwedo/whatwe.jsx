import {React, useState} from "react";
import './whatwe.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';
import Button from "@mui/material/Button";
import DerivativesTrading from '../../../images/ncx-derivatives-trading.png';
import BuyCrypto from '../../../images/ncx-crypto-trading.png';
import NCXDEXPhones from '../../../images/ncx-dex-phone.png';
import NCXCardTrade from '../../../images/ncx-card-trade.png';
import NCXCryptoTrading from '../../../images/ncx-cryptotrade.png';
import NCXAPISearchBar from '../../../images/ncx-api-searchbar.png';
import APIAccordian from './ncxapi-accordian';
import NCXTradeAssets from '../../homepage/home-trade/trade';
import NCXTradeToken from '../../homepage/homencxtoken/ncxtoken';

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
                        id="btn-1"
                        className={toggleState === 1 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(1)}
                    >
                    Derivatives Trading
                    </button>
                    <button
                        id="btn-2"
                        className={toggleState === 2 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(2)}
                    >
                    Buy Crypto
                    </button>
                    <button
                        id="btn-3"
                        className={toggleState === 3 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(3)}
                    >
                    DEX
                    </button>
                    <button
                        id="btn-4"
                        className={toggleState === 4 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(4)}
                    >
                    NCX Card
                    </button>
                    <button
                        id="btn-5"
                        className={toggleState === 5 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(5)}
                    >
                    Crypto Trading
                    </button>
                    <button
                        id="btn-6"
                        className={toggleState === 6 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(6)}
                    >
                    API
                    </button>
                    <button
                        id="btn-7"
                        className={toggleState === 7 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(7)}
                    >
                    Assets
                    </button>
                    <button
                        id="btn-8"
                        className={toggleState === 8 ? "pro-tabs active" : "pro-tabs"}
                        onClick={() => toggleTab(8)}
                    >
                    Token
                    </button>
                </div>
                <div className="product-content-tabs">
                    <div id="content-1" className={toggleState === 1 ? "pro-content active" : "pro-content"}>
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
                                    <p className="deriv-p">The more you trade, the higher your level, earn NCX Tokens with every level and better trading conditions</p>
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
                    <div id="content-2" className={toggleState === 2 ? "pro-content active" : "pro-content"}>
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
                                    <img className="deri-image" src={BuyCrypto} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-3" className={toggleState === 3 ? "pro-content active" : "pro-content"}>
                        <div className="ncx-dexphone-sect">
                            <div className="deri-row">
                                <div className="col">
                                    <h1>NCX Multichain DEX</h1>
                                    <p className="dexp1">Access Breakthrough dApps and DeFi Solutions through the NXC’s DEX & DeFi Ecosystem</p>
                                    <div className="bullets">
                                        <span>Swap over 200k Tokens Across 5 Chains</span>
                                        <span>DeFi Staking </span>
                                    </div>
                                    <div className="bullets">
                                        <span>Yied Farms</span>
                                        <span>Liquidity Pools</span>
                                        <span>Binance Smart Chain</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Ethereum</span>
                                        <span>Polygon</span>
                                        <span>Avalanche</span>
                                        <span>Solana</span>
                                    </div>
                                    <p className="dexp2">Swap, Stake, Farm Yield across 5 leading Blockchains</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="get-app" href="#">Launch DEX</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="dex-image" src={NCXDEXPhones} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-4" className={toggleState === 4 ? "pro-content active" : "pro-content"}>
                        <div className="ncx-card-trade">
                            <div className="cardtrade-row">
                                <div className="col">
                                    <h1>NCX Crypto Debit Card</h1>
                                    <p className="cardp1">Stake NCX and get your Premium Card, perfect solution for everyday purchases. Top up with crypto and use for payments - Anytime, Anywhere!</p>
                                    <div className="bullets">
                                        <span>Pay at 44 Million Merchant locations Worldwide</span>
                                        <span>Virtual Card</span>
                                    </div>
                                    <div className="bullets">
                                        <span>ATM Withdrawals</span>
                                        <span>Top up by Crypto</span>
                                        <span>Powered by MasterCard</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Premium Metal Card</span>
                                        <span>24/7 Support</span>
                                        <span>Apple Pay</span>
                                    </div>
                                    <div className="bullets">
                                        <span>Online Payments</span>
                                        <span>Google Play</span>
                                        <span>Samsung Play</span>
                                    </div>
                                    <p className="cardp2">One Card, Unlimited Possibilities!</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="buycrypt-btn" href="#">Get the App</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="cardtr-image" src={NCXCardTrade} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-5" className={toggleState === 5 ? "pro-content active" : "pro-content"}>
                    <div className="cryptotrading-div">
                            <div className="deri-row">
                                <div className="col">
                                    <h1 className="margin-bottomzero">Trading just got easier with NCX</h1>
                                    <h1>Cutting-Edge Trading Tools</h1>
                                    <div className="bullets">
                                        <span>Over 80 Spot Trading Pairs</span>
                                        <span>Crypto-Fiat Trading</span>
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
                                    <p className="deriv-p crypttradep1">* - Get up to 100% Trading Fee Discount Staking NCX Tokens</p>
                                    <p className="deriv-p crypttradep2">** - Get up to 100% Withdrawal Fee Refund  Staking NCX Tokens</p>
                                    <div className="prod-butns">
                                        <a className="der-buttons" href="#">Sign Up</a>
                                        <a className="get-app" href="#">Get the App</a>
                                    </div>
                                </div>
                                <div className="col product-img">
                                    <img className="deri-image" src={NCXCryptoTrading} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-6" className={toggleState === 6 ? "pro-content active" : "pro-content"}>
                        <div className="ncx-apisect">
                            <div className="api-row">
                                <div className="col">
                                    <h1>Advanced order types and API for more profitable & automated crypto trading using Trading Bots</h1>
                                    <div className="API-search">
                                        <img className="searchbar-api" src={NCXAPISearchBar} alt="NCX API Search Bar" />
                                        <APIAccordian />
                                    </div>
                                </div>
                                <div className="col apiproduct-img">
                                    <div className="api-monitoring">
                                        <h3>API</h3>
                                        <p>Stop monitoring candles. Automate and boost your trading with advanced order types or using your own crypto trading bot</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content-7" className={toggleState === 7 ? "pro-content active" : "pro-content"}>
                        <div className="ncx-tradeassets">
                            <div className="tradeasset-row">
                                <div className="asset-hed">
                                    <h1>Trade Derivatives with up to 200x Leverage</h1>
                                    <p>With Ultra Fast Execution and Deep Liquidity</p>
                                </div>
                                <NCXTradeAssets />
                            </div>
                        </div>
                    </div>
                    <div id="content-8" className={toggleState === 8 ? "pro-content active" : "pro-content"}>
                        <div className="TradeNCXToken">
                            <NCXTradeToken />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatweDoSection;