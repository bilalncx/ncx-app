import React from "react";
import './2.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div className="trad__detiv">
            <div className="container">
                <h1 className="fg__rer">{t("our_most_traded_derivatives")}</h1>
                <div className="row inn__vmm__az">
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/financial-mart_h0lauq.png" alt="ncx" />
                        <h3>Financial Market</h3>
                        <p>Trade 200 Stocks, World Indices & ETFs across core and emerging markets.</p>
                        <strong>Spreads as low as 0.5 on the US 500.</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/crypt_deri_grloud.png" alt="ncx" />
                        <h3>Crypto Derivatives</h3>
                        <p>Go long or short on over 150 pairs, take advantage of any market conditions.</p>
                        <strong>Trade Crypto Derivatives with up to 100x Leverage.</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/forex-min_bdcyds.png" alt="ncx" />
                        <h3>Forex</h3>
                        <p>Trade 170 Foreign Exchange Market pairs across majors, minors, and exotics.</p>
                        <strong>Tight spreads from 0.1 pips on EUR/USD.</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/metals-min_q2d7oi.png" alt="ncx"/>
                        <h3>Metals & Commodities</h3>
                        <p>Trade most popular commodities including energies and metals.</p>
                        <strong>Spreads as low as 0.04 on Brent Crude.</strong>
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/financial-mart_h0lauq.png" alt="ncx" />
                                    <h3>Financial Market</h3>
                                    <p>Trade 200 Stocks, World Indices & ETFs across core and emerging markets.</p>
                                    <strong>Spreads as low as 0.5 on the US 500.</strong>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/crypt_deri_grloud.png" alt="ncx" />
                                    <h3>Crypto Derivatives</h3>
                                    <p>Go long or short on over 150 pairs, take advantage of any market conditions.</p>
                                    <strong>Trade Crypto Derivatives with up to 100x Leverage.</strong>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/forex-min_bdcyds.png" alt="ncx" />
                                    <h3>Forex</h3>
                                    <p>Trade 170 Foreign Exchange Market pairs across majors, minors, and exotics.</p>
                                    <strong>Tight spreads from 0.1 pips on EUR/USD.</strong>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/metals-min_q2d7oi.png" alt="ncx"/>
                                    <h3>Metals & Commodities</h3>
                                    <p>Trade most popular commodities including energies and metals.</p>
                                    <strong>Spreads as low as 0.04 on Brent Crude.</strong>
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

export default Indices2;