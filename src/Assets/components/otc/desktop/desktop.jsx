import {React} from "react";
import '../../aboutus/desktop/desktop.css';
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function AboutDesktopVersion()
{
    const { t } = useTranslation();

    return(
        <div className="abo__dek">
            <div className="crypto_card">
                <div className="new__ambass">
                    <div className="container ml__vwxf">
                        <div className="insse">
                            <h1>{t("ncx_over_the_counter_otc_trade")}</h1>
                            <Button href="mailto: support@ncx.cx">{t("apply")}</Button>
                        </div>
                        <div className="fvsd__v">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inst__itute brd__btm">
                <div className="container">
                    <div className="about-txt">
                        <p>{t("why_choose_otc_text_1")}</p>
                        <p>{t("why_choose_otc_text_2")}</p>
                        <p>{t("why_choose_otc_text_3")}</p>
                    </div>

                    <div className="OTCsect one row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("security")}</h2>
                                <p>{t("security_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("regulatory_compliance")}</h2>
                                <p>{t("trading_advantages_text1")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("zero_fees")}</h2>
                                <p>{t("zero_fees_text")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="OTCsect second row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("fast_settlement")}</h2>
                                <p>{t("fast_settlement_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("wide_coverage")}</h2>
                                <p>{t("wide_coverage_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("professional_service")}</h2>
                                <p>{t("professional_service_text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vx__vrd brd__btm">
                <div className="container">
                    <h2>{t("why_choose_otc")}</h2>
                    <div className="vf row">
                        <div className="ml__huc">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277060/backtest_veasef.png" alt="ncx-cx"/>
                            <h3>{t("block_trades")}</h3>
                            <h4>{t("block_trades_text")}</h4>
                        </div>
                        <div className="ml__huc">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_1_tqlnl1.png" alt="ncx-cx"/>
                            <h3>{t("competitive_rates")}</h3>
                            <h4>{t("competitive_rates_text")}</h4>
                        </div>
                        <div className="ml__huc">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/global_3_vdjico.png" alt="ncx-cx"/>
                            <h3>{t("fast_settlement")}</h3>
                            <h4>{t("otc_fast_settlement_text")}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutDesktopVersion;