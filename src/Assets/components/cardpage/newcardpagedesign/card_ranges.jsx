import React from "react";
import './style.css';
import CardSelect from '../../../images/ncx-card4.png';
import CardGold from '../../../images/ncx-card5.png';
import CardPlatinum from '../../../images/ncx-card3.png';
import CardBlack from '../../../images/ncx-card2.png';
import { ReactComponent as WhiteTick } from '../../../images/white-tick.svg';
import { ReactComponent as InfoIcon } from '../../../images/info-circle-grey.svg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ReactComponent as CardLeftArrow } from '../../../images/card_leftarrow.svg';
import { ReactComponent as CardRightArrow } from '../../../images/card_rightarrow.svg';
import { useTranslation } from "react-i18next";

function NCXCardRanges()
{
    const { t } = useTranslation();
    return(
        <div id="compare-cards" className="range_cards">
            <div className="container">
                <h1 className="rnag_gg">{t("ncx_card_range")}</h1>
                <div className="card_bt">
                    <div className="vwexx">
                        <div className="qwrc"></div>
                        <div className="qwrc">
                            <img src={CardSelect} alt="ncx-card"/>
                            <p>{t("select_card")}</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardGold} alt="ncx-card"/>
                            <p>{t("gold_card")}</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardPlatinum} alt="ncx-card"/>
                            <p>{t("plantinum_card")}</p>
                        </div>
                        <div className="qwrc">
                            <img src={CardBlack} alt="ncx-card"/>
                            <p>{t("black_card")}</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("price")}</p>
                            <span>{t("staked_ncxt_required")}</span>
                        </div>
                        <div className="qwrc">
                            <p>{t("free")}</p>
                            <p className="cwee">100,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("free")}</p>
                            <p className="cwee">400,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("free")}</p>
                            <p className="cwee">1,000,000 NCXT</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("free")}</p>
                            <p className="cwee">5,000,000 NCXT</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("card_payment_limits")}</p>
                            <span>{t("per_calendar_month")}</span>
                        </div>
                        <div className="qwrc">
                            <p>$15,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$35,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$75,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$150,000</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("cash_withdrawal_limits")}</p>
                            <span>{t("per_calendar_month")}</span>
                        </div>
                        <div className="qwrc">
                            <p>$2,500</p>
                        </div>
                        <div className="qwrc">
                            <p>$5,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$10,000</p>
                        </div>
                        <div className="qwrc">
                            <p>$20,000</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("cash_withdrawals_included")}</p>
                            <span>{t("then_$2_excl_vat_per_withdrawal")}</span>
                        </div>
                        <div className="qwrc">
                            <p>0</p>
                        </div>
                        <div className="qwrc">
                            <p>5</p>
                        </div>
                        <div className="qwrc">
                            <p>10</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("unlimited")}</p>
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("free_netflix_subscription")}</p>
                            <span><InfoIcon /></span>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("free_spotify_subscription")}</p>
                            <span><InfoIcon /></span>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("concierge_service_lounge_access")}</p>
                            <span><InfoIcon /></span>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <p>-</p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                    <div className="vwexx">
                        <div className="qwrc fcisc">
                            <p>{t("compatible_with_apple_pay_google_pay")} </p>
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                        <div className="qwrc">
                            <WhiteTick />
                        </div>
                    </div>
                </div>

                <div className="card_rnag_mbl">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        naturalSlideHeight={500}
                        // hasMasterSpinner
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <div className="cscs__bt">
                            <ButtonBack className="mht"><CardLeftArrow /></ButtonBack>
                            <ButtonNext className="ertgb"><CardRightArrow /></ButtonNext>
                        </div>

                        <Slider 
                        className="pjiur"
                        classNameAnimation="scroll"
                        >
                            <Slide index={0} className="yuio">
                                <div className="qwrc">
                                    <img src={CardSelect} alt="ncx-card"/>
                                    <p>{t("select_card")}</p>
                                </div>

                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("price")}</p>
                                            <span>{t("staked_ncxt_required")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>{t("free")}</p>
                                            <span className="cwee">100,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("card_payment_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$15,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawal_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$2,500</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawals_included")}</p>
                                            <span>{t("then_$2_excl_vat_per_withdrawal")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>0</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_netflix_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_spotify_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("concierge_service_lounge_access")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("compatible_with_apple_pay_google_pay")} </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={1} className="yuio">
                                <div className="qwrc">
                                    <img src={CardGold} alt="ncx-card"/>
                                    <p>{t("gold_card")}</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("price")}</p>
                                            <span>{t("staked_ncxt_required")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>{t("free")}</p>
                                            <span className="cwee">400,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("card_payment_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$35,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawal_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$5,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawals_include")}</p>
                                            <span>{t("then_$2_excl_vat_per_withdrawal")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>5</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_netflix_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_spotify_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("concierge_service_lounge_access")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("compatible_with_apple_pay_google_pay")} </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={2} className="yuio">
                                <div className="qwrc">
                                    <img src={CardPlatinum} alt="ncx-card"/>
                                    <p>{t("plantinum_card")}</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("price")}</p>
                                            <span>{t("staked_ncxt_required")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>{t("free")}Free</p>
                                            <span className="cwee">1,000,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("card_payment_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$75,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawal_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$10,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawals_included")}</p>
                                            <span>{t("then_$2_excl_vat_per_withdrawal")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>10</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_netflix_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_spotify_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("concierge_service_lounge_access")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <p>-</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("compatible_with_apple_pay_google_pay")}</p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={3} className="yuio">
                                <div className="qwrc">
                                    <img src={CardBlack} alt="ncx-card"/>
                                    <p>{t("black_card")}</p>
                                </div>
                                <div className="mjhgf">
                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("price")}</p>
                                            <span>{t("staked_ncxt_required")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>{t("free")}</p>
                                            <span className="cwee">5,000,000 NCXT</span>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("card_payment_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$150,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawal_limits")}</p>
                                            <span>{t("per_calendar_month")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>$20,000</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("cash_withdrawals_included")}</p>
                                            <span>{t("then_$2_excl_vat_per_withdrawal")}</span>
                                        </div>
                                        <div className="tujhg">
                                            <p>{t("unlimited")}</p>
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_netflix_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("free_spotify_subscription")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("concierge_service_lounge_access")}</p>
                                            <InfoIcon />
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>

                                    <div className="ytrew">
                                        <div className="vyth">
                                            <p>{t("compatible_with_apple_pay_google_pay")} </p>
                                        </div>
                                        <div className="tujhg">
                                            <WhiteTick />
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}
export default NCXCardRanges;