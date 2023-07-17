import React from "react";
import AppleGoogleImage from '../../../images/apple-google-pay.png';
import CardTrimmed from '../../../images/card_full.mp4';
import { useTranslation } from "react-i18next";

function IntegrationPlay()
{
    const { t } = useTranslation();
    return(
        <div className="integr__pla">
            <div className="container">
                <div className="nhy__tr">
                    <div className="mujh">
                        {/* <img src={AppleGoogleImage} alt="ncx"/> */}
                        <video 
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            >
                            <source src={CardTrimmed} type="video/mp4" />
                        </video>
                    </div>
                    <div className="tjmnh">
                        <h1>{t("integrated_applepay_googlepay")}</h1>
                        <div className="hyf__gg">
                            <div className="fvdd">
                                <h3>{t("four_your_in_store_payments")}</h3>
                                <p>{t("four_your_in_store_payments_text")}</p>
                            </div>
                            <div className="fvdd">
                                <h3>{t("encrypted_and_secured")}</h3>
                                <p>{t("encrypted_and_secured_text")}</p>
                            </div>
                            <div className="fvdd">
                                <h3>{t("for_your_online_payments")}</h3>
                                <p>{t("for_your_online_payments_text")}</p>
                            </div>
                            <div className="fvdd">
                                <h3>{t("pay_securely_with_your_device")}</h3>
                                <p>{t("pay_securely_with_your_device_text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntegrationPlay;