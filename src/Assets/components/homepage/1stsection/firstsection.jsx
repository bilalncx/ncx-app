import  React from "react";
import './firstsection.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import icon from '../../../images/ncx-staricon.svg';
import Button from "@mui/material/Button";
import CountUp from 'react-countup';
import { ReactComponent as AppleIcon } from '../../../images/apple-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../../../images/play-icon.svg';
// import SliderSection from '../whatwedo/whatwe';
import HomeSlider from './slider-move';
import BBVideo from './bb_video';

function HomeFirstSection()
{
    const onComplete = () => {
        console.log('Completed!');
    };
      
    const onStart = () => {
        console.log('Started!');
    };
    
    return(
        <div className="hero-section">
            <div className="row container">
                <div className="asss">
                    <img className="mbl-pic" src={icon} alt="ncx" />
                    <h1>NCX <span>Exchange</span></h1>
                    <p>First Hybrid Crypto Exchange x Trading Platform </p>
                    <img className="desk-pic" src={icon} alt="ncx" />
                    <div className="hashtag">
                        <span>Advanced CEX</span>
                        <span>Multichain DEX</span>
                        <span>Spot Trading</span>
                    </div>
                    <div className="hashtag">
                        <span>Swap over 200k of tokens on 5 Chains</span>
                        <span>Derivatives</span>
                    </div>
                    <div className="hashtag">
                        <span>Up to 200x Leverage </span>
                        <span>DeFi Staking & LP’s </span>
                        <span>Forex</span>
                    </div>
                    <div className="hashtag">
                        <span>Equities (US, EU, Asia Stock Markets)</span>
                        <span>Commodities</span>
                    </div>
                    <div className="hashtag mobile">
                        <span>Advanced CEX</span>
                        <span>Multichain DEX</span>
                        <span>Spot & Derivatives </span>
                    </div>
                    <div className="hashtag mobile">
                        <span>Up to 200x Leverage </span>
                        <span>Equities (US, EU, Asia  Markets)</span>
                    </div>
                    <div className="hashtag mobile">
                        <span>>500 Trading Pairs</span>
                        <span>ETF’s</span>
                        <span>Forex</span>
                        <span>Commodities</span>
                    </div>
                    <div className="hashtag mobile">
                        <span>Staking & LP’s</span>
                        <span>Swap >200k Tokens Across 5 Chains </span>
                    </div>
                    <div className="hashtag mobile">
                        <span>Buy Crypto with >16 Payment Methods </span>
                        <span>24/7 Support</span>
                    </div>
                    <div className="btnsdc">
                        <Button className="btn-signin">Sign Up</Button>
                        <Button className="btn-singup">Claim Airdrop</Button>
                        <div className="img001">
                            <AppleIcon />
                            <GooglePlayIcon />
                        </div>
                    </div>
                </div>
                <div id="videosection" className="bsss">
                    <div className="videodiv">
                        <video 
                            id='hero-video'
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            poster="https://ncx.cx/images/ncx_mmblvideo_poster.png"
                            // poster={"../src/assets/images/roadmap-bg.png"}
                            >
                            <source src={require('../../../images/ncx-mblvideo.mp4')} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div id="homecarouselslides" className="container">
                {/* <HomeSlider /> */}
                <BBVideo />
            </div>
            
            <div className="currencies-options row">
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
                        duration={20}
                        useEasing={true}
                        useGrouping={true}
                        // separator=" "
                        // decimals={4}
                        // decimal=","
                        prefix=">"
                        // suffix=" left"
                        onComplete={onComplete}
                        onStart={onStart}
                        delay={0}
                    />
                    <p>Payment Methods</p>
                </div>
                <div className="col">
                    <CountUp
                        className="balance"
                        start={10}
                        end={500}
                        duration={25}
                        useEasing={true}
                        useGrouping={true}
                        prefix=">"
                        onComplete={onComplete}
                        onStart={onStart}
                    />
                    <p>Trading Pairs</p>
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
                        suffix="K"
                        onComplete={onComplete}
                        onStart={onStart}
                    />
                    <p>Tokens on DEX Across 5 Chains</p>
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
                        onComplete={onComplete}
                        onStart={onStart}
                    />
                    <p>Countries</p>
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
                        onComplete={onComplete}
                        onStart={onStart}
                    />
                    <p>Cryptocurrencies</p>
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
                                onComplete={onComplete}
                                onStart={onStart}
                                delay={0}
                            />
                            <p>Payment Methods</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={500}
                                duration={25}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                                onComplete={onComplete}
                                onStart={onStart}
                            />
                            <p>Trading Pairs</p>
                        </div>
                    </div>
                    <div className="onembl">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={200}
                                duration={25}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                                suffix="K"
                                onComplete={onComplete}
                                onStart={onStart}
                            />
                            <p>Tokens on DEX Across 5 Chains</p>
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
                                onComplete={onComplete}
                                onStart={onStart}
                            />
                            <p>Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFirstSection;