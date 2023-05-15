import {React} from "react";
import './first.css';
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/crypto_card_1.png';
import CryptoCard2 from '../../../images/crypto_card_2.png';
import { useTranslation } from "react-i18next";
import { ReactComponent as AboutLogo } from '../../../images/about_logo.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as SafeArrow } from '../../../images/safe-arrow.svg';

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div id="ncx_cryptoCard" className="crypto_card">
            <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("your_crypto")}</h1>
                        <h1 className="border-bv">{t("debit_card")}</h1>
                        <h1>{t("awaits")}</h1>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("get_the_card")}</Button>
                            <Button href="#card-details" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    <img src={CryptoCard2} alt="ncx_crypto_card" />
                </div>
                <div className="col card_imgb">
                    <img src={CryptoCard1} alt="ncx_crypto_card" />
                </div>
            </div>


            <div id="mobileSlider">
                <CarouselProvider
                        visibleSlides={1}
                        totalSlides={2}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={400}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                    <Slider className="slider">
                        <Slide index={0}>
                            <img src={CryptoCard2} alt="ncx_crypto_card" />
                        </Slide>
                        <Slide index={1}>
                            <img src={CryptoCard1} alt="ncx_crypto_card" />
                        </Slide>
                    </Slider>
                    <ButtonBack className="age"><div className="circle"></div></ButtonBack>
                    <ButtonNext className="pich"><div className="circle"></div></ButtonNext>
                </CarouselProvider>
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("your_crypto")} {t("debit_card")}</h1>
                        {/* <h1 className="border-bv">{t("debit_card")}</h1> */}
                        <p class="cardp1">{t("crypto_debit_card_text")}</p>
                        <div id="mobile-butller">
                            <div class="bullets">
                                <span>{t("pay_at_44_million_merchant")}</span>
                            </div>
                            <div class="bullets">
                                <span>{t("powered_by_mastercard")}</span>
                                <span>{t("atm_withdrawals")}</span>
                            </div>
                            <div class="bullets">
                                <span>{t("top_up_by_crypto")}</span>
                                <span>{t("premium_metal_card")}</span>
                            </div>
                            <div class="bullets">
                                <span>{t("online_payments")}</span>
                                <span>Apple Pay</span>
                                <span>Google Pay</span>
                            </div>
                        </div>
                        <p class="cardp2">{t("one_card_unlimited_possibilities")}</p>
                        {/* <div className="bbttn">
                            <Button href="#" className="card_apply">{t("get_the_card")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="data_analytics">
                <div className="container">
                    <div className="trading_col">
                        <div className="about_logo">
                            <AboutLogo />
                            <h1>{t("card")}</h1>
                        </div>
                    </div>

                    <div className="analytics_row fsdcc3">
                        <div className="col fs33">
                            <div className="ffd23">
                                <h1>{t("top_up_by_crypto_fiat")}</h1>
                                <p>{t("ncx_card_1")}</p>
                            </div>
                        </div>
                        <div className="col fs33">
                            <div className="ffd23">
                                <h1>{t("atm_withdrawals")}</h1>
                                <p>{t("ncx_card_2")}</p>
                            </div>
                        </div>
                        <div className="col fs33">
                            <div className="ffd23">
                                <h1>{t("online_payments")}</h1>
                                <p>{t("ncx_card_3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FirstVideo;