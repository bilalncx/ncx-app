
import  React from "react";
import './homepress.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import BloombergImage from '../../../images/blommberg.svg';
import Benzinga from '../../../images/benzinga.svg';
import Morningstar from '../../../images/morning-star.svg';
import Digitaljournal from '../../../images/digital-journal.webp';
import Theoutlook from '../../../images/theoutlook.png';
import StreetInsider from '../../../images/streetinsider.png';
import CoinChapter from '../../../images/coinchapter.webp';
import Dkoding from '../../../images/dkoding.png';
import Yahoomoney from '../../../images/yahoo-money.png';
import Yahoofinanzen from '../../../images/yahoo-finanzen.png';
import YahooChina from '../../../images/yahoo-china.png';
import Yahooactualities from '../../../images/yahoo-actualites.png';
import YahooFinance from '../../../images/yahoo-finance.png';
import VH from '../../../images/vh.png';
import AP from '../../../images/ap.png';

function HomePressComponent()
    {
        return(
            <div className="home-blog">
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
            </div>
        )
    }
export default HomePressComponent;