import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import DownloadGoogle from '../../../images/googleplay.png';
import Barcode from '../../../images/barcode.png';
import Applestore from '../../../images/appstore.png';
import NCXExchange from '../../../images/ncx-exchange.png';
import './download.css';

function Home9thDownloadSection(){
    return(
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
    )
}
export default Home9thDownloadSection;