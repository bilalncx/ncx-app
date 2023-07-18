import React from "react";
import Button from "@mui/material/Button";
import './style.css';
import { useTranslation } from "react-i18next";

function NCXContact()
{
    const { t } = useTranslation();
    return(
        <div className="card_exprnc">
            <div className="container">
                <div className="vwed">
                <h1>{t("ready_for_the_premium_crypto_card_experience")}</h1>
                <p>{t("open_your_account")}</p>
                    <div className="bewec">
                        {/* <Button href="#" className="wec">Open an Account</Button> */}
                        <Button href="#" className="dwc">{t("apply")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NCXContact;