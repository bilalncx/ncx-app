import {React} from "react";
import '../../aboutus/desktop/desktop.css';
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import {ReactComponent as VVector} from '../../../images/v-vector.svg';

function AboutDesktopVersion()
{
    const { t } = useTranslation();

    return(
        <div className="abo__dek">
            <div className="crypto_card">
                <div className="new__ambass">
                    <div className="container ml__vwxf">
                        <div className="insse">
                            <h1>{t("ncx_institutional_services_for_commercial_entities_funds_brokerages_xchange_hnwi")}</h1>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
                        </div>
                        <div className="fvsd__v">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inst__itute brd__btm">
                <div className="container">
                    <h1>{t("institutional_services")}</h1>
                    <div className="OTCsect one row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("liquidity_program")}</h2>
                                <p>{t("about_liqiuidity_program")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("broker_program")}</h2>
                                <p>{t("about_broker_program_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("access_defi")}</h2>
                                <p>{t("access-defi_text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect second row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("otc_execution_services")}</h2>
                                <p>{t("otc_execution_services_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("custody_assets_management")}</h2>
                                <p>{t("custody_assets_management_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("structured_product")}</h2>
                                <p>{t("structured_product_text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inst__itute brd__btm">
                <div className="container">
                    <h1>{t("exclusive_rates")}</h1>
                    <div className="OTCsect one row">
                        <div className="col">
                            <h3 className="vcwe">{t("spot_fee_rate")}</h3>
                            <div className="rates_div">
                                <div className="marker_lowest">
                                    <h4>0.00%</h4>
                                    <p>{t("marker_lowest")}</p>
                                </div>
                                <div className="marker_lowest">
                                    <h4>0.005%</h4>
                                    <p>{t("taker_lowest")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="vcwe">{t("future_fee_rate")}</h3>
                            <div className="rates_div">
                                <div className="marker_lowest">
                                    <h4>0.00%</h4>
                                    <p>{t("marker_lowest")}</p>
                                </div>
                                <div className="marker_lowest">
                                    <h4>0.005%</h4>
                                    <p>{t("taker_lowest")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="vcwe">{t("withdrawals")}</h3>
                            <div className="rates_div">
                                <div className="marker_lowest">
                                    <h4>0.02%</h4>
                                    <p>{t("withdrawal_fee_lowest")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ind__fq instV__vf">
                <div className="container">
                    <h1 className="fg__rer">{t("trading_solutions")}</h1>
                    <div className="accord">
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
            </div>

            <div className="inst__itute brd__btm">
                <div className="container">
                    <h1>{t("trading_advantage")}</h1>
                    <div className="OTCsect one row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("compliance")}</h2>
                                <p>{t("compliance_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("risk_management")}</h2>
                                <p>{t("risk_management_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("cross_chain_dex")}</h2>
                                <p>{t("trading_advantages_text3")}</p>
                                <p>{t("trading_advantages_text3_1")}</p>
                                <p>{t("trading_advantages_text3_2")}</p>
                                <p>{t("trading_advantages_text3_3")}</p>
                                <p>{t("trading_advantages_text3_4")}</p>
                                <p>{t("trading_advantages_text3_5")}</p>
                                <p>{t("trading_advantages_text3_6")}</p>
                                <p>{t("trading_advantages_text3_7")}</p>
                                <p>{t("trading_advantages_text3_8")}</p>
                                <p>{t("trading_advantages_text3_9")}</p>
                                <p>{t("trading_advantages_text3_10")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect second row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("derivatives_market")}</h2>
                                <p>{t("ncx_offers_over_500_derivatives_trading_pairs")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("spot_market")}</h2>
                                <p>{t("trading_advantage_text5")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("api_sdk_colo_service")}</h2>
                                <p>{t("api-sdk-colo-text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vx__vrd brd__btm">
                <div className="container">
                    <h2>{t("data_and_analytics")}</h2>
                    <div className="vf row">
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
                </div>
            </div>

            <div className="ind__fq inst__itute instV__vf">
                <div className="container">
                    <h1 className="fg__rer">{t("assets_management")}</h1>
                    <div className="accord">
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

                    <div className="OTCsect one row">
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("corporations")}</h2>
                                <p>{t("corporations_text_moblie")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("cryptocurrency_miners")}</h2>
                                <p>{t("cryptocurrency_miners_text")}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otctxt">
                                <h2>{t("high_net_worth_investors")}</h2>
                                <p>{t("high_net_worth_investors_text_mobile")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutDesktopVersion;