import React from "react";
import './buy.css';
import { ReactComponent as TrendingGraph } from '../../../images/ncx-trendinggraph.svg';
import { ReactComponent as Ethereum } from '../../../images/ncx-ethereum.svg';
import { ReactComponent as Ripple } from '../../../images/ncx-xrp.svg';
import { ReactComponent as ChangeValue } from '../../../images/cryptochange.svg';
import NCXCryptoBuySell from '../../../images/ncx-crypto-trading.png';

function BuyCrypto()
{
    return(
       <div className="buycrypto-page">
        <div className="container">
            <div className="buycrypt-row">
                <div className="col coinsect">
                    <h1>Buy & Sell Crypto Instantly</h1>
                    <p>Buy & Sell Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer. Simply enter the currency & amount and chose among the available payment methods, the best available rate is displayed by default, you can easily switch between providers and payment methods and chose the one right for you.</p>
                    <div className="crypto-assets row">
                        <div className="col coin-details">
                            <div className="coin-graph">
                                <Ethereum />
                                <TrendingGraph />
                            </div>
                            <h1>Ethereum</h1>
                            <p>0.382 USD</p>
                            <p className="change">
                                <ChangeValue />
                                2.33%</p>
                        </div>
                        <div className="col coin-details">
                            <div className="coin-graph">
                                <Ripple />
                                <TrendingGraph />
                            </div>
                            <h1>XRP</h1>
                            <p>0.382 USD</p>
                            <p className="change">
                                <ChangeValue />
                                4.33%</p>
                        </div>
                        <div className="col coin-details">
                            <div className="coin-graph">
                                <Ethereum />
                                <TrendingGraph />
                            </div>
                            <h1>BNBH</h1>
                            <p>0.382 USD</p>
                            <p className="change">
                                <ChangeValue />
                                2.33%</p>
                        </div>
                    </div>
                </div>
                <div className="col buysell-sect">
                    <img src={NCXCryptoBuySell} alt="NCX Buy Sell Crypto" />
                </div>
            </div>
        </div>
       </div>
    )
}

export default BuyCrypto;