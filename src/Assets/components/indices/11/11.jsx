import React from "react";
import './11.css';
import {ReactComponent as DropIcon} from '../../../images/v-vector.svg';
import { useTranslation } from "react-i18next";

function IndicesFAQ()
{
    const { t } = useTranslation();
    return(
        <div className="ind__fq">
            <div className="container">
                <h1 className="fg__rer">{t("faq")}</h1>
                <div className="accord">
                    <details>
                        <summary>{t("how_do_derivatives_work")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer_1_how_do_derivatives_work")}</p>
                            <p>{t("answer_2_how_do_derivatives_work")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("which_assets_can_i_trade")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("ans_1_which_assets_can_i_trade")}</p>
                            <p>{t("ans_2_which_assets_can_i_trade")}</p>
                            <p>{t("ans_3_which_assets_can_i_trade")}</p>
                            <p>{t("ans_4_which_assets_can_i_trade")}</p>
                            <p>{t("ans_5_which_assets_can_i_trade")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("what_are_the_steps_involved_in_derivatives_trading")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <ul>
                                <li>{t("open_the_account")}</li>
                                <li>{t("complete_kyc")}</li>
                                <li>{t("deposit_funds")}</li>
                                <li>{t("research_the_markets")}</li>
                                <li>{t("place_a_trade")}</li>
                                <li>{t("monitor_your_trade")}</li>
                                <li>{t("close_your_trade")}</li>
                                <li>{t("earn_a_profit_or_loss")}</li>
                                <li>{t("withdraw_funds_from_your_trading_to_spot_wallet_on_ncx")}</li>
                                <li>{t("find_your_next_trading_opportunity")}</li>
                           </ul>
                        </div>
                    </details>
                    <details>
                        <summary>{t("how_long_do_derivatives_trade_transactions_take")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>{t("answer_how_long_do_derivatives_trade_transactions_take")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("how_do_i_calculate_the_profit_or_loss_of_a_trade")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>{t("ans_1_calculate_the_profit_or_loss_of_a_trade")}</p>
                           <p>{t("ans_2_calculate_the_profit_or_loss_of_a_trade")} <span>{t("ans_3_calculate_the_profit_or_loss_of_a_trade")}</span></p>
                           <p>{t("ans_4_calculate_the_profit_or_loss_of_a_trade")}</p>
                           <p>{t("ans_5_calculate_the_profit_or_loss_of_a_trade")}</p>
                           <p>{t("ans_6_calculate_the_profit_or_loss_of_a_trade")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("what_strategies_are_commonly_used_in_derivatives_trading")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>{t("ans_what_strategies_are_commonly_used_in_derivatives_trading")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("what_is_forex_trading")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>{t("ans_1_what_is_forex_trading")}</p>
                           <p>{t("ans_1_what_is_forex_trading")}</p>
                           <p>{t("ans_1_what_is_forex_trading")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("what_are_the_advantages_of_forex_trading")}
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p><strong>{t("ans_1_advantages_of_forex_trading")}</strong> {t("ans_2_advantages_of_forex_trading")}</p>
                            <p><strong>{t("ans_3_advantages_of_forex_trading")}</strong> {t("ans_4_advantages_of_forex_trading")}</p>
                            <p><strong>{t("ans_5_advantages_of_forex_trading")}</strong> {t("ans_6_advantages_of_forex_trading")}</p>
                            <p><strong>{t("ans_7_advantages_of_forex_trading")}</strong> {t("ans_8_advantages_of_forex_trading")}</p>
                            <p><strong>{t("ans_9_advantages_of_forex_trading")}</strong> {t("ans_10_advantages_of_forex_trading")}</p>
                            <p><strong>{t("ans_11_advantages_of_forex_trading")}</strong> {t("ans_12_advantages_of_forex_trading")}</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
export default IndicesFAQ;