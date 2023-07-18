import React from "react";
import './st.css';
import '../../cardpage/newcardpagedesign/style.css';
import { ReactComponent as WhiteTick } from '../../../images/white-tick.svg';
import { ReactComponent as Mobiletick } from '../../../images/tickvector.svg';
import { ReactComponent as BlankDash } from '../../../images/dashvector.svg';
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
            <h1 className="rnag_gg">{t("ncx_card_range")}</h1>
            <div className="brtgh">
                <div className="vwexx card__hrd container">
                    <div className="qwrc"></div>
                    <div className="qwrc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card4_keteg6.png" alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card5_cmrw2c.png" alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card3_mibabk.png" alt="ncx-card"/>
                    </div>
                    <div className="qwrc">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card2_zcdgg0.png" alt="ncx-card"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card_bt">
                    <div className="vwexx card__bmf">
                        <div className="qwrc"></div>
                        <div className="qwrc">
                            <p>{t("select_card")}</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("gold_card")}</p>
                        </div>
                        <div className="qwrc">
                            <p>{t("plantinum_card")}</p>
                        </div>
                        <div className="qwrc">
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
                            {/* <span><InfoIcon /></span> */}
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
                            {/* <span><InfoIcon /></span> */}
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
                            {/* <span><InfoIcon /></span> */}
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
                            <p>{t("compatible_with_apple_pay_google_pay")}</p>
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

                <div id="home__card_slide" className="card_rnag_mbl">
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
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card4_keteg6.png" alt="ncx-card"/>
                                    <p>{t("select_card")}</p>
                                </div>

                                <div className="mjhgf select__Card__selected">
                                    <div className="qaq__m">
                                        <h3>{t("features")}</h3>
                                        <h3>{t("select")}</h3>
                                        <h3>{t("gold")}</h3>
                                        <h3>{t("platinum")}</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>{t("price")}</h3>
                                            <h3>{t("staked_ncxt_required")}</h3>
                                            <h3>{t("card_payment_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3 className="qws__mk">{t("cash_withdrawal_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3>{t("cash_withdrawals_included")}</h3>
                                            <h3>{t("free_netflix_subscription")}</h3>
                                            <h3>{t("free_spotify_subscription")}</h3>
                                            <h3>{t("airport_lounge_access")}</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>{t("fraud_protection_insurance")}</h3>
                                            <h3>{t("travel_protection_insurance")}</h3>
                                            <h3>{t("purchase_protection_insurance")}</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>{t("free")}</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>{t("free")}</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>{t("free")}</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={1} className="yuio">
                                <div className="qwrc">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card5_cmrw2c.png" alt="ncx-card"/>
                                    <p>{t("gold_card")}</p>
                                </div>
                                <div className="mjhgf gold__Card__selected">
                                    <div className="qaq__m">
                                        <h3>{t("features")}</h3>
                                        <h3>{t("select")}</h3>
                                        <h3>{t("gold")}</h3>
                                        <h3>{t("plantinum")}</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>{t("price")}</h3>
                                            <h3>{t("staked_ncxt_required")}</h3>
                                            <h3>{t("card_payment_limits")}<span>{t("per_calendar_month")}</span></h3>
                                            <h3 className="qws__mk">{t("cash_withdrawal_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3>{t("cash_withdrawals_included")}</h3>
                                            <h3>{t("free_netflix_subscription")}</h3>
                                            <h3>{t("free_spotify_subscription")}</h3>
                                            <h3>{t("airport_lounge_access")}</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>{t("fraud_protection_insurance")}</h3>
                                            <h3>{t("travel_protection_insurance")}</h3>
                                            <h3>{t("purchase_protection_insurance")}</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>{t("free")}</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>{t("free")}</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>{t("free")}</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={2} className="yuio">
                                <div className="qwrc">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card3_mibabk.png" alt="ncx-card"/>
                                    <p>{t("plantinum")}</p>
                                </div>
                                <div className="mjhgf platinum__Card__selected">
                                <div className="qaq__m">
                                        <h3>{t("features")}</h3>
                                        <h3>{t("select")}</h3>
                                        <h3>{t("gold")}</h3>
                                        <h3>{t("plantinum")}</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>{t("price")}</h3>
                                            <h3>{t("staked_ncxt_required")}</h3>
                                            <h3>{t("card_payment_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3 className="qws__mk">{t("cash_withdrawal_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3>{t("cash_withdrawals_included")}</h3>
                                            <h3>{t("free_netflix_subscription")}</h3>
                                            <h3>{t("free_spotify_subscription")}</h3>
                                            <h3>{t("airport_lounge_access")}</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>{t("fraud_protection_insurance")}</h3>
                                            <h3>{t("travel_protection_insurance")}</h3>
                                            <h3>{t("purchase_protection_insurance")}</h3>
                                        </div>
                                        <div className="cc__select">
                                            <h3>{t("free")}</h3>
                                            <h3>100,000 NCXT</h3>
                                            <h3>$15,000</h3>
                                            <h3 className="qws__mk">$2,500</h3>
                                            <h3>0</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>{t("free")}</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>{t("free")}</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={3} className="yuio">
                                <div className="qwrc">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689414941/ncx-card2_zcdgg0.png" alt="ncx-card"/>
                                    <p>{t("black_card")}</p>
                                </div>
                                <div className="mjhgf black__Card__selected">
                                <div className="qaq__m">
                                        <h3>{t("features")}</h3>
                                        <h3>{t("gold")}</h3>
                                        <h3>{t("plantinum")}</h3>
                                        <h3>{t("black")}</h3>
                                    </div>
                                    <div className="sd__mmk">
                                        <div className="bb__ll">
                                            <h3>{t("price")}</h3>
                                            <h3>{t("staked_ncxt_required")}</h3>
                                            <h3>{t("card_payment_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3 className="qws__mk">{t("cash_withdrawal_limits")} <span>{t("per_calendar_month")}</span></h3>
                                            <h3>{t("cash_withdrawals_included")}</h3>
                                            <h3>{t("free_netflix_subscription")}</h3>
                                            <h3>{t("free_spotify_subscription")}</h3>
                                            <h3>{t("airport_lounge_access")}</h3>
                                            <h3>Apple Pay Google Pay</h3>
                                            <h3>{t("fraud_protection_insurance")}</h3>
                                            <h3>{t("travel_protection_insurance")}</h3>
                                            <h3>{t("purchase_protection_insurance")}</h3>
                                        </div>
                                        <div className="cc__gold">
                                            <h3>{t("free")}</h3>
                                            <h3>400,000 NCXT</h3>
                                            <h3>$35,000</h3>
                                            <h3 className="qws__mk">$5,000</h3>
                                            <h3>5</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$800</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__platinum">
                                            <h3>{t("free")}</h3>
                                            <h3>1,000,000 NCXT</h3>
                                            <h3>$75,000</h3>
                                            <h3 className="qws__mk">$10,000</h3>
                                            <h3>10</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$1,000</h3>
                                            <div className="cc__notik">
                                                <BlankDash />
                                            </div>
                                        </div>
                                        <div className="cc__black">
                                            <h3>{t("free")}</h3>
                                            <h3>5,000,000 NCXT</h3>
                                            <h3>$150,000</h3>
                                            <h3 className="qws__mk">$20,000</h3>
                                            <h3>{t("unlimited")}</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
                                            <h3>$2,000</h3>
                                            <div className="cc__notik">
                                                <Mobiletick />
                                            </div>
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