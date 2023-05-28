import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/ncx-whitecard.png';
import Device2 from '../../../images/ncx-platniumcard.png';
import Device3 from '../.././../images/ncx-blackcard.png';
import Device4 from '../../../images/ncx-whitegoldcard.png';
import { useTranslation } from "react-i18next";

function Indices5()
{
    const { t } = useTranslation();
    return(
        <div id="card__new" className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_innovative_trading_platforms")}</h1>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX {t("select")} <span>{t("card")}</span></h2>
                        </div>
                        <p>
                            <span>{t("monthly_limit")} $10,000 | {t("atm_withdrawals")}  $2,500 Monthly</span>
                            <span>{t("trading_fee_discount")} 0%</span>
                            <span>{t("free_premium_metal_card")} | {t("virtual_card")} </span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="/ncx-card" className="download">{t("view_card")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX {t("gold")} <span>{t("card")}</span></h2>
                        </div>
                        <p>
                            <span>{t("monthly_limit")} $25,000 | {t("atm_withdrawals")}  $5,000 Monthly</span>
                            <span>{t("trading_fee_discount")} 10%</span>
                            <span>{t("free_premium_metal_card")} | {t("virtual_card")}</span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="/ncx-card" className="download">{t("view_card")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device4} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe gold__card">
                        <div className="tra__go">
                            <h2>NCX {t("platinum")} <span>{t("card")}</span></h2>
                        </div>
                        <p>
                            <span>{t("monthly_limit")} $50,000 | {t("atm_withdrawals")}  $10,000 Monthly</span>
                            <span>{t("trading_fee_discount")} 15% | {t("10%_discount_on")} Booking.com</span>
                            <span>{t("free_premium_metal_card")} | {t("virtual_card")} </span>
                            <span>Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="/ncx-card" className="download">{t("view_card")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device2} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe black__card">
                        <div className="tra__go">
                            <h2>NCX {t("black")} <span>{t("card")}</span></h2>
                        </div>
                        <p>
                            <span>{t("monthly_limit")} $100,000 | {t("atm_withdrawals")}  $15,000 Monthly</span>
                            <span>{t("trading_fee_discount")} 20% | {t("10%_discount_on")} Booking.com</span>
                            <span>{t("free_premium_metal_card")} | {t("10%_discount_on")} Expedia.com</span>
                            <span>{t("virtual_card")}  | Apple Pay, Google Pay, Samsung Pay</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="/ncx-card" className="download">{t("view_card")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            <img src={Device3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;