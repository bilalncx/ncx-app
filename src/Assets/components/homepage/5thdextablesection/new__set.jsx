import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as NCXWeb} from '../../../images/ncxweb.svg';
import Laptop3 from '../../../images/laptop3.png';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import WalletMobileVideo from '../../../images/wallet_mbl.mp4';
import WalletMobileVideo2 from '../../../images/wallet_mbl2.mp4';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';
import { useTranslation } from "react-i18next";
import SExchange from '../../../images/s-exchange.mp4';
import NCXCrossDex from '../../../images/ncx-cross-dex.png';
import { ReactComponent as NCXDEXBadge } from '../../../images/dex-badge.svg';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

function Indices5()
{
    const { t } = useTranslation();
    return(
        <div className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_innovative_platforms_products_and_spplications")}</h1>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_app")}</h2>
                            <NCXBadge1 />
                        </div>
                        <p>{t("enhance_your_mobile_trading_experience_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer" className="download">{t("download")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src={WalletMobileVideo2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_defi_wallet_app")}</h2>
                            <NCXBadge2 />
                        </div>
                        <p>{t("take_control_of_your_diggital_assetby_securely_managing_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/wallet" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img gf__grthbh">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src={WalletMobileVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_cross_chain_dex")}</h2>
                            <NCXDEXBadge />
                        </div>
                        <p>{t("swap_500k_tokens_across")} {t("10_chains_with_ncx_cross_chain_dex")}
                        </p>
                        <div className="tiy__bd">
                            <Button href="https://dex.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={NCXCrossDex} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_web")}</h2>
                            <NCXWeb />
                        </div>
                        <p>{t("trade_of_over_200_cryptocurrency_pairs_using_ncx_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://trade.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Laptop3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
                <div id="ghrthf-we" className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_app")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            <video 
                                id="phomsdf"
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src={SExchange} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_windows")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_windows_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                </div>


                <div className="mbL__all__device">
                    <div className="plat__ggre row">
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_app")}</h2>
                                <NCXBadge1 />
                            </div>
                            <p>{t("ncx_c_trader_app_text")}</p>
                            <div className="tiy__bd">
                                <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer" className="download">{t("download")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pho__img viso__ff">
                                <video 
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="auto"
                                    >
                                    <source src={WalletMobileVideo2} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_defi_wallet_app")}</h2>
                                <NCXBadge2 />
                            </div>
                            <p>{t("ncx_defi_wallet_app_text")}</p>
                            <div className="tiy__bd">
                                <Button href="https://ncx.cx/wallet" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img gf__grthbh">
                                <video 
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="auto"
                                    >
                                    <source src={WalletMobileVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_c_trader_app")}</h2>
                                <CTrader2 />
                            </div>
                            <p>{t("ncx_c_trader_app_text")}</p>
                            <div className="tiy__bd">
                                <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pho__img">
                                <video 
                                    id="phomsdf"
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="auto"
                                    >
                                    <source src={SExchange} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_cross_chain_dex")}</h2>
                                <NCXDEXBadge />
                            </div>
                            <p>{t("swap_500k_tokens_across")} {t("10_chains_with_ncx_cross_chain_dex")}
                            </p>
                            <div className="tiy__bd">
                                <Button href="https://dex.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src={NCXCrossDex} alt="ncx_platform" />
                            </div>
                        </div>
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_web")}</h2>
                                <NCXWeb />
                            </div>
                            <p>{t("ncx_c_trader_web_text")}</p>
                            <div className="tiy__bd">
                                <Button href="https://trade.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src={Laptop3} alt="ncx_platform" />
                            </div>
                        </div>
                        <div className="col trg__ff__fe">
                            <div className="tra__go">
                                <h2>{t("ncx_c_trader_windows")}</h2>
                                <CTrader1 />
                            </div>
                            <p>{t("home_c_trade_window_text")}</p>
                            <div className="tiy__bd">
                                <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src={Device1} alt="ncx_platform" />
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                <div id="mbl__slida">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={3}
                        step={1}
                        naturalSlideWidth={300}
                        // naturalSlideHeight={250}
                        isIntrinsicHeight={true}
                        // hasMasterSpinner
                        // isPlaying={true}
                        // interval={5000}
                        // orientation="horizontal"
                        // infinite
                        // playDirection="forward"
                    >
                        <Slider>
                            <Slide idex={0} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_app")}</h2>
                                        <NCXBadge1 />
                                    </div>
                                    <p>{t("ncx_c_trader_app_text")}</p>
                                    <div className="tiy__bd">
                                        <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer" className="download">{t("download")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pho__img viso__ff">
                                        <video 
                                            autoPlay={true}
                                            muted={true}
                                            loop={true}
                                            playsInline={true}
                                            preload="auto"
                                            >
                                            <source src={WalletMobileVideo2} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </Slide>
                            <Slide idex={1} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_defi_wallet_app")}</h2>
                                        <NCXBadge2 />
                                    </div>
                                    <p>{t("ncx_defi_wallet_app_text")}</p>
                                    <div className="tiy__bd">
                                        <Button href="https://ncx.cx/wallet" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pla__img gf__grthbh">
                                        <video 
                                            autoPlay={true}
                                            muted={true}
                                            loop={true}
                                            playsInline={true}
                                            preload="auto"
                                            >
                                            <source src={WalletMobileVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_c_trader_app")}</h2>
                                        <CTrader2 />
                                    </div>
                                    <p>{t("ncx_c_trader_app_text")}</p>
                                    <div className="tiy__bd">
                                        <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pho__img">
                                        <video 
                                            id="phomsdf"
                                            autoPlay={true}
                                            muted={true}
                                            loop={true}
                                            playsInline={true}
                                            preload="auto"
                                            >
                                            <source src={SExchange} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>

                <div id="mbl__slida">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={3}
                        step={1}
                        naturalSlideWidth={300}
                        // naturalSlideHeight={250}
                        isIntrinsicHeight={true}
                        // hasMasterSpinner
                        // isPlaying={true}
                        // interval={5000}
                        // orientation="horizontal"
                        // infinite
                        // playDirection="forward"
                    >
                        <Slider>
                            <Slide index={0} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_cross_chain_dex")}</h2>
                                        <NCXDEXBadge />
                                    </div>
                                    <p>
                                        <span>{t("swap_500k_tokens_across")}</span>
                                        <span>{t("10_chains_with_ncx_cross_chain_dex")}</span>
                                    </p>
                                    <div className="tiy__bd">
                                        <Button href="https://dex.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pla__img">
                                        <img src={NCXCrossDex} alt="ncx_platform" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_web")}</h2>
                                        <NCXWeb />
                                    </div>
                                    <p>{t("ncx_c_trader_web_text")}</p>
                                    <div className="tiy__bd">
                                        <Button href="https://trade.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pla__img">
                                        <img src={Laptop3} alt="ncx_platform" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2} className="platform__slide">
                                <div className="col trg__ff__fe">
                                    <div className="tra__go">
                                        <h2>{t("ncx_c_trader_windows")}</h2>
                                        <CTrader1 />
                                    </div>
                                    <p>{t("home_c_trade_window_text")}</p>
                                    <div className="tiy__bd">
                                        <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                                        <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                                    </div>
                                    <div className="pla__img">
                                        <img src={Device1} alt="ncx_platform" />
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div> */}
            </div>
        </div>
    )
}

export default Indices5;