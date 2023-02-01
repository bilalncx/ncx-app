import  { React, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as Icon1 } from '../../../images/icon-1.svg';
import { ReactComponent as Icon2 } from '../../../images/icon-2.svg';
import { ReactComponent as Icon3 } from '../../../images/icon-3.svg';
import { ReactComponent as Icon4 } from '../../../images/icon-4.svg';
import './2ndsection.css';

function Home2ndSection(){
    return(
        <div id="cex" className="2ndsect">
                <div className="second-container">
                    <div className="row">
                        <div className="cex asss">
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Hybrid CEX DEX all-in-one</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Cryptocurrency Exchange</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>& Trading Platform</h1>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="dex">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>NCX is a next generation Hybrid Cryptocurrency Exchange and Trading Platform combining 
                                    Decentralised Finance with the ease of use & advantages of a traditional Cryptocurrency 
                                    Exchange in a single advanced all-in-one  platform and scalable ecosystem, providing an 
                                    ultimate Cryptocurrency Exchange and Trading Platform. </p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="row hh_row">
                        <div className="hh_col">
                            <AnimationOnScroll animateIn="animate__fadeIn" className="hh-fade1">
                                <div className="line-div"></div>
                            </AnimationOnScroll>
                            <p>01</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>CEX 
                                    <span>Fiat/Crypto Trading</span> 
                                    <span>spot Trading</span>
                                    </h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon1 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <AnimationOnScroll animateIn="animate__fadeIn" id="hh-fade2">
                                <div className="line-div"></div>
                            </AnimationOnScroll>
                            <p>02</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Margin Trading 
                                        <span>Crypto CFD, Forex,</span>
                                        <span>Stock Market, ETFs, </span>
                                        <span>Indexes, Metals Trading</span></h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon2 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <AnimationOnScroll animateIn="animate__fadeIn" id="hh-fade3">
                                <div className="line-div"></div>
                            </AnimationOnScroll>
                            <p>03</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Multichain DEX on 
                                        <span>Binance Smart Chain</span> 
                                        <span>Ethereum, Polygon</span> 
                                        <span>Avalanche & Solana</span></h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon3 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <AnimationOnScroll animateIn="animate__fadeIn" id="hh-fade4">
                                <div className="line-div"></div>
                            </AnimationOnScroll>
                            <p>04</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>DeFi Staking 
                                        <span>Yield Farming</span>
                                        <span>Liquidity Pools</span></h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon4 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home2ndSection;