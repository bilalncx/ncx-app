import React from "react";
import './ban.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function HomeBannerSection()
{
    const { t } = useTranslation();
    return(
        <div id="bannss" className="ind__banner">
            <div className="container">
                <h1>{t("buy_sell_crypto_instantly")}</h1>
                <p>{t("home_buy_sell_crypto_using_debit_credit")}</p>
                <div className="btn__dtr">
                    <Button href="/buy-crypto" className="byyy">{t("buy_crypto")}</Button>
                    <Button href="/markets" className="marr">{t("markets")}</Button>
                </div>
                <div className="row_ban">
                    <div className="col banner_1">
                        <div className="ccc_tt">
                            <p>{t("trade_metals_on_ncx_with_spreads")}</p>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                        </div>
                    </div>
                    <div className="col banner_2">
                        <div className="ccc_tt">
                            <p>{t("trade_stocks_world_indices_and_etfs_across_core_and_emerging_markets")}</p>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeBannerSection;