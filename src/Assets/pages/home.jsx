import  { React, useState } from "react";
import '../styles/home.css';
import '../styles/media-query.css'
import Button from "@mui/material/Button";
import icon from '../images/1.svg';
import appstore from '../images/app-store.png';
import Googleplay from '../images/google-app.png';
import DownloadGoogle from '../images/googleplay.png';
import "animate.css/animate.min.css";
import { ReactComponent as Icon1 } from '../images/icon-1.svg';
import { ReactComponent as Icon2 } from '../images/icon-2.svg';
import { ReactComponent as Icon3 } from '../images/icon-3.svg';
import { ReactComponent as Icon4 } from '../images/icon-4.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AccordianPage from '../components/accordian/accordian';
import BloombergImage from '../images/blommberg.svg';
import Benzinga from '../images/benzinga.svg';
import Morningstar from '../images/morning-star.svg';
import Digitaljournal from '../images/digital-journal.webp';
import Theoutlook from '../images/theoutlook.png';
import StreetInsider from '../images/streetinsider.png';
import CoinChapter from '../images/coinchapter.webp';
import Dkoding from '../images/dkoding.png';
import Yahoomoney from '../images/yahoo-money.png';
import Yahoofinanzen from '../images/yahoo-finanzen.png';
import YahooChina from '../images/yahoo-china.png';
import Yahooactualities from '../images/yahoo-actualites.png';
import YahooFinance from '../images/yahoo-finance.png';
import VH from '../images/vh.png';
import AP from '../images/ap.png';
import Barcode from '../images/barcode.png';
import Applestore from '../images/appstore.png';
import NCXExchange from '../images/ncx-exchange.png';
import SliderSection from '../components/slider/slider';
import Market1 from '../images/market1.png';
import Market2 from '../images/market2.png';
import Market3 from '../images/market3.png';
import Market4 from '../images/market4.png';
import Marketpage from '../components/market/market';
import MyFooter from '../components/footer/footer';
import MyHeader from '../components/header/header';
import SplashPage from '../components/splash/splash';
import Sidebtn1 from '../images/rightbtn1.png';
import Sidebtn2 from '../images/rightbtn2.png';
import PinkArrow from '../images/pinkarrow.png'; 
import BlogSliderHomepage from '../components/homepageblogslider/homepageblogslider';
import {ReactComponent as NCXLogo} from '../images/NCX-logo.svg';
import HomepageTrade from '../components/home-trade/trade';


function MainHome()
{
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
          <section className="bg-dark">
            <SplashPage />
            <MyHeader />

            <div className="hero-section">
                <div className="row container">
                    <div className="asss">
                        <img src={icon} alt="ncx" />
                        <h1>Trade, Swap, Stake, Farm Yield on NCX Hybrid CEX/DEX & Trading Platform</h1>
                        <div className="hashtag">
                            <span>Advanced CEX</span>
                            <span>Multichain DEX</span>
                            <span>Swap over 1000s of tokens across 5 Blockchains</span>
                        </div>
                        <div className="hashtag">
                            <span>Over 500 Trading Pairs</span>
                            <span>DeFi Staking</span>
                            <span>Yied Farming</span>
                            <span>Liquidity Pools</span>
                        </div>
                        <div className="hashtag">
                            <span>Trade Crypto, Forex, Stock Market, ETFs, Indexes, Metals  with up to 100x Leverage</span>
                            {/* <span>Swap Across 5 Leading Blockchains</span> */}
                        </div>
                        <Button className="btn01 hero-btn signin">Sign In
                            {/* <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                            </svg> */}
                        </Button>
                        <Button className="btn01 hero-btn singup">Sign Up
                            {/* <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                            </svg> */}
                        </Button>
                        <div className="img001">
                            <img src={appstore} alt="ncx"/>
                            <img src={Googleplay} alt="ncx" />
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
                                <source src={require('../images/updated-video.mp4')} type="video/mp4" />
                            </video>
                            {/* <img className="sidebtn1" src={Sidebtn1} alt="NCX" />
                            <div className="volumebtn">
                                <img className="sidebtn2" src={Sidebtn1} alt="NCX" />
                                <img className="sidebtn2" src={Sidebtn1} alt="NCX" />
                            </div>
                            <img className="sidebtn3" src={Sidebtn1} alt="NCX" /> */}
                        </div>
                    </div>
                </div>
                
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
                        <div className="dex bsss">
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

            <div id="csexdex" className="cexdex">
                <div className="container">
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
                        <div className="dex bsss">
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

            <div id="market" className="market-exchange">
                <div className="container">
                    {/* <div className="row marketimg">
                        <div className="col">
                            <img src={Market1} alt="NCX" />
                        </div>
                        <div className="col">
                            <img src={Market2} alt="NCX" />
                        </div>
                        <div className="col">
                            <img src={Market3} alt="NCX" />
                        </div>
                        <div className="col">
                            <img src={Market4} alt="NCX" />
                        </div>
                    </div> */}
                    <h1>Markets</h1>
                    <Marketpage />
                </div>
            </div>

            <div id="features">
                <SliderSection />
            </div>

            <div className="dex-table">
                <div className="container">
                    <div className="text-table">
                        <AnimationOnScroll animateIn="animate__slideInUp">
                            <h1>Advanced CEX, DEX & Trading features on one platform </h1>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>Utilising the power of Decentralised Finance with the ease of use & advantages of a traditional Cryptocurrency Exchange and advanced</p>
                            <p>Trading Platform in a single, advanced, all-in-one platform and scalable ecosystem</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="tabledex">
                        <div className="row head">
                            <div className="col one"></div>
                            <div className="col two">
                                <h2>NCX</h2>
                            </div>
                            <div className="col three">
                                <h2>CEX</h2>
                            </div>
                            <div className="col four">
                                <h2>DEX</h2>
                            </div>
                        </div>
                        <div className="row body">
                            <div className="col one">
                                <div className="whitearrow">
                                    <h3>Design + Planning</h3>
                                    <svg width="11" height="288" viewBox="0 0 11 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_634_2285)">
                                        <path d="M6.18338 4.40039H4.83594V285.055H6.18338V4.40039Z" fill="white"/>
                                        <path d="M5.50934 7.66358C6.99769 7.66358 8.20423 6.2025 8.20423 4.40015C8.20423 2.59781 6.99769 1.13672 5.50934 1.13672C4.021 1.13672 2.81445 2.59781 2.81445 4.40015C2.81445 6.2025 4.021 7.66358 5.50934 7.66358Z" fill="white"/>
                                        <path d="M8.60651 281.207L5.51127 286.773L2.41602 281.207L5.36186 282.973L5.51127 283.062L5.66068 282.973L8.60651 281.207Z" fill="white" stroke="white" stroke-width="0.673721"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_634_2285">
                                        <rect width="10" height="287" fill="white" transform="translate(0.5 0.835938)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="pinkarrow">
                                    <h3>Development</h3>
                                    <img src={PinkArrow} />
                                    {/* <svg width="11" height="246" viewBox="0 0 11 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_634_2292)">
                                        <path d="M6.18563 0.835938H4.81641V241.884H6.18563V0.835938Z" fill="#BB6BD9"/>
                                        <path d="M8.60651 238.043L5.51127 244.096L2.41602 238.043L5.36186 239.963L5.51127 240.061L5.66068 239.963L8.60651 238.043Z" fill="#BB6BD9" stroke="#BB6BD9" stroke-width="0.673721"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_634_2292">
                                        <rect width="10" height="245" fill="white" transform="translate(0.5 0.835938)"/>
                                        </clipPath>
                                        </defs>
                                    </svg> */}
                                </div>
                            </div>
                            <div className="col two">
                                <div className="row body-text">
                                    <div className="txt-cl">
                                        <h3>Security</h3>
                                        <h3>Crypto-Fiat Trading Pairs</h3>
                                        <h3>Fees</h3>
                                        <h3>User Interface</h3>
                                        <h3>Transaction Congestion</h3>
                                        <h3>Trading Speed & Volume</h3>
                                        <h3>Transaction Confirmation Latency</h3>
                                        <h3>Staking</h3>
                                        <h3>Yield Farming</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Decentalised</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>Low</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Decentalised</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>High</h3>
                                        <h3>Complex</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Centalised</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="row body-text second">
                                    <div className="txt-cl">
                                        <h3>Margin Trading</h3>
                                        <h3>Fiat Deposits / Withdrawals</h3>
                                        <h3>Forex Trading </h3>
                                        <h3>Shares Trading<span>(USA, EU, ASIA Stock Market)</span></h3>
                                        <h3>Metals Trading</h3>
                                        <h3>ETF's Trading</h3>
                                        <h3>Order Matching </h3>
                                        <h3>24/7 Support</h3>
                                        <h3>Private Keys</h3>
                                        <h3>Number of Crypto Assets</h3>
                                        <h3>Coverage</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Unlimited*</h3>
                                        <h3>Global**</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Limited</h3>
                                        <h3>Regional</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Unlimited</h3>
                                        <h3>Global</h3>
                                    </div>
                                </div>
                                <div className="agreement-p">
                                    <p>*- Over 80 Pairs available for Trading and over 20,000 Crypto Assets on NCX DEX available on BSC, Ethereum, Polygon, Fantom and Solana Networks</p>
                                    <p>**- NCX Platform is available Globally apart of Restricted Jurisdictions listed in <span><a href="https://ncx.cx/user-agreement">User Agreement</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobile-tabsection">
                        <div id="mobile-tabs">
                            <button
                                className={toggleState === 1 ? "tabs active" : "tabs"}
                                onClick={() => toggleTab(1)}
                                >
                                NCX
                            </button>
                            <button
                                className={toggleState === 2 ? "tabs active" : "tabs"}
                                onClick={() => toggleTab(2)}
                                >
                                CEX
                            </button>
                            <button
                                className={toggleState === 3 ? "tabs active" : "tabs"}
                                onClick={() => toggleTab(3)}
                                >
                                DEX
                            </button>
                        </div>
                        <div id="mobile-tabs-content" className="content-tabs">
                            <div className={toggleState === 1 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="txt-cl">
                                        <h3>Security</h3>
                                        <h3>Crypto-Fiat Trading Pairs</h3>
                                        <h3>Fees</h3>
                                        <h3>User Interface</h3>
                                        <h3>Transaction Congestion</h3>
                                        <h3>Trading Speed & Volume</h3>
                                        <h3>Transaction Confirmation Latency</h3>
                                        <h3>Staking</h3>
                                        <h3>Yield Farming</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Decentalised</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="row body-text second">
                                    <div className="txt-cl">
                                        <h3>Margin Trading</h3>
                                        <h3>Fiat Deposits / Withdrawals</h3>
                                        <h3>Forex Trading</h3>
                                        <h3>Shares Trading<span>(USA, EU, ASIA Stock Market)</span></h3>
                                        <h3>Metals Trading</h3>
                                        <h3>ETF's Trading</h3>
                                        <h3>Order Matching</h3>
                                        <h3>24/7 Support</h3>
                                        <h3>Private Keys</h3>
                                        <h3>Number of Crypt Assets</h3>
                                        <h3>Coverage</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Unlimited*</h3>
                                        <h3>Global**</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? "content active" : "content"}>
                            <div className="row">
                                    <div className="txt-cl">
                                        <h3>Security</h3>
                                        <h3>Crypto-Fiat Trading Pairs</h3>
                                        <h3>Fees</h3>
                                        <h3>User Interface</h3>
                                        <h3>Transaction Congestion</h3>
                                        <h3>Trading Speed & Volume</h3>
                                        <h3>Transaction Confirmation Latency</h3>
                                        <h3>Staking</h3>
                                        <h3>Yield Farming</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>Low</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Low</h3>
                                        <h3>User Friendly</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>Decentalised</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="row body-text second">
                                    <div className="txt-cl">
                                        <h3>Margin Trading</h3>
                                        <h3>Fiat Deposits / Withdrawals</h3>
                                        <h3>Forex Trading</h3>
                                        <h3>Shares Trading<span>(USA, EU, ASIA Stock Market)</span></h3>
                                        <h3>Metals Trading</h3>
                                        <h3>ETF's Trading</h3>
                                        <h3>Order Matching</h3>
                                        <h3>24/7 Support</h3>
                                        <h3>Private Keys</h3>
                                        <h3>Number of Crypt Assets</h3>
                                        <h3>Coverage</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                    <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Limited</h3>
                                        <h3>Regional</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 3 ? "content active" : "content"}>
                            <div className="row">
                                    <div className="txt-cl">
                                        <h3>Security</h3>
                                        <h3>Crypto-Fiat Trading Pairs</h3>
                                        <h3>Fees</h3>
                                        <h3>User Interface</h3>
                                        <h3>Transaction Congestion</h3>
                                        <h3>Trading Speed & Volume</h3>
                                        <h3>Transaction Confirmation Latency</h3>
                                        <h3>Staking</h3>
                                        <h3>Yield Farming</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <h3>High</h3>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>High</h3>
                                        <h3>Complex</h3>
                                        <h3>High</h3>
                                        <h3>Low</h3>
                                        <h3>High</h3>
                                        <h3>Centalised</h3>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="row body-text second">
                                    <div className="txt-cl">
                                        <h3>Margin Trading</h3>
                                        <h3>Fiat Deposits / Withdrawals</h3>
                                        <h3>Forex Trading</h3>
                                        <h3>Shares Trading<span>(USA, EU, ASIA Stock Market)</span></h3>
                                        <h3>Metals Trading</h3>
                                        <h3>ETF's Trading</h3>
                                        <h3>Order Matching</h3>
                                        <h3>24/7 Support</h3>
                                        <h3>Private Keys</h3>
                                        <h3>Number of Crypt Assets</h3>
                                        <h3>Coverage</h3>
                                    </div>
                                    <div className="txt-blue">
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="optionalbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88572 1.60742H13.673C16.7306 1.60742 18.7628 3.78983 18.7628 6.92173V14.259C18.7628 17.3911 16.7305 19.5733 13.6721 19.5733H5.88572C2.82825 19.5733 0.796875 17.3911 0.796875 14.259V6.92173C0.796875 3.79261 2.83369 1.60742 5.88572 1.60742ZM13.6733 2.95507H5.88593C3.60007 2.95507 2.14453 4.51665 2.14453 6.92195V14.2592C2.14453 16.6678 3.59506 18.2261 5.88593 18.2261H13.6724C15.9642 18.2261 17.4155 16.6677 17.4155 14.2592V6.92195C17.4155 4.51358 15.9644 2.95507 13.6733 2.95507Z" fill="white"/>
                                                <path d="M6.41016 10.5898H13.1473" stroke="white" stroke-width="1.34744" stroke-linecap="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2370">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.835938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="tickbox">
                                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_634_2320)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7414 0.582031H5.95408C2.90206 0.582031 0.865234 2.76722 0.865234 5.89635V13.2336C0.865234 16.3656 2.89662 18.5479 5.95408 18.5479H13.7405C16.7989 18.5479 18.8312 16.3656 18.8312 13.2336V5.89635C18.8312 2.76444 16.799 0.582031 13.7414 0.582031ZM5.95401 1.92957H13.7414C16.0325 1.92957 17.4837 3.48808 17.4837 5.89644V13.2337C17.4837 15.6421 16.0323 17.2006 13.7405 17.2006H5.95401C3.66315 17.2006 2.21262 15.6423 2.21262 13.2337V5.89644C2.21262 3.49114 3.66816 1.92957 5.95401 1.92957ZM13.522 6.9571C13.2589 6.69399 12.8323 6.69399 12.5692 6.9571L8.78145 10.7435L7.12599 9.08865L7.05042 9.02344C6.78663 8.82779 6.41234 8.84962 6.17321 9.08885C5.91016 9.35201 5.91025 9.77859 6.17341 10.0416L8.30596 12.1732L8.38153 12.2385C8.64528 12.4341 9.0195 12.4123 9.25865 12.1731L13.522 7.90988L13.5872 7.83432C13.7829 7.57057 13.7612 7.19628 13.522 6.9571Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_634_2320">
                                                <rect width="19" height="19" fill="white" transform="translate(0 0.210938)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3>Unlimited</h3>
                                        <h3>Global</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-bp">
                            <p>*- Over 80 Pairs available for Trading and over 20,000 Crypto Assets on NCX DEX available on BSC, Ethereum, Polygon, Fantom and Solana Networks</p>
                            <p>**- NCX Platform is available Globally apart of Restricted Jurisdictions listed in <span><a href="https://ncx.cx/user-agreement">User Agreement</a></span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new-generation">
                <div className="container">
                        <div className="generate-div">
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <h1>New Generation Crypto Exchange and Trading</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <h1>Platform leading the Web3 Revolution</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>One app. Unlimited possibilities.</p>
                                <Button className="btn01"><a href="https://ncx.cx">Sign Up
                                <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                </svg>
                                </a>
                                </Button>
                            </AnimationOnScroll>
                        </div>
                        <div className="generate-video">
                            <video 
                                id='ncx-main-video'
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                // poster={"../src/assets/images/roadmap-bg.png"}
                                >
                                <source src={require('../images/ncx-video.mp4')} type="video/mp4" />
                            </video>
                        </div>
                </div>
            </div>

            <div className="gradient">
                <div className="container">
                    <div className="gradient-bar">
                        <AnimationOnScroll animateIn="animate__slideInLeft">
                            <div className="gradientbar"></div>
                        </AnimationOnScroll>
                    </div>
                    <div className="row gradient-text">
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-one">
                                <h3>01</h3>
                                <h1>Customizable Interface</h1>
                                <p>Customize the platform interface exactly as you need: change the arrangement of components, select one of the themes and customize notifications.</p>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-two">
                                <h3>02</h3>
                                <h1>Web | Mobile | iOS App</h1>
                                <p>Enjoy all the features of NCX Platfrom on Desktop, Mobile and advanced Mobile App. Grow your Crypto wealth and keep it secure with NCX, One Platfrom - Unlimited possibilities.</p>
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn" className="gradient-animation-three">
                                <h3>03</h3>
                                <h1>Grouping of Volumes</h1>
                                <p>Evaluate the depth of liquidity using grouping feature in the orderbooks on all the available pairs. Get the overview of total cumulative number of opened buy and sell orders with a special widget in the Trading UI.</p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hometrade">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="ncx-trenddiv">
                            <NCXLogo />
                            <p>Trade</p>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Trade Futures with up to 100x Leverage</h2>
                        <p>With Ultra Fast Execution and Deep Liquidity</p>
                    </div>
                </div>
                <HomepageTrade />
                </div>
            </div>

            <div id="homePBS">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="ncx-trenddiv">
                                <NCXLogo />
                                <p>Trends</p>
                            </div>
                            <h1>Read the Latest Crypto, Markets, Trading Related News</h1>
                            <button className="ncx-trendbtn">
                                <a href="https://ncx.cx/blog">NCX Trends
                                <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                </svg>
                            </a></button>
                        </div>
                        <div className="col">
                            <BlogSliderHomepage />
                        </div>
                    </div>
                </div>
            </div>

            <div className="download">
                <div className="container">
                    <div className="row">
                        <div className="asss">
                            <div className="animtation">
                                <AnimationOnScroll animateIn="animate__slideInUp">
                                    <h1>Download App, Trade on the go!</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="bar11">
                                <div className="bar12">
                                    <AnimationOnScroll animateIn="animate__fadeIn">
                                        <img src={Barcode} alt="NCX BarCode" />
                                    </AnimationOnScroll>
                                </div>
                                <div className="stores">
                                    <AnimationOnScroll animateIn="animate__fadeIn">
                                        <img src={Applestore} alt="AppleStore"/>
                                        <img src={DownloadGoogle} alt="GoogleStore" />
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                        <di className="bsss">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <img src={NCXExchange} alt="NCX Exchange" />
                            </AnimationOnScroll>
                        </di>
                    </div>
                </div>
            </div>
            
            {/* <div className="home-blog">
                <div className="container desktop">
                    <div className="row first">
                        <a href="https://ncx.cx/" class="col-xs-2" id="p1"><AnimationOnScroll animateIn="animate__fadeIn"><img src={BloombergImage} alt="Bloomberg" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p2"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Benzinga} alt="Benzinga "/></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p3"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Morningstar} alt="MorningStar" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p4"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Digitaljournal} alt="DigitalJournal" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p5"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Theoutlook} alt="TheOutlook" /></AnimationOnScroll></a>
                    </div>
                    <div className="row second">
                        <a href="https://ncx.cx/" class="col-xs-2" id="p6"><AnimationOnScroll animateIn="animate__fadeIn"><img src={StreetInsider} alt="StreetInsider" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p7"><AnimationOnScroll animateIn="animate__fadeIn"><img src={CoinChapter} alt="CoinChapter" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p8"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Dkoding} alt="Dkoding" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p9"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Yahoomoney} alt="YahooMoney" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p10"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Yahoofinanzen} alt="YahooFinanzen" /></AnimationOnScroll></a>
                    </div>
                    <div className="row third">
                        <a href="https://ncx.cx/" class="col-xs-2" id="p11"><AnimationOnScroll animateIn="animate__fadeIn"><img src={YahooFinance} alt="YahooFinance" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p12"><AnimationOnScroll animateIn="animate__fadeIn"><img src={VH} alt="VH" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p13"><AnimationOnScroll animateIn="animate__fadeIn"><img src={YahooChina} alt="Yahoo" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p14"><AnimationOnScroll animateIn="animate__fadeIn"><img src={AP} alt="AP" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p15"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Yahooactualities} alt="Yahooactualities" /></AnimationOnScroll></a>
                    </div>
                </div>
                <div className="container mobile">
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2" id="p1"><AnimationOnScroll animateIn="animate__fadeIn"><img src={BloombergImage} alt="Bloomberg" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p2"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Benzinga} alt="Benzinga" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p3"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Morningstar} alt="Morningstar" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p4"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Digitaljournal} alt="DigitalJournal" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p5"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Theoutlook} alt="TheOutLook" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2" id="p6"><AnimationOnScroll animateIn="animate__fadeIn"><img src={StreetInsider} alt="StreetInsider" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p7"><AnimationOnScroll animateIn="animate__fadeIn"><img src={CoinChapter} alt="CoinChapter" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p8"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Dkoding} alt="Dkoding" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p9"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Yahoomoney} alt="YahooMoney" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p10"><AnimationOnScroll animateIn="animate__fadeIn"><img src={Yahoofinanzen} alt="YahooFinanzen" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2" id="p11"><AnimationOnScroll animateIn="animate__fadeIn"><img src={YahooFinance} alt="YahooFinance" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p12"><AnimationOnScroll animateIn="animate__fadeIn"><img src={VH} alt="VH" /></AnimationOnScroll></a>
                    </div>
                    <div className="row">
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p13"><AnimationOnScroll animateIn="animate__fadeIn"><img src={YahooChina} alt="Yahoo" /></AnimationOnScroll></a>
                        <a href="https://ncx.cx/" class="col-xs-2 col-half-offset" id="p14"><AnimationOnScroll animateIn="animate__fadeIn"><img src={AP} alt="AP" /></AnimationOnScroll></a>
                    </div>
                </div>
            </div> */}

            <div id="footer-faq">
                <div id="faq" className="faq-sect">
                    <div className="container">
                        <div className="row">
                            <div className="faq-0 asss">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Got a Question?</p>
                                    <h1>Frequently Asked Questions</h1>
                                </AnimationOnScroll>
                                {/* <Button className="btn01">Refer a Friend & Get 10,000 $NCXX Tokens
                                <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                </svg>
                                </Button> */}
                            </div>
                            <div className="faq-1">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <AccordianPage />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
                <MyFooter />
            </div>

          </section>
    )
}
export default MainHome;