import { React, useState } from 'react'
import './fifth.css'
import '../../homepage/accordian/accordian.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import { useTranslation } from "react-i18next";

function Accordian()
{
    const { t } = useTranslation();

    return(
        <div id="exclusive_rates">
            <div className="backgrdound-video">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="https://ncx.cx/images/ncx_line_poster.png"
                    >
                    <source src={BackVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <h1 className='exclusive'>{t("exclusive_rates")}</h1>
                <div className="exclusive_rates">
                    <div className="col">
                        <h3>{t("spot_fee_rate")}</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.00%</h1>
                                <p>{t("marker_lowest")}</p>
                            </div>
                            <div className="marker_lowest">
                                <h1>0.005%</h1>
                                <p>{t("taker_lowest")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>{t("future_fee_rate")}</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.00%</h1>
                                <p>{t("marker_lowest")}</p>
                            </div>
                            <div className="marker_lowest">
                                <h1>0.005%</h1>
                                <p>{t("taker_lowest")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>{t("withdrawals")}</h3>
                        <div className="rates_div">
                            <div className="marker_lowest">
                                <h1>0.02%</h1>
                                <p>{t("withdrawal_fee_lowest")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default Accordian;