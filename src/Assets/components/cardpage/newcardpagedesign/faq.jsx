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
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer-benefits_using_ncx_card")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("how_to_top_up_your_ncx_card_?")}
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
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
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer-pay_with_ncx_card")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("how_to_get_your_ncx_card_rewards_?")}
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
                                    </svg>
                                </summary>
                                <div className='contt'>
                                    <p>{t("answer_how_to_get_ncx_rewards")}</p>
                                </div>
                            </details>
                            <details>
                                <summary>{t("ncx_card_security-features_?")}
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.311311 0.418754C0.622234 0.0619783 1.12633 0.0619783 1.43725 0.418754L8.03968 7.99547L14.6421 0.418754C14.953 0.0619783 15.4571 0.0619783 15.768 0.418754C16.0789 0.77553 16.0789 1.35405 15.768 1.71082L8.60264 9.93358C8.29174 10.2904 7.78762 10.2904 7.47672 9.93358L0.311311 1.71082C0.000396326 1.35405 0.000396326 0.77553 0.311311 0.418754Z" fill="#FAFAFA"/>
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