import {React} from "react";
import './desktop.css';
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Trade from '../../indices/01/1';
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
                            <h1>{t("about_ncx_hybrid_cex_dex_ecosystem")}</h1>
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

            <div className="about_content brd__btm">
                <div className="container">
                    <div className="about_team">
                        <div className="row team_pairs">
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
                    </div>
                    <div className="about-txt">
                        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                            <p>{t("about_text1")}</p>
                            <p>{t("about_text2")}</p>
                            <p>{t("about_text3")}</p>
                        {/* </AnimationOnScroll> */}
                    </div>
                    <div className="ncx-office">
                        <AnimationOnScroll className="img12" animateIn="animate__fadeIn">
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492438/ncx_office1_dwvyrg.png" alt="ncx-office" />
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689492437/ncx_office2_vxlphn.png" alt="ncx-office" />
                        </AnimationOnScroll>
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

            <Trade />
        </div>
    )
}
export default AboutDesktopVersion;