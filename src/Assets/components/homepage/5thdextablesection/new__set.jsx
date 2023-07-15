import React from "react";
import Button from "@mui/material/Button";
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as NCXWeb} from '../../../images/ncxweb.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';
import { useTranslation } from "react-i18next";
import { ReactComponent as NCXDEXBadge } from '../../../images/dex-badge.svg';
// import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

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
                        <p>Enhance your mobile trading experience with our advanced trading application. Access all the essential tools and features to trade seamlessly anytime, anywhere.</p>
                        <div className="tiy__bd">
                            <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" target="_blank" rel="noreferrer" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl2_xxwzpb.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_defi_wallet_app")}</h2>
                            <NCXBadge2 />
                        </div>
                        <p>Take control of your Digital Assets by securely managing the private keys through our cutting-edge crypto wallet. Effortlessly Store, Swap, Send, and Receive Cryptocurrencies across 12 Networks.</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/wallet" target="_blank" rel="noreferrer" className="download">{t("view")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img gf__grthbh">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl_o7zqgs.mp4" type="video/mp4" />
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
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411496/ncx-cross-dex_fkkmwg.png" alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_web")}</h2>
                            <NCXWeb />
                        </div>
                        <p>Trade of over 200 cryptocurrency pairs using NCX's cutting-edge trading tools. Navigate the dynamic crypto market with precision and confidence with our state-of-the-art trading platform.</p>
                        <div className="tiy__bd">
                            <Button href="https://trade.ncx.cx/" target="_blank" rel="noreferrer" className="download">{t("launch")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411498/laptop3_snmlop.png" alt="ncx_platform" />
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
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/s-exchange_jeqs0i.mp4" type="video/mp4" />
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
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411497/device_1_duo5ff.png" alt="ncx_platform" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pho__img viso__ff">
                                <video 
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="auto"
                                    >
                                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl2_xxwzpb.mp4" type="video/mp4" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img gf__grthbh">
                                <video 
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    playsInline={true}
                                    preload="auto"
                                    >
                                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl_o7zqgs.mp4" type="video/mp4" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/s-exchange_jeqs0i.mp4" type="video/mp4" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411496/ncx-cross-dex_fkkmwg.png" alt="ncx_platform" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411498/laptop3_snmlop.png" alt="ncx_platform" />
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
                                <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                            </div>
                            <div className="pla__img">
                                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411497/device_1_duo5ff.png" alt="ncx_platform" />
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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