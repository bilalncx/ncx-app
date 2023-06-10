import React from "react";
import './ban.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import CardLogoSlider from "../../cardpage/newcardpagedesign/scroll_set";

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
            </div>
            <CardLogoSlider />
        </div>
    )
}
export default HomeBannerSection;