import React from "react";
import './8.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";


function Indices8(){
    const { t } = useTranslation();
    return(
        <div className="indices__hdd">
            <div className="container">
                <div className="row">
                    <div className="col tvt__f">
                        <h1>{t("trade_derivatives_with_up_to_200k_leverage")}</h1>
                        <div className="points__ff">
                            <span>{t("Crypto_derivatives")}</span>
                            <span>{t("equities_us_eu_asia_stock_market")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("over_500_trading_pairs")}</span>
                            <span>{t("oil_gas_trading")}</span>
                            <span>{t("forex_trading")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("metals_trading")}</span>
                            <span>{t("etfs_trading")}</span>
                            <span>{t("trade_with_up_100x_leverage")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("metals_trading")}</span>
                            <span>{t("trade_world_markets_ncx_superior_execution")}</span>
                        </div>
                        <div className="hh__btn">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="up_sin">{t("sign_up")}</Button>
                            <Button href="#" className="get__ap">{t("get_the_app")}</Button>
                        </div>
                    </div>
                    <div className="col tvt__f mobile">
                        <h1>{t("trade_derivatives_with_up_to_200k_leverage")}</h1>
                        <div className="points__ff">
                            <span>{t("Crypto_derivatives")}</span>
                            <span>{t("oil_gas_trading")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("equities_us_eu_asia_stock_market")}</span>
                            <span>{t("metals_trading")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("forex_trading")}</span>
                            <span>{t("over_500_trading_pairs")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("etfs_trading")}</span>
                            <span>{t("trade_with_up_100x_leverage")}</span>
                        </div>
                        <div className="points__ff">
                            <span>{t("trade_world_markets_ncx_superior_execution")}</span>
                        </div>
                        <div className="hh__btn">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="up_sin">{t("sign_up")}</Button>
                            <Button href="#" className="get__ap">{t("get_the_app")}</Button>
                        </div>
                    </div>
                    <div className="col mgg">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492792/indices_head-1_koiywt.png" alt="prices"/>
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492792/indices_head-2_pzfkhc.png" alt="prices"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices8;