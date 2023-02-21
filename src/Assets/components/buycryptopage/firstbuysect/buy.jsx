import React from "react";
import './buy.css';
import { ReactComponent as TrendingGraph } from '../../../images/ncx-trendinggraph.svg';
import { ReactComponent as Ethereum } from '../../../images/ncx-ethereum.svg';
import { ReactComponent as Bitcoin } from '../../../images/ncx-bitcoin.svg';
import { ReactComponent as BinanceCoinBNB } from '../../../images/ncx-binancecoinbnb.svg';
import { ReactComponent as ChangeValue } from '../../../images/cryptochange.svg';
import BuyCrypotVideo from '../../../images/ncxbuy-cryptovideo.mp4';
import { ReactComponent as RewardStar } from '../../../images/ncx-reward-star.svg';
function BuyCrypto()
{
    return(
       <div className="buycrypto-page">
            <div className="reward-row">
                <div className="container">
                    <div className="rewardheadrow">
                        <p className="complete-tsks">Buy Crypto, Earn NCXT</p>
                        <div className="reward-center">
                            <p>Visit Reward Center</p>
                            <p className="star-res"><RewardStar /> NCX Rewards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container990">
                <div className="buycrypt-row">
                    <div className="col coinsect">
                        <h1>Buy & Sell Crypto Instantly</h1>
                        <p>Buy & Sell Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer. Simply enter the currency & amount and chose among the available payment methods, the best available rate is displayed by default, you can easily switch between providers and payment methods and chose the one right for you.</p>
                        <div className="crypto-assets row">
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <Bitcoin />
                                    <TrendingGraph />
                                </div>
                                <h1>Bitcoin</h1>
                                <p>24,565.91 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    3.46%</p>
                            </div>
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <Ethereum />
                                    <TrendingGraph />
                                </div>
                                <h1>Ethereum</h1>
                                <p>1,693.26 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    1.90%</p>
                            </div>
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <BinanceCoinBNB />
                                    <TrendingGraph />
                                </div>
                                <h1>BNB</h1>
                                <p>316.04 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    2.09%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col buysell-sect">
                        <div id="ncxbuycrypto-desk">
                            <div className="desktop">
                                <video
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="none"
                                    poster="https://ncx.cx/images/ncx_buycrypto_poster.png"
                                    >
                                    <source src={BuyCrypotVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default BuyCrypto;