import React from "react";
import './4.css';
import GlobalMarket1 from '../../../images/instruments-min.png';
import GlobalMarket2 from '../../../images/orders-min.png';
import GlobalMarket3 from '../../../images/chart-min.png';
import GlobalMarket4 from '../../../images/tools-min.png';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices4()
{
    const { t } = useTranslation();
    return(
        <div className="global__mart">
            <div className="container">
                <h1 className="fg__rer">Professional Tools for Professional Traders</h1>
                <div className="global__row row">
                    <div className="col">
                        <img src={GlobalMarket1} alt="global"/>
                        <h2>Instruments</h2>
                        <p>55+ Technical Indicators 
                            <span>Level 2 DoM (Depth of Market)</span>
                            <span>Analyse Trade Statistics</span>
                            <span>Market Sentiment</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="global"/>
                        <h2>Orders</h2>
                        <p>Additional pending Order Types (buy/sell stop limit)
                            <span>No restrictions on Limit Levels</span>
                            <span>Advanced Order Protection</span>
                            <span>Custom Time Zone</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket3} alt="global"/>
                        <h2>Charts</h2>
                        <p>Detachable & Linked Charts
                            <span>Fully Customisable Charts</span>
                            <span>Customisable Interface</span>
                            <span>6 Chart Types</span>
                            <span>Custom Time Zone</span>
                        </p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket4} alt="global"/>
                        <h2>Tools</h2>
                        <p>Add custom cBots & indicators
                            <span>Integrated Economic Calendar</span>
                            <span>News Feed</span>
                            <span>8-screen Trading</span>
                            <span>28 Timeframes</span>
                        </p>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider className="global__row row">
                            <Slide index={0}>
                                <div className="col">
                                    <img src={GlobalMarket1} alt="global"/>
                                    <h2>Instruments</h2>
                                    <p>55+ Technical Indicators 
                                        <span>Level 2 DoM (Depth of Market)</span>
                                        <span>Analyse Trade Statistics</span>
                                        <span>Market Sentiment</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src={GlobalMarket2} alt="global"/>
                                    <h2>Orders</h2>
                                    <p>Additional pending Order Types (buy/sell stop limit)
                                        <span>No restrictions on Limit Levels</span>
                                        <span>Advanced Order Protection</span>
                                        <span>Custom Time Zone</span>
                                    </p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src={GlobalMarket3} alt="global"/>
                                    <h2>Charts</h2>
                                    <p>Detachable & Linked Charts
                                        <span>Fully Customisable Charts</span>
                                        <span>Customisable Interface</span>
                                        <span>6 Chart Types</span>
                                        <span>Custom Time Zone</span>
                                    </p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src={GlobalMarket4} alt="global"/>
                                    <h2>Tools</h2>
                                    <p>Add custom cBots & indicators
                                        <span>Integrated Economic Calendar</span>
                                        <span>News Feed</span>
                                        <span>8-screen Trading</span>
                                        <span>28 Timeframes</span>
                                    </p>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Indices4;