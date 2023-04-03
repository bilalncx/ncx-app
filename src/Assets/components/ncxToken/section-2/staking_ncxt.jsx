import  React from "react";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import './style.css';
import {ReactComponent as NCXTickmark } from '../../../images/check.svg';
import { ReactComponent as TokenTick } from '../../../images/check.svg';
import {ReactComponent as NCXTokenIcon} from '../../../images/token_icon.svg';
import { useTranslation } from "react-i18next";

function HomeNCXToken()
{

    const { t } = useTranslation();

    return(
        <div id="stake_ncxT">
            <div className="container">
                <div className="stake_ncx">
                    <h1>{t("stake_ncxt_reap_the_rewards")}</h1>
                </div>
                <div className="tokentable-stake">
                    <div className="tokenhead-stake">
                        <p className="q1">{t("ncxt_staked")}</p>
                        <p className="q1">{t("trading_fee_discount")}</p>
                        <p className="q1">{t("additional_staking_rewards_apr")}</p>
                        <p className="q1">{t("lower_spread_on_derivatives_trading")}</p>
                        <p className="q1">{t("ncx_card")}</p>
                        <p className="q1">{t("withdrawal_fee_refund")}</p>
                        <p className="q1">{t("derivatives_leverage")}</p>
                        <p className="q1">{t("additional_apr_for_providing_liquidity_in_ncx_yield_farms")}</p>
                        <p className="q1">{t("use_ncxt_as_collateral_to_borrow_other_crypto_assets")}</p>
                    </div>
                    <div className="tokencolum-stake">
                        <div className="colstake">
                            <div className="color">
                                <NCXTokenIcon />
                                <p>25,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>50,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>100,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>250,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>500,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>1,000,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>2,500,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>5,000,000</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>10,000,000</p>
                            </div>
                        </div>
                        <div className="colstake">
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>70%</p>
                            <p>80%</p>
                            <p>90%</p>
                        </div>
                        <div className="colstake">
                            <p>2%</p>
                            <p>3%</p>
                            <p>4%</p>
                            <p>5%</p>
                            <p>6%</p>
                            <p>8%</p>
                            <p>10%</p>
                            <p>12%</p>
                            <p>15%</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p className="height_q">{t("level_1")}</p>
                            <p className="height_q">{t("level_2")}</p>
                            <p className="height_q">{t("level_3")}</p>
                            <p className="height_q">{t("level_4")}</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p className="height_q">{t("select")}</p>
                            <p className="height_q">{t("platinum")}</p>
                            <p className="height_q">{t("gold")}</p>
                            <p className="height_q">{t("black")}</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p>10%</p>
                            <p>20%</p>
                            <p>30%</p>
                            <p>40%</p>
                            <p>50%</p>
                            <p>60%</p>
                            <p>80%</p>
                            <p>100%</p>
                        </div>
                        <div className="colstake">
                            <p className="height_q">80x</p>
                            <p className="height_q">100x</p>
                            <p>110x</p>
                            <p>120x</p>
                            <p>130x</p>
                            <p>140x</p>
                            <p>150x</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>5%</p>
                            <p>8%</p>
                            <p>10%</p>
                            <p>12%</p>
                            <p>15%</p>
                            <p>20%</p>
                        </div>
                        <div className="colstake ticken">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                    </div>
                </div>
                <div className="mobile-tokentable">
                    <div className="mbl-tokrow">
                        <h3>{t("ncxt_staked")}</h3>
                        <div className="mbl-tokrowitems">
                            <div className="color">
                                <NCXTokenIcon />
                                <p>25K</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>50K</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>100K</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>250K</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>500K</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>1M</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>2.5M</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>5M</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>10M</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("trading_fee_discount")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>30%</p>
                            </div>
                            <div className="color">
                                <p>40%</p>
                            </div>
                            <div className="color">
                                <p>50%</p>
                            </div>
                            <div className="color">
                                <p>60%</p>
                            </div>
                            <div className="color">
                                <p>70%</p>
                            </div>
                            <div className="color">
                                <p>80%</p>
                            </div>
                            <div className="color">
                                <p>90%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("additional_staking_rewards_apr")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>2%</p>
                            </div>
                            <div className="color">
                                <p>3%</p>
                            </div>
                            <div className="color">
                                <p>4%</p>
                            </div>
                            <div className="color">
                                <p>5%</p>
                            </div>
                            <div className="color">
                                <p>6%</p>
                            </div>
                            <div className="color">
                                <p>8%</p>
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>12%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("lower_spread_on_derivatives_trading")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                            </div>
                            <div className="color height_q">
                                <p>{t("level_1")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("level_2")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("level_3")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("level_4")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow derivative">
                        <h3>{t("ncx_card")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                            </div>
                            <div className="color height_q">
                                <p>{t("select")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("platinum")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("gold")}</p>
                            </div>
                            <div className="color height_q">
                                <p>{t("black")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("withdrawal_fee_refund")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive">
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                            <div className="color">
                                <p>30%</p>
                            </div>
                            <div className="color">
                                <p>40%</p>
                            </div>
                            <div className="color">
                                <p>50%</p>
                            </div>
                            <div className="color">
                                <p>60%</p>
                            </div>
                            <div className="color">
                                <p>80%</p>
                            </div>
                            <div className="color">
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("derivatives_leverage")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color height_q">
                                <p>80x</p>
                            </div>
                            <div className="color height_q">
                                <p>100x</p>
                            </div>
                            <div className="color">
                                <p>110x</p>
                            </div>
                            <div className="color">
                                <p>120x</p>
                            </div>
                            <div className="color">
                                <p>130x%</p>
                            </div>
                            <div className="color">
                                <p>140x</p>
                            </div>
                            <div className="color">
                                <p>150x</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("additional_apr_for_providing_liquidity_in_ncx_yield_farms")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p>5%</p>
                            </div>
                            <div className="color">
                                <p>8%</p>
                            </div>
                            <div className="color">
                                <p>10%</p>
                            </div>
                            <div className="color">
                                <p>12%</p>
                            </div>
                            <div className="color">
                                <p>15%</p>
                            </div>
                            <div className="color">
                                <p>20%</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow ticken">
                        <h3>{t("use_ncxt_as_collateral_to_borrow_other_crypto_assets")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;