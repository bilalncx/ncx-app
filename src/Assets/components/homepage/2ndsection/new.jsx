import React from "react";
import './2ndsection.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div id="hme__gg__ff" className="trade__derivative">
            <div className="container">
                <h1 className="fg__rer">{t("hybrid_cex_dex_tarding_platform_defi_ecosystem")}</h1>
                <div className="row most_deri">
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="pp__oo">C</h3>
                            <h1>{t("crypto_exchange")}</h1>
                        </div>
                        <p className="llp_dd">{t("buy_over_200_crypto_assets_with_over_90_fiat_currencies_16_payment_methods")}</p>
                        <p className="io_od">{t("trade_most_popular_crypto_assets_on_spot")}</p>
                        <p className="mbl__stng">{t("crypto_exchange_text")}</p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="oo__ii">T</h3>
                            <h1>{t("derivatives_trading")}</h1>
                        </div>
                        <p className="llp_dd">{t("derivatives_trading_text_1")}</p>
                        <p className="io_od">{t("derivatives_trading_text_2")}</p>
                        <p className="mbl__stng">{t("derivatives_trading_text_3")}</p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tnn__we">D</h3>
                            <h1>{t("defi_wallet")}</h1>
                        </div>
                        <p className="llp_dd">{t("test_defi_1")}</p>
                        <p className="io_od">{t("test_defi_2")}</p>
                        <p className="mbl__stng">{t("test_defi_3")}</p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tt__ff">P</h3>
                            <h1>{t("products_services")}</h1>
                        </div>
                        <p className="llp_dd">{t("products_services_text_1")}</p>
                        <p className="io_od">{t("products_services_text_2")}</p>
                        <p className="mbl__stng">{t("products_services_text_3")}</p>
                    </div>
                </div>

                <div className="mobils_bs">
                <CarouselProvider
                        // visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        // naturalSlideHeight={250}
                        isIntrinsicHeight={true}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={2000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                    
                    <Slider>
                        <Slide index={0} className="most_deri">
                            <div className="col">
                                <div className="logo__ff">
                                    <h3 className="pp__oo">C</h3>
                                    <h1>{t("crypto_exchange")}</h1>
                                </div>
                                <p className="llp_dd">{t("buy_over_200_crypto_assets_with_over_90_fiat_currencies_16_payment_methods")}</p>
                                <p className="io_od">{t("trade_most_popular_crypto_assets_on_spot")}</p>
                                <p className="mbl__stng">{t("crypto_exchange_text")}</p>
                            </div>
                        </Slide>
                        <Slide index={1} className="most_deri">
                            <div className="col">
                                <div className="logo__ff">
                                    <h3 className="oo__ii">T</h3>
                                    <h1>{t("derivatives_trading")}</h1>
                                </div>
                                <p className="llp_dd">{t("derivatives_trading_text_1")}</p>
                                <p className="io_od">{t("derivatives_trading_text_2")}</p>
                                <p className="mbl__stng">{t("derivatives_trading_text_3")}</p>
                            </div>
                        </Slide>
                        <Slide index={2} className="most_deri">
                            <div className="col">
                                <div className="logo__ff">
                                    <h3 className="tnn__we">D</h3>
                                    <h1>{t("defi_wallet")}</h1>
                                </div>
                                <p className="llp_dd">{t("test_defi_1")}</p>
                                <p className="io_od">{t("test_defi_2")}</p>
                                <p className="mbl__stng">{t("test_defi_3")}</p>
                            </div>
                        </Slide>
                        <Slide index={3} className="most_deri">
                            <div className="col">
                                <div className="logo__ff">
                                    <h3 className="tt__ff">P</h3>
                                    <h1>{t("products_services")}</h1>
                                </div>
                                <p className="llp_dd">{t("products_services_text_1")}</p>
                                <p className="io_od">{t("products_services_text_2")}</p>
                                <p className="mbl__stng">{t("products_services_text_3")}</p>
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