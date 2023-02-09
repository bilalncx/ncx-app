import React from "react";
import './horizonal.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Button  from "@mui/material/Button";
import DerivativesTrading from '../../../images/ncx-derivatives-trading.png';
import BuyCrypto from '../../../images/ncx-crypto-trading.png';
import NCXDEXPhones from '../../../images/ncx-dex-phone.png';
import NCXCardTrade from '../../../images/ncx-card-trade.png';
import NCXCryptoTrading from '../../../images/ncx-cryptotrade.png';
import NCXAPISearchBar from '../../../images/ncx-api-searchbar.png';
import APIAccordian from '../whatwedo/ncxapi-accordian';
import NCXTradeAssets from '../../homepage/home-trade/trade';
import NCXTradeToken from '../../homepage/homencxtoken/ncxtoken';

function HomeHorizontalScrollSection(){
gsap.registerPlugin(ScrollTrigger);
  {
    const process = document.querySelector('.process-wrap');
    if ((typeof(process) != 'undefined' && process != null)) {
      let sections = gsap.utils.toArray('.process__item');
      gsap.to(sections, {
        xPercent: -50 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          scroller: ".process-wrap",
          pinSpacing: false,
          trigger: process,
          markers: false,
          start: "top top",
          scrub: true,
          pin: true,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".process").offsetWidth
        },
      });
    }
  }
  return (
    <div className="tabshorizontal-ss">
        <div className="process-wrap">
            <div className="process">
                <div className="process__item">
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
                <div className="process__item">
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
                                    <span>16 Payment Methods</span>
                                    <span>200 Cryptocurrencies</span>
                                </div>
                                <div className="bullets">
                                    <span>95 Fiat Currencies</span>
                                    <span>180 Countries</span>
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
                <div className="process__item">
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
                <div className="process__item">
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
                <div className="process__item">
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
                <div className="process__item">
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
                <div className="process__item">
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
                <div className="process__item">
                    <div className="TradeNCXToken">
                        <NCXTradeToken />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default HomeHorizontalScrollSection;