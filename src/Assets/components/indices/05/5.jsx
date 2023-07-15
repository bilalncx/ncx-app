import React from "react";
import './5.css';
import Button from "@mui/material/Button";
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import { useTranslation } from "react-i18next";

function Indices5()
{
    const { t } = useTranslation();
    return(
        <div className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_innovative_trading_platforms")}</h1>
                <div id="ghrthf-we" className="plat__ggre row">

                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_app")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            {/* <img src={Device4} alt="ncx_platform" /> */}
                            <video 
                                id="phomsdf"
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-exchange_vu8ugv.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_web")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_web_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418806/device_2_uf6ofq.png" alt="ncx_platform" />
                        </div>
                    </div>
                </div>

                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_windows")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_windows_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_1_fkkwpv.png" alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_ios")}</h2>
                            <CTrader1 />
                        </div>
                        <p>{t("ncx_c_trader_ios_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="ipad__gg">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_3_mtaeal.jpg" alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;