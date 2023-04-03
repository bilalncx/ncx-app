import React from "react";
import { ReactComponent as NCXGooglePay } from '../../../images/ncx-googlepay.svg';
import { ReactComponent as NCXApplePay } from '../../../images/ncx-applepay.svg';
import './fourth.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXIphoneAddWallet from '../../../images/ncx-iphone-addwallet.png';
import NCXiPhoneTransactions from '../../../images/ncx-iphonetransactions.png';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import NCXNewsletter from '../../newsletter/subscribe';
import { useTranslation } from "react-i18next";

function NCXDebitCardSection()
{
    const { t } = useTranslation();

    return(
        <div className="ncxcard">
            <div className="container">
                <div className="card-row row">
                    <div id="mobile-showcard">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-cardddd">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>{t("card")}</p>
                            </div>
                            <h1>{t("one_card")}</h1>
                            <h1 className="trprr">{t("unlimited_possibilities")}</h1>
                            <h1>{t("launching_2023")} <span className="trprr">{t("apply_now")}</span></h1>
                            <div id="email-subscription">
                                <NCXNewsletter />
                            </div>
                            <div className="cryptopay">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="cardmobileimg">
                            <div className="ncx-iphoneimages">
                                <img src={NCXIphoneAddWallet} alt="NCX iPhone Add wallet" />
                            </div>
                            <div className="ncx-transactionphone">
                                <img className="transact-iphone"  src={NCXiPhoneTransactions} alt="NCX iPhone Transactions"/>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-cardddd">
                                < img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                <p>{t("card")}</p>
                            </div>
                            <h1>{t("one_card")}</h1>
                            <h1>{t("unlimited_possibilities")}</h1>
                            <h1>{t("apply_now")}</h1>
                            <div id="email-subscription">
                                <NCXNewsletter />
                            </div>
                            <div className="cryptopay">
                                <NCXApplePay />
                                <NCXGooglePay />
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NCXDebitCardSection;