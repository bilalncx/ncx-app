import React from 'react'
import '../../homepage/accordian/accordian.css'
import { useTranslation } from "react-i18next";

function Accordian() {

    const { t } = useTranslation();

    return(
        <div className="accordian_wrapper">
            <div className="accordian">
            <details>
                <summary>{t("portfolio_margin_account")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("portfolio_margin_account_text")}
                </div>
            </details>
            <details>
                <summary>{t("otc")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("otc_text1")}
                </div>
            </details>
            <details>
                <summary>{t("api")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("api_text")}
                </div>
            </details>
            <details>
                <summary>{t("sub_account")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("sub_account_text")}
                </div>
            </details>
            <details>
                <summary>{t("managed_sub_account")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("managed_sub_account_text")}
                </div>
            </details>
            <details>
                <summary>{t("custom_login")}
                    <span className='red'>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                        </svg>
                    </span>
                </summary>
                <div className='contt'>
                    {t("custom_login_text")}
                </div>
            </details>
            </div>
        </div>
    )
}


export default Accordian;