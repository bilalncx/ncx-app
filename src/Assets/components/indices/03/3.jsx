import React from "react";
import './3.css';
import IndicesVideo from '../../../images/ncx_app_vi.mp4';
import Button from "@mui/material/Button";
import { ReactComponent as IndicesArrow } from '../../../images/indices_arrow.svg';
import { useTranslation } from "react-i18next";

function Indices3()
{
    const { t } = useTranslation();
    return(
        <div className="sieze__ppp">
            <div className="container">
                <h1 className="fg__rer">{t("seize_opportunities_with_a_powerful_trading_platform")}</h1>
                <div className="row der__vido">
                    <div className="col bg__vdo">
                        <video 
                            id='video-scss'
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            // poster="https://ncx.cx/images/ncx_card_poster.png"
                            >
                            <source src={IndicesVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col txt__vvv">
                        <h2>{t("derivatives_trading_for_expert_traders_on_ncx")}</h2>
                        <ul>
                            <li>{t("get_access_to")} <strong>{t("advanced_trading_tools")}</strong> {t("advanced_trading_tools_span")}</li>
                            <li><strong>{t("easy_to_trade")}</strong> {t("easy_to_trade_text")}</li>
                            <li><strong>{t("diversify_your_exposure")}</strong> {t("diversify_your_exposure_text")}</li>
                        </ul>
                        <div className="tiy__bd">
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">{t("sign_up")}</Button>
                            <Button href="#" className="sign__up">{t("get_the_app")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Indices3;