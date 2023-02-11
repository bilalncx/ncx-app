import  React from "react";
import './firstsection.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import icon from '../../../images/ncx-staricon.svg';
import Button from "@mui/material/Button";
import CountUp from 'react-countup';
import { ReactComponent as Appstore } from '../../../images/ncxappstore.svg';
import { ReactComponent as Googleplay } from '../../../images/ncxgoogleplay.svg';

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
                    <img src={icon} alt="ncx" />
                    <h1>NCX Exchange</h1>
                    <div className="hashtag">
                        <span>Advanced CEX</span>
                        <span>Multichain DEX</span>
                        <span className="hide-onmbl">Swap over 200k of tokens on 5 Chains</span>
                    </div>
                    <div className="hashtag mobile">
                        <span>Swap over 200k of tokens on 5 Chains</span>
                        <span>Liquidity Pools</span>
                    </div>
                    <div className="hashtag">
                        <span>Trade Crypto, Forex, Stock Market, ETFs, Indexes, Metals Derivatives with up to 100x Leverage</span>
                    </div>
                    <div className="hashtag">
                        <span>Over 500 Trading Pairs</span>
                        <span>DeFi Staking</span>
                        <span>Yied Farming</span>
                        <span className="hide-onmbl">Liquidity Pools</span>
                    </div>
                    {/* <Button className="btn01 hero-btn signin">Sign In</Button>
                    <Button className="btn01 hero-btn singup">Launch DEX</Button> */}
                    <div className="img001">
                        <Appstore />
                        <Googleplay/>
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
                            // poster={"../src/assets/images/roadmap-bg.png"}
                            >
                            <source src={require('../../../images/ncx-mblvideo.mp4')} type="video/mp4" />
                        </video>
                    </div>
                </div>
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