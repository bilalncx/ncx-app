import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';
import NCXCryptoBuySell from '../../../images/ncx-crypto-trading.png';

function BuyCryptoFirstPage(){
    return(
        <div className="currencies-options row">
                <img className="buy-ss22" src={NCXCryptoBuySell} alt="NCX Buy Sell Cryptos" />
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