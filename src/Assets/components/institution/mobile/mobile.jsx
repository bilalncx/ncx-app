import React from "react";
import './mobile.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import {ReactComponent as VVector} from '../../../images/v-vector.svg';
import Promo1 from '../../../images/promo-1.png';
import Promo2 from '../../../images/promo-2.png';
import Promo3 from '../../../images/promo-3.png';
import Promo4 from '../../../images/promo-4.png';
import Promo5 from '../../../images/promo-5.png';
import Promo6 from '../../../images/promo-6.png';
import Promo7 from '../../../images/promo-7.png';
import Promo8 from '../../../images/promo-8.png';
import Promo9 from '../../../images/promo-9.png';
import Promo10 from '../../../images/promo-10.png';

function InstitutionMobile()
{
    const { t } = useTranslation();

    return(
        <div className="mbl__version">
            <div className="zx__zx">
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                </video>
                <div className="zx__txt">
                    <h2>{t("institutional_services")}</h2>
                    <p>{t("ncx_institutional_services_for_commercial_entities_funds_brokerages_xchange_hnwi")}</p>
                    <Button className="btn__mail" href="mailto: support@ncx.cx">{t("apply")}</Button>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <h2>{t("institutional_services")}</h2>
                <div className="xs__edf">
                    <h3>{t("liquidity_program")}</h3>
                    <p>{t("liquidity_program_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("broker_program")}</h3>
                    <p>{t("about_broker_program_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("access_defi")}</h3>
                    <p>{t("defi_compliance_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("assets_management")}</h3>
                    <p>{t("custody_assets_management_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("otc_execution_services")}</h3>
                    <p>{t("otc_execution_services_text")}</p>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <h2>{t("trading_solutions")}</h2>
                <div className="wws__xx">
                    <details>
                        <summary>{t("portfolio_margin_account")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("portfolio_margin_account_text")}
                        </div>
                    </details>
                    <details>
                        <summary>{t("otc")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("otc_text1")}
                        </div>
                    </details>
                    <details>
                        <summary>{t("api")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("api_text")}
                        </div>
                    </details>
                    <details>
                        <summary>{t("sub_account")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("sub_account_text")}
                        </div>
                    </details>
                    <details>
                        <summary>{t("managed_sub_account")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("managed_sub_account_text")}
                        </div>
                    </details>
                    <details>
                    <summary>{t("custom_login")}
                        <span className='red'>
                            <VVector />
                        </span>
                    </summary>
                    <div className='contt'>
                        {t("custom_login_text")}
                    </div>
                </details>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <h2>{t("data_and_analytics")}</h2>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277060/backtest_veasef.png" alt="ncx-cx"/>
                    <h3>{t("backtest_strategy_optimization")}</h3>
                    <p>{t("backtest_strategy_optimization_text")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277061/range_t83asq.png" alt="ncx-cx"/>
                    <h3>{t("wide_range_analytics")}</h3>
                    <p>{t("wide_range_analytics_text")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277061/tax-api_lsyhws.png" alt="ncx-cx"/>
                    <h3>{t("tax_api_Transaction_history")}</h3>
                    <p>{t("export_data_function_text")}</p>
                </div>
            </div>

            <div className="zx__zx">
                <div className="mb__partner">
                    <div className="sliders-wrap">
                        <div className="rooted">
                            <div className="scroll">
                                <div className="part">
                                    <div className="box-slide">
                                        <div className="slider-card">
                                            <img src={Promo1} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo2} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo3} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo4} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo5} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo6} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo7} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo8} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo9} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo10} alt="ncx"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="part">
                                    <div className="box-slide">
                                        <div className="slider-card">
                                            <img src={Promo1} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo2} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo3} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo4} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo5} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo6} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo7} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo8} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo9} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo10} alt="ncx"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="part">
                                    <div className="box-slide">
                                        <div className="slider-card">
                                            <img src={Promo1} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo2} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo3} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo4} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo5} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo6} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo7} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo8} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo9} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo10} alt="ncx"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="part">
                                    <div className="box-slide">
                                        <div className="slider-card">
                                            <img src={Promo1} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo2} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo3} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo4} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo5} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo6} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo7} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo8} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo9} alt="ncx"/>
                                        </div>
                                        <div className="slider-card">
                                            <img src={Promo10} alt="ncx"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689415317/cardbox_gg7yve.png" alt="ncx"/>
            </div>

            <div className="zx__zx2">
                <h2>{t("institutional_advantages")}</h2>
                <div className="xs__edf">
                    <h3>{t("compliance")}</h3>
                    <p>{t("regulatory_compliance_text")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("risk_management")}</h3>
                    <p>{t("risk_management_text_mobile")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("derivatives_market")}</h3>
                    <p>{t("ncx_offers_over_500_derivatives_trading_pairs")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("spot_market")}</h3>
                    <p>{t("trading_advantage_text5")}</p>
                </div>
                <div className="xs__edf">
                    <h3>{t("api_sdk_colo_service")}</h3>
                    <p>{t("api-sdk-colo-text")}</p>
                </div>
            </div>

            <div className="zx__zx2 brd__btm assets__mng">
                <h2>{t("assets_management")}</h2>
                <div className="wws__xx">
                    <details>
                        <summary>{t("assets_management")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("assets_management_text")}
                        </div>
                    </details>
                    <details>
                        <summary>{t("custody_count")}
                            <span className='red'>
                                <VVector />
                            </span>
                        </summary>
                        <div className='contt'>
                            {t("custody_count_text")}
                        </div>
                    </details>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277060/corporations_v588yu.png" alt="ncx-cx"/>
                    <h3>{t("corporations")}</h3>
                    <p>{t("corporations_text_moblie")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277060/miners_vhbdey.png" alt="ncx-cx"/>
                    <h3>{t("cryptocurrency_miners")}</h3>
                    <p>{t("crypto_currency_miners_text")}</p>
                </div>
                <div className="ml__huc">
                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1690277060/net-worth_qsbful.png" alt="ncx-cx"/>
                    <h3>{t("high_net_worth_investors")}</h3>
                    <p>{t("high_net_worth_investors_text_mobile")}</p>
                </div>
            </div>
        </div>
    )
}

export default InstitutionMobile;