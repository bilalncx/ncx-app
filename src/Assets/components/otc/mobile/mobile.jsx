import React from "react";
import '../../institution/mobile/mobile.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import HomeMobilePartner from "../../homepage/banner/partner";

function OTCMobileVersion()
{
    const { t } = useTranslation();

    return(
        <div className="mbl__version">
            <div className="zx__zx">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                </video>
                <div className="zx__txt">
                    <h2 className="otc_v">{t("large_trades_with")}<span>{t("ncx_otc_desk")}</span></h2>
                    <p className="otc__p">{t("why_choose_otc_text_1")}</p>
                    <p className="otc__p">{t("why_choose_otc_text_2")}</p>
                    <p className="otc__p">{t("why_choose_otc_text_3")}</p>
                    <Button className="btn__mail" href="mailto: support@ncx.cx">{t("apply")}</Button>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <div className="xs__edf">
                    <h3>{t("security")}</h3>
                    <p>{t("security_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("regulatory_compliance")}</h3>
                    <p>{t("trading_advantages_text1")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("zero_fees")}</h3>
                    <p>{t("zero_fees_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("fast_settlement")}</h3>
                    <p>{t("fast_settlement_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("wide_coverage")}</h3>
                    <p>{t("wide_coverage_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("professional_service")}</h3>
                    <p>{t("professional_service_text")}</p>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <h2>{t("why_choose_otc")}</h2>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690288110/block-min_sptnmp.png" alt="ncx-cx"/>
                    <h3>{t("block_trades")}</h3>
                    <p>{t("block_trades_text")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690288110/rates-min_gsgj2p.png" alt="ncx-cx"/>
                    <h3>{t("competitive_rates")}</h3>
                    <p>{t("competitive_rates_text")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690288110/settlement-min_fefgmo.png" alt="ncx-cx"/>
                    <h3>{t("fast_settlement")}</h3>
                    <p>{t("otc_fast_settlement_text")}</p>
                </div>
            </div>

            <div className="zx__zx otc__pag">
                <HomeMobilePartner />
            </div>
        </div>
    )
}

export default OTCMobileVersion;