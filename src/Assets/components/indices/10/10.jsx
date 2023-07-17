import React from "react";
import './10.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function BannerSection()
{
    const { t } = useTranslation();
    return(
        <div className="ind__banner">
            <div className="container">
                <div className="row_ban">
                    <div className="col banner_1">
                        <div className="ccc_tt">
                            <p>{t("trade_metals_on_ncx_with_spreads")}</p>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                        </div>
                    </div>
                    <div className="col banner_2">
                        <div className="ccc_tt">
                            <p>{t("trade_stocks_world_indices_and_etfs_across_core_and_emerging_markets")}</p>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSection;