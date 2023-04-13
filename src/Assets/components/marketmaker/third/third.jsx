import { AnimationOnScroll } from 'react-animation-on-scroll';
import  React from "react";
import '../../homepage/8thgradientsection/gradient.css';
import { useTranslation } from "react-i18next";

function Home8thGradientSection(){

const { t } = useTranslation();

    return(
        <div className="gradient">
            <div className="container">
                <h1 className='market_benefits'>{t("market_makers")} <span>{t("trading_benefits")}</span></h1>
                <div className="gradient-bar">
                    <AnimationOnScroll animateIn="animate__slideInLeft">
                        <div className="gradientbar"></div>
                    </AnimationOnScroll>
                </div>
                <div className="row gradient-text">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>01</h3>
                            <h1>{t("special_fees")}</h1>
                            <p>{t("special_fees_text")}</p>
                            <ul>
                                <li>{t("top_tier_fee_rate")}</li>
                                <li>{t("permanent_discount_fee_rate")}</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>02</h3>
                            <h1>{t("exclusive_withdrawal_limits")}</h1>
                            <p>{t("reach_out_your_mm_contact")}</p>
                            <ul>
                                <li>{t("exclusive_daily_withdrawal_limits")}</li>
                                <li>{t("customized_margin_loan_quota")}</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>03</h3>
                            <h1>{t("intrest_free_credit")}</h1>
                            <p>{t("intrest_free_credit_text")}</p>
                            <ul>
                                <li>{t("sign_e_contact")}</li>
                                <li>{t("fill_credit_form")}</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>03</h3>
                            <h1>{t("stable_api")}</h1>
                            <p>{t("stbale_exclusive_api_service")}</p>
                            <ul>
                                <li>{t("spot_api")}</li>
                                <li>{t("futures_api")}</li>
                            </ul>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="transaction_rebates">
                    <div className="hsd13">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h3>{t("transaction")} <span>{t("rebates")}</span></h3>
                            <p>{t("rebates_text")}</p>
                        </AnimationOnScroll>
                    </div>
                    <div className="amm_markettable">
                        <div className="amm_head">
                            <div className="col"><p>{t("Rebate_level")}</p></div>
                            <div className="col"><p>{t("ranking")}</p></div>
                            <div className="col"><p className='rebat_mkr_dsk'>{t("rebate_ration")}</p><p className='mkr_rebate_mbl'>{t("mkr_rebate_mbl")}</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV3</p></div>
                            <div className="col"><p>{t("top_1_5")}</p></div>
                            <div className="col"><p>0.02%</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV2</p></div>
                            <div className="col"><p>{t("top_6_10")}</p></div>
                            <div className="col"><p>0.015%</p></div>
                        </div>
                        <div className="amm_body_row">
                            <div className="col"><p>LV1</p></div>
                            <div className="col"><p>{t("top_11_20")}</p></div>
                            <div className="col"><p>0.01%</p></div>
                        </div>
                    </div>
                    <div className="fees_details">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h4>{t("about_transaction_rebate")}</h4>
                            <p>{t("about_transaction_rebate_1")}</p>
                            <p>{t("about_transaction_rebate_2")}</p>
                            <p>{t("about_transaction_rebate_3")}</p>
                            <p>{t("about_transaction_rebate_4")}</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home8thGradientSection;