import React from "react";
import '../styles/home.css';
import Button from "@mui/material/Button";
import icon from '../images/1.svg';
import appstore from '../images/app-store.png';
import appplay from '../images/google-app.png';
import "animate.css/animate.min.css";
import { ReactComponent as Icon1 } from '../images/icon-1.svg';
import { ReactComponent as Icon2 } from '../images/icon-2.svg';
import { ReactComponent as Icon3 } from '../images/icon-3.svg';
import { ReactComponent as Icon4 } from '../images/icon-4.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Icon } from "@mui/material";
import AccordianPage from '../components/accordian/accordian';

function MainHome()
{
    return(
          <section className="bg-dark">
            <div className="hero-section">
                <div className="row container">
                    <div className="asss">
                        <img src={icon} alt="ncx" />
                        <h1>Buy, Sell, Trade, Swap, Stake, Farm Yield on NCX Hybrid CEX/DEX Platform</h1>
                        <div className="hashtag">
                            <span>Fiat/Crypto Trading</span>
                            <span>Advanced CEX</span>
                            <span>Multichain DEX</span>
                        </div>
                        <div className="hashtag">
                            <span>Over 80 Trading Pairs</span>
                            <span>Decentraised Staking</span>
                            <span>Advanced Security & Private Keys</span>
                        </div>
                        <div className="hashtag">
                            <span>Margin Trading</span>
                            <span>Yied Farms</span>
                            <span>Swap Across 5 Leading Blockchains</span>
                        </div>
                        <Button className="btn01">Sign Up to Receive 10,000 $NERO Airdrop</Button>
                        <Button className="btn01 ">Get the App</Button>
                        <div className="img001">
                            <img src={appstore} alt="ncx"/>
                            <img src={appplay} alt="ncx"/>
                        </div>
                    </div>
                    <div className="bsss">
                        <video 
                            id='hero-video'
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            // poster={"../src/assets/images/roadmap-bg.png"}
                            >
                            <source src={require('../images/Iphone-video.mp4')} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div className="cexdex">
                <div className="container">
                    <div className="row">
                        <div className="cex asss">
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Hybrid CEX DEX all-in-</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>one Cryptocurrency</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>exchange for Web3.</h1>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="dex bsss">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>NCX is a next generation Hybrid Cryptocurrency Exchange combining Decentralised Finance with the 
                                    ease of use and advantages of a traditional Cryptocurrency Exchange in a single advanced 
                                    all-in-one  platform and scalable ecosystem, providing an ultimate Cryptocurrency Exchange 
                                    for Web3. Having the main benefits of CEX such as fiat deposits/withdrawals, advanced spot 
                                    trading with multiple order types, high trading volume and liquidity, fiat-cryptocurrency trading 
                                    and vice versa, advanced security and 24/7 live support.</p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="row hh_row">
                        <div className="hh_col">
                            <p>01</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>CEX Fiat Crypto Trading Margin Trading</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon1 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <p>01</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Multichain DEX</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon2 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <p>01</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Swap on BSC, Ethereum, Polygon, Fantom & Solana</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="hh_icon">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <Icon3 />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="hh_col">
                            <p>01</p>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>DeFi Staking & Yield Farmings</h1>
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

            <div className="faq-sect">
                <div className="container">
                    <div className="row">
                        <div className="faq-0 asss">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>Got a Question?</p>
                            </AnimationOnScroll>
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Frequently Asked Question</h1>
                                </AnimationOnScroll>
                            </div>
                            <Button className="btn01">Refer a Friend & Get 10,000 $NERO Tokens
                            <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                            </svg>
                            </Button>
                        </div>
                        <div className="faq-1">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <AccordianPage />
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>

          </section>
    )
}
export default MainHome;