import React from "react";
import './2.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div className="trad__detiv">
            <div className="container">
                <h1 className="fg__rer">{t("our_most_traded_derivatives")}</h1>
                <div className="row inn__vmm__az">
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/financial-mart_h0lauq.png" alt="ncx" />
                        <h3>{t("financial_market")}</h3>
                        <p>{t("trade_200_stocks_world_indices_&_etfs_across_core_and_emerging_markets")}</p>
                        <strong>{t("spreads_as_low_as_0.5_on_the_us_500")}</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/crypt_deri_grloud.png" alt="ncx" />
                        <h3>{t("Crypto_derivatives")}</h3>
                        <p>{t("go_long_or_short_on_over_150_pairs_take_advantage_of_any_market_conditions")}.</p>
                        <strong>{t("trade_crypto_derivatives_with_up_to_100x_leverage.")}</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/forex-min_bdcyds.png" alt="ncx" />
                        <h3>{t("forex")}</h3>
                        <p>{t("trade_170_foreign_exchange_market_pairs_across_majors_minors_and_exotics")}.</p>
                        <strong>{t("tight_spreads_from_0.1_pips_on_eur/usd")}</strong>
                    </div>
                    <div className="col">
                        <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/metals-min_q2d7oi.png" alt="ncx"/>
                        <h3>{t("metals_&_commodities")}</h3>
                        <p>{t("trade_most_popular_commodities_including_energies_and_metals")}.</p>
                        <strong>{t("spreads_as_low_as_0.04_on_brent_crude.")}</strong>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider className="global__row row">
                            <Slide index={0}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/financial-mart_h0lauq.png" alt="ncx" />
                                    <h3>{t("financial_market")}</h3>
                                    <p>{t("trade_200_stocks_world_indices_&_etfs_across_core_and_emerging_markets")}</p>
                                    <strong>{t("spreads_as_low_as_0.5_on_the_us_500")}</strong>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/crypt_deri_grloud.png" alt="ncx" />
                                    <h3>{t("Crypto_derivatives")}</h3>
                                    <p>{t("go_long_or_short_on_over_150_pairs_take_advantage_of_any_market_conditions")}.</p>
                                    <strong>{t("trade_crypto_derivatives_with_up_to_100x_leverage.")}</strong>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498113/forex-min_bdcyds.png" alt="ncx" />
                                    <h3>{t("forex")}</h3>
                                    <p>{t("trade_170_foreign_exchange_market_pairs_across_majors_minors_and_exotics")}.</p>
                                    <strong>{t("tight_spreads_from_0.1_pips_on_eur/usd")}</strong>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689498114/metals-min_q2d7oi.png" alt="ncx"/>
                                    <h3>{t("metals_&_commodities")}</h3>
                                    <p>{t("trade_most_popular_commodities_including_energies_and_metals")}.</p>
                                    <strong>{t("spreads_as_low_as_0.04_on_brent_crude.")}</strong>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Indices2;