import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import DownloadGoogle from '../../../images/googleplay.png';
import Barcode from '../../../images/barcode.png';
import Applestore from '../../../images/appstore.png';
import NCXExchange from '../../../images/ncx-exchange.png';
import './download.css';
import DownloadBackgroundVideo from '../../../images/ncx-mountain.mp4';

function Home9thDownloadSection(){
    return(
        <div className="download">
            <div className="mobile-scetdown">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="ncx-downloadmbl">
                        < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                        <p>App</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <p className="equity-text">Download App, Trade on the go!</p>
                </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <video autoPlay loop muted playsInline id="DownloadVideo">
                <source src={DownloadBackgroundVideo} type='video/mp4' />
            </video>
                <div className="container">
                    <div className="row">
                        <div className="asss">
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
                            <div className="animtation">
                                    <h1>Download App, Trade on the go!</h1>
                            </div>
                        </div>
                        <div className="bsss">
                                <img src={NCXExchange} alt="NCX Exchange" />
                        </div>
                    </div>
                </div>
                </AnimationOnScroll>
            </div>
    )
}
export default Home9thDownloadSection;