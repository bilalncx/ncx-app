import { React } from 'react';
import './accordian.css';
import { useTranslation } from "react-i18next";

function Accordian() {

    const { t } = useTranslation();

    return(
        <div className="accordian_wrapper">
            <div className="accordian">
                <details>
                    <summary>{t("do_i_need_to_keep_mycrypto_on_ncx_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("Answer_do_i_need_to_keep_mycrypto_on_ncx_?")}</p>
                    </div>
                </details>
                <details>
                    <summary>{t("what_are_benefits_of_using_ncx_vs_other_crypto_exchanges_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("answer_what_are_benefits_of_using_ncx_vs_other_crypto_exchanges_?")}</p>
                    </div>
                </details>
                <details>
                    <summary>{t("what_is_ncx-trade_?_how_to_start_trading_with_up_to_100x_leverage_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("ans_1_what_is_ncx-trade_?_how_to_start_trading_with_up_to_100x_leverage_?")}</p>
                        <p>{t("ans_2_what_is_ncx-trade_?_how_to_start_trading_with_up_to_100x_leverage_?")}</p>
                    </div>
                </details>
                <details>
                    <summary>{t("how_can_i_earn_ncx_tokens_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("ans_1_how_earn_tokens")}</p>
                        <ul>
                            <li>{t("ans_2_how_earn_tokens")}</li>
                            <li>{t("ans_3_how_earn_tokens")}</li>
                            <li>{t("ans_4_how_earn_tokens")}</li>
                            <li>{t("ans_5_how_earn_tokens")}</li>
                            <li>{t("ans_6_how_earn_tokens")}</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Accordian