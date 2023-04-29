import React from "react";
import './6.css';
import { useTranslation } from "react-i18next";

function Indices6()
{
    const { t } = useTranslation();
    return(
        <div className="mrkt__cfds">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_derivatives_trading_markets")}</h1>
                <div className="assets__ro row">
                    <div className="col">
                        <h2>{t("commodities")}</h2>
                        <p>{t("commodities_text")}</p>
                        <p className="strng"><strong>{t("commodities_text_2")}</strong></p>
                    </div>
                    <div className="col">
                        <h2>{t("Metals")}</h2>
                        <p>{t("metals_text")}</p>
                        <p className="strng"><strong>{t("metals_text_1")}</strong></p>
                    </div>
                    <div className="col">
                        <h2>{t("stock_index")}</h2>
                        <p>{t("stock_index_text_1")}</p>
                        <p className="strng"><strong>{t("stock_index_text_2")}</strong></p>
                    </div>
                    <div className="col">
                        <h2>{t("other_markets")}</h2>
                        <p>{t("other_markets_text")}</p>
                        <p className="strng"><strong>{t("other_markets_text_1")}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Indices6;