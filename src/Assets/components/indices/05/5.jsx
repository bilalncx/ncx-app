import React from "react";
import './5.css';
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import Device2 from '../../../images/device_2.png';
import Device3 from '../.././../images/device_3.png';
import Device4 from '../../../images/device_4.png';
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
                <div className="plat__ggre row">

                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_app")}</h2>
                            <CTrader2 />
                        </div>
                        <p>{t("ncx_c_trader_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device4} alt="ncx_platform" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device2} alt="ncx_platform" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device1} alt="ncx_platform" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="ipad__gg">
                            <img src={Device3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;