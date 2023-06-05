import React from "react";
import './style.css';
import { useTranslation } from "react-i18next";

function CardNewFaqSection()
{
    const { t } = useTranslation();

    return(
        <div className="aerv">
            <div className="container">
                <div className="row aeewf">
                    <div className="col verhnb">
                        <h1>Learn more about NCX <br/>Crypto Card</h1>
                    </div>
                    <div className="col vwev">
                        <div className="accordian">
                            <details>
                                <summary>{t("what-are_the_benfits_of_using_ncx_card_?")}
                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer-benefits_using_ncx_card")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("how_to_top_up_your_ncx_card_?")}
                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer_top_up_ncx_card")}</p>
                                    <p>{t("subject_to_region")}</p>
                                    <p>{t("limits_apply")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("where_can_i_pay_with_my_ncx_card_?")}
                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer-pay_with_ncx_card")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("how_to_get_your_ncx_card_rewards_?")}
                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer_how_to_get_ncx_rewards")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("ncx_card_security-features_?")}
                                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer_ncx_card_security_features")}</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNewFaqSection;