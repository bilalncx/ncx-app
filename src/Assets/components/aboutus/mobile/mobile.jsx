import React from "react";
import '../../institution/mobile/mobile.css';
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import {ReactComponent as VVector} from '../../../images/v-vector.svg';
import AboutTrade from '../../indices/01/1';
import NCXDeFi from '../../wallet/06/6';
import PartnerShips from '../../homepage/banner/partner';

function AboutMobileVersion()
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
                    <h2 className="otc_v">{t("about_us")}</h2>
                    <p className="otc__p">{t("about_us_text")}</p>
                    <div className="row team_pairs mobile">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={1}
                                end={32}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                // separator=" "
                                // decimals={4}
                                // decimal=","
                                prefix=">"
                                // suffix=" left"
                                delay={0}
                            />
                            <p>{t("team_member_internationally")}</p>
                        </div>
                        <div className="col">
                            <h1>24/7</h1>
                            <p>{t("multilingul_support")}</p>
                        </div>
                    </div>
                    <div className="row team_pairs mobile">
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={180}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("available_in_countries")}</p>
                        </div>
                        <div className="col">
                            <CountUp
                                className="balance"
                                start={10}
                                end={500}
                                duration={15}
                                useEasing={true}
                                useGrouping={true}
                                prefix=">"
                            />
                            <p>{t("spot_trading_pairs")}</p>
                        </div>
                    </div>
                    <p className="otc__p">{t("about_text1")}</p>
                    <p className="otc__p">{t("about_text2")}</p>
                    <p className="otc__p">{t("about_text3")}</p>

                    <div className="ncx-office">
                        <div className="img12">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492438/ncx_office1_dwvyrg.png" alt="ncx-office" />
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492437/ncx_office2_vxlphn.png" alt="ncx-office" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="zx__zx2 brd__btm">
                <h2>{t("institutional_services")}</h2>
                <div className="xs__edf">
                    <h3>{t("liquidity_program")}</h3>
                    <p>{t("about_liqiuidity_program")}</p>
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

            <AboutTrade />

            <div className="zx__zx2 brd__btm">
                <h2>Institutional Advantages </h2>
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

            <div className="zx__zx2 brd__btm"> 
                <h2>{t("defi")}</h2>
                <NCXDeFi />
            </div>

            <PartnerShips />
            

        </div>
    )
}

export default AboutMobileVersion;