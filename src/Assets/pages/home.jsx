import  React from "react";
import '../styles/home.css';
import '../styles/media-query.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AccordianPage from '../components/homepage/accordian/accordian';
import SliderSection from '../components/homepage/4thslidersection/slider';
import Market1 from '../images/ncx-market-1.png';
import Market2 from '../images/ncx-market-2.png';
import Market3 from '../images/ncx-market-3.png';
import Market4 from '../images/ncx-market-4.png';
import Marketpage from '../components/homepage/3rdmarketsection/market';
import MyFooter from '../components/footer/footer';
import MyHeader from '../components/header/header';
import SplashPage from '../components/splash/splash';
// import BlogSliderHomepage from '../components/homepage/homepageblogslider/homepageblogslider';
import {ReactComponent as NCXLogo} from '../images/NCX-logo.svg';
import HomepageTrade from '../components/homepage/home-trade/trade';
import HomeNCXToken from '../components/homepage/homencxtoken/ncxtoken';
import HomeCEXDEXTableSection from '../components/homepage/5thdextablesection/cexdex';
import HomeFirstSection from '../components/homepage/1stsection/firstsection';
import Home2ndSection from '../components/homepage/2ndsection/2ndsection';
import Home6thVideoSection from '../components/homepage/6thvideosection/newgeneration';
import Home8thGradientsection from '../components/homepage/8thgradientsection/gradient';
import Home9thDownloadSection from '../components/homepage/9thdownloadsection/download';
import NCXDebitCard from '../components/homepage/ncxdebitcardsection/ncxcard';
import NCXEarn from '../components/homepage/EarnNCX/earnncx';
import NCXEquities from '../components/homepage/ncxequities/equities';
import NCXCardSlider from '../components/homepage/NCXCardsection/card';
import NCXOTCSection from '../components/homepage/NCXOTC/otc';
import NCXHomeTrends from '../components/homepage/ncxtrends/trends';


function MainHome()
{
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
                <div className="container">
                    <div className="row marketimg">
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
                                <img src={Market1} alt="NCX" />
                            </AnimationOnScroll>
                        </div>
                        <div className="col">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <img src={Market4} alt="NCX" />
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <Marketpage />
                </div>
            </div>

            <div id="features">
                <SliderSection />
            </div>
            
            <HomeCEXDEXTableSection />
            
            <Home6thVideoSection />

            <NCXEarn />

            <div className="hometrade">
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
            </div>

            <Home8thGradientsection />

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
            
            <NCXCardSlider />

            <NCXDebitCard />

            <div id="footer-faq">
                <div id="faq" className="faq-sect">
                    <div className="container">
                        <div className="row">
                            <div className="faq-0 asss">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <p>Got a Question?</p>
                                    <h1>Frequently Asked Questions</h1>
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
            </div>

            <HomeNCXToken />
            
            <NCXEquities />

            <Home9thDownloadSection />

            <NCXOTCSection />

            <NCXHomeTrends />
            
            <MyFooter />

          </section>
    )
}
export default MainHome;