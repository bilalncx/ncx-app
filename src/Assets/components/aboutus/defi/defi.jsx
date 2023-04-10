import React from "react";
import './defi.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';

function AboutNCXDefi()
{
    return(
        <div className="about_defi">
            <div className="container">
                <AnimationOnScroll className="trading_col" animateIn="animate__fadeIn">
                    <div className="about_logo">
                        <AboutLogo />
                        <h1>DeFi</h1>
                    </div>
                </AnimationOnScroll>
                <div id="defi_content">
                    <div className="ccc">
                        <h1>Swap 300k+ Tokens across 10 Chains with NCX DeFi. Migrate assets between different chains.</h1>
                        <p>Including Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutNCXDefi;