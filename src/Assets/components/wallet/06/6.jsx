import React from "react";
import './6.css';
import { useTranslation } from "react-i18next";

function WalletDefi()
{
    const { t } = useTranslation();
    return(
        <div className="wallet__defi">
            <div className="container">
                <div className="cfd__cnt">
                    <div className="cd">
                        <h1>{t("swap_text_1")}</h1>
                        <p>Including Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WalletDefi;