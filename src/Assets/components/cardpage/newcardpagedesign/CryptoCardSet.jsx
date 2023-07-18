import React from "react";
import Button from "@mui/material/Button";
import './style.css';
import { useTranslation } from "react-i18next";

function CryptoCardSecondSection()
{
    const { t } = useTranslation();
    return(
        <div className="card_box csdvw__vew">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689411496/ncx-card1_zm0n4g.png" alt="ncx"/>
                    </div>
                    <div className="col vedc">
                    <h1>{t("the_crypto_card_that")} <span>{t("gives_you_extra")}</span></h1>
                        <ul>
                            <li>{t("products_services_text_1")}</li>
                            <li>{t("spending_limits_upto_$150000")}</li>
                            <li>{t("atm_withdrawals_upto_per_month")}</li>
                            <li>{t("products_services_text_3")}</li>
                            <li>{t("premium_metal_card_with_unique_design")}</li>
                            <li>{t("global_coverage_online_payments_virtual_card")}</li>
                        </ul>
                        {/* <div className="vwecx">
                            <Button className="vea_vv" href="#compare-cards">Compare Cards</Button>
                            <Button className="evc" href="#insurance-benefits">See Insurance Benefits</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCardSecondSection;