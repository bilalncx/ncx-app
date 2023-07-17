import React from "react";
import Button from "@mui/material/Button";
import './cardbox.css';
import { useTranslation } from "react-i18next";

function CryptoCardSecondSection()
{
    const { t } = useTranslation();
    return(
        <div className="card_box nrtbv__gerg">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411496/ncx-card1_zm0n4g.png" alt="ncx"/>
                    </div>
                    <div className="col vedc">
                        <h1>{t("ncx_crypto_debit_card")}</h1>
                        <ul>
                            <li>{t("pay_with_crypto_converted_into_currency")}</li>
                            <li>{t("spending_limits_upto_$150000")}</li>
                            <li>{t("atm_withdrawals_upto_per_month")}</li>
                            <li>{t("applepay_googlepay_integrated")}</li>
                            <li>{t("premium_metal_card_with_unique_design")}</li>
                            <li>{t("global_coverage_online_payments_virtual_card")}</li>
                            <li>{t("payment_and_fraud_protection")}</li>
                        </ul>
                        <div className="vwecx">
                            <Button className="bgb_bf" href="https://ncx.cx/ncx-card">{t("compare_card")}</Button>
                            {/* <Button className="bgfgb" href="https://my.ncx.cx/en/register">Sign Up</Button> */}
                            <Button className="bgb_bf" href="https://ncx.cx/ncx-card">Compare Cards</Button>
                            {/* <Button className="bgfgb" href="https://exchange.ncx.cx/register">Sign Up</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCardSecondSection;