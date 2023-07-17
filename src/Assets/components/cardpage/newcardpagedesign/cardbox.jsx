import React from "react";
import CardImage from '../../../images/cardbox.png';
import Button from "@mui/material/Button";
import './style.css';
import { useTranslation } from "react-i18next";

function PremiumCardBox()
{
    const { t } = useTranslation();
    return(
        <div className="card_box">
            <div className="container">
                <div className="row vsds">
                    <div className="col vedc">
                        <h1>{t("premium_card")} <span>{t("and_so_much_more")}</span></h1>
                        <img className="mbL_fwc" src={CardImage} alt="ncx"/>
                        <ul>
                            <li>{t("set_max_transaction_amount_prevant_fraud")}</li>
                            <li>{t("freeze_unfreeze_your_ncx_card")}</li>
                            <li>{t("add_to_applepay_googlepay")}</li>
                            <li>{t("payment_and_fraud_protection")}</li>
                            <li>{t("track_your_transactions_enable_push_notifications")}</li>
                            <li>{t("keep_control_your_spend_in_real_time")}</li>
                        </ul>
                        {/* <Button className="vea_vv" href="#">Stake NCXT and get your card for free</Button> */}
                    </div>
                    <div className="col vedc bmld_we">
                        <img src={CardImage} alt="ncx"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumCardBox;