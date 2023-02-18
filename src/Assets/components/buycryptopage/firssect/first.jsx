import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';
import NCXCryptoBuySell from '../../../images/ncx-crypto-trading.png';
import { ReactComponent as TrendingGraph } from '../../../images/ncx-trendinggraph.svg';
import { ReactComponent as Ethereum } from '../../../images/ncx-ethereum.svg';
import { ReactComponent as Bitcoin } from '../../../images/ncx-bitcoin.svg';
import { ReactComponent as BinanceCoinBNB } from '../../../images/ncx-binancecoinbnb.svg';
import { ReactComponent as ChangeValue } from '../../../images/cryptochange.svg';

function BuyCryptoFirstPage(){
    return(
        <div className="currencies-options row">
                <img className="buy-ss22" src={NCXCryptoBuySell} alt="NCX Buy Sell Cryptos" />
                <div id="mobile-shoss" className="col coinsect">
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
                            <p>1,693.23 USD</p>
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
                <div className="bar-grade33">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="col">
                    <CountUp
                        className="balance"
                        start={1}
                        end={16}
                        duration={15}
                        useEasing={true}
                        useGrouping={true}
                        // separator=" "
                        // decimals={4}
                        // decimal=","
                        prefix=">"
                        // suffix=" left"
                        delay={0}
                    />
                    <p>Payment Methods</p>
                </div>
                <div className="col">
                    <CountUp
                        className="balance"
                        start={10}
                        end={200}
                        duration={20}
                        useEasing={true}
                        useGrouping={true}
                        prefix=">"
                    />
                    <p>Cryptocurrencies</p>
                </div>
                <div className="col">
                    <CountUp
                        className="balance"
                        start={10}
                        end={95}
                        duration={20}
                        useEasing={true}
                        useGrouping={true}
                        prefix=">"
                    />
                    <p>Fiat Currencies</p>
                </div>
                <div className="col">
                    <CountUp
                        className="balance"
                        start={10}
                        end={180}
                        duration={20}
                        useEasing={true}
                        useGrouping={true}
                        prefix=">"
                    />
                    <p>Countries</p>
                </div>
                <div className="mobile-currenciesrow">
                    <div className="onembl">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={1}
                                end={16}
                                duration={20}
                                useEasing={true}
                                useGrouping={true}
                                // separator=" "
                                // decimals={4}
                                // decimal=","
                                prefix=">"
                                // suffix=" left"
                                delay={0}
                            />
                            <p>Payment Methods</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={200}
                                duration={25}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>Cryptocurrencies</p>
                        </div>
                    </div>
                    <div className="onembl">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={95}
                                duration={25}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                                suffix="K"
                            />
                            <p>Fiat Currencies</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={180}
                                duration={25}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>Countries</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default BuyCryptoFirstPage;