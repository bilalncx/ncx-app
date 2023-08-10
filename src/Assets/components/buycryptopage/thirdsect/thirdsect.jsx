import { useState } from 'react'
import '../../cardpage/card-faq/faq.css'
import { useTranslation } from "react-i18next";


function Accordian() {

    const { t } = useTranslation();

    return(
        <div id="card-faqss">
            <div className="container">
                <h1 className='freq-ask-ques'>{t("frequently_asked_questions")}</h1>
                <div className="accordian">
                <details>
                    <summary>{t("which_cards_accepted_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("answer_para_1")}</p>
                        <p>{t("answer_para_2")}</p>
                        <ul>
                            <li>{t("answer_para_3")}</li>
                            <li>{t("answer_para_4")}</li>
                            <li>{t("answer_para_5")}</li>
                            <li>{t("answer_para_6")}</li>
                        </ul>
                        <p>{t("answer_para_7")}</p>
                    </div>
                </details>
                <details>
                    <summary>{t("how_long_does_take_complete_transaction_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("answer_complete_transaction")}</p>
                    </div>
                </details>
                <details>
                    <summary>{t("can_i_use_local_currnecy_buy_crypto_?")}
                        <span className='red'>
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className='contt'>
                        <p>{t("answer_buy_crypto")}</p>
                    </div>
                </details>
                </div>
            </div>
        </div>
    )
}


export default Accordian