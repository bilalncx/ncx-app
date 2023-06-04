import  {React, useState, useEffect} from "react";
import '../styles/home.css';
import '../styles/media-query.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AccordianPage from '../components/homepage/accordian/accordian';
import NCXBlackLogo from '../images/ncx-black-logo.svg';
import SliderSection from '../components/homepage/4thslidersection/slider';
import Marketpage from '../components/homepage/3rdmarketsection/market';
import MyFooter from '../components/footer/footer';
import MyHeader from '../components/header/header';
import SplashPage from '../components/splash/splash';
// import BlogSliderHomepage from '../components/homepage/homepageblogslider/homepageblogslider';
import {ReactComponent as NCXLogo} from '../images/NCX-logo.svg';
// import HomepageTrade from '../components/homepage/home-trade/trade';
// import HomeNCXToken from '../components/homepage/homencxtoken/ncxtoken';
import HomeCEXDEXTableSection from '../components/homepage/5thdextablesection/cexdex';
import HomeFirstSection from '../components/homepage/1stsection/bb_video';
import Home2ndSection from '../components/homepage/2ndsection/new';
import Home6thVideoSection from '../components/homepage/6thvideosection/newgeneration';
import Home8thGradientsection from '../components/homepage/8thgradientsection/gradient';
import Home9thDownloadSection from '../components/homepage/9thdownloadsection/download';
// import NCXDebitCard from '../components/homepage/ncxdebitcardsection/ncxcard';
import NCXEarn from '../components/homepage/EarnNCX/earnncx';
import NCXEquities from '../components/homepage/ncxequities/equities';
import NCXCardSlider from '../components/homepage/NCXCardsection/new_card';
import NCXOTCSection from '../components/homepage/NCXOTC/otc';
import NCXHomeTrends from '../components/homepage/ncxtrends/trends';
import WhatWeDoSection from '../components/homepage/whatwedo/whatwe';
import MarketSLider from '../components/homepage/market/flyers';
import NCXPoweredByCrypto from '../components/homepage/sect_poweredby/powered';
// import HorizontalWhatWeDo from '../components/homepage/horizontalscrollsection/horizontal';
import NCXNewHomeMarketSection from '../components/our_markets/home_market';
import { useTranslation } from "react-i18next";
import HomeAssets from '../components/indices/01/1';
import FeaturedMarkets from '../components/our_markets/featured_market';
import Home5thSection from '../components/homepage/5thdextablesection/new__set';
import HomeTrdingDerivatives from '../components/indices/06/6';
import HomeWallet from '../components/homepage/coinslide/coin';
import HomeGlobalMarkets from '../components/indices/04/4';
import HomeWalletStakes from '../components/ncxToken/section-2/staking_ncxt';
import HomeBannerSection from "../components/homepage/banner/ban";
import NCXCardRanges from "../components/cardpage/newcardpagedesign/card_ranges";


function MainHome()
{
    const { t } = useTranslation();

    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };
    return(
          <section className="bg-dark">
            <SplashPage />
            
            <MyHeader />

            <HomeFirstSection />

            <Home2ndSection />

            <div id="market" className="market-exchange">

                <FeaturedMarkets />
                {/* <div className="row marketimg">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={Market1} alt="NCX" />
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={Market2} alt="NCX" />
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={Market3} alt="NCX" />
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <img src={Market4} alt="NCX" />
                        </AnimationOnScroll>
                    </div>
                </div> */}
                {/* <div className="row marketing">
                    <MarketSLider />
                </div> */}
                {/* <div className="mbl-heading">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="ncx-trends">
                            <img className="ncx-blacklogo" src={NCXBlackLogo} alt="ncx-blacklogo"/>
                            <p>Exchange</p>
                        </div>
                    </AnimationOnScroll>
                </div> */}
                <div className="container">
                    <NCXNewHomeMarketSection />
                </div>
            </div>

            <HomeAssets />

            <Home5thSection />

            <HomeTrdingDerivatives />

            <HomeWallet />

            <HomeCEXDEXTableSection />

            <NCXCardRanges />

            {/* <NCXCardSlider /> */}

            <HomeGlobalMarkets />

            {/* <WhatWeDoSection /> */}

            {/* <HorizontalWhatWeDo /> */}

            {/* <div id="features">
                <SliderSection />
            </div> */}
            
            <div id="hgff">
                <Home6thVideoSection />
            </div>

            <div id="hyres">
                <NCXEarn />
            </div>

            <HomeWalletStakes />

            <HomeBannerSection />

            {/* <div className="hometrade">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-trenddiv">
                                <NCXLogo />
                                <p>Trade</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h2>Trade Futures with up to 100x Leverage</h2>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>With Ultra Fast Execution and Deep Liquidity</p>
                        </AnimationOnScroll>
                    </div>
                </div>
                <HomepageTrade />
                </div>
            </div> */}

            {/* <Home8thGradientsection /> */}

            {/* <div id="homePBS">
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
            </div> */}

            {/* <NCXPoweredByCrypto /> */}

            {/* <NCXDebitCard /> */}

            {/* <HomeNCXToken /> */}
            
            {/* <NCXEquities /> */}

            {/* <Home9thDownloadSection /> */}

            {/* <div id="footer-faq">
                <div id="faq" className="faq-sect">
                    <div className="container">
                        <div className="row">
                            <div className="faq-0 asss">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>{t("got_a_question_?")}</p>
                                    <h1>{t("frequently_asked_questions")}</h1>
                                </AnimationOnScroll>
                            </div>
                            <div className="faq-1">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <AccordianPage />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <NCXOTCSection /> */}

            {/* <NCXHomeTrends /> */}

            {/* <div className="mobiledownload">
                <Home9thDownloadSection />
            </div>  */}
            
            <MyFooter />

          </section>
    )
}
export default MainHome;