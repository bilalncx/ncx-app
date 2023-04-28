import React from "react";
import './2.css';
import { useTranslation } from "react-i18next";

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div className="trade__derivative">
            <div className="container">
                <h1 className="fg__rer">{t("our_most_traded_derivatives")}</h1>
                <div className="row most_deri">
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="pp__oo">S</h3>
                            <h1>{t("stocks_indices_&_etfs")}</h1>
                        </div>
                        <p className="llp_dd">{t("trade_200_stocks_world_indices_&_etfs_across_core_and_emerging_markets")}</p>
                        <p className="io_od"><strong>{t("spreads_as_low_as_0.5_on_the_us_500")}</strong></p>
                        <p className="mbl__stng"><strong>{t("stake_ncxt")}</strong> {t("and_get_trading_fees_rebates_of")} <strong>{t("up_to_90%")}</strong></p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="oo__ii">C</h3>
                            <h1>{t("Crypto_derivatives")}</h1>
                        </div>
                        <p className="llp_dd">{t("go_long_or_short_on_over_150_pairs_take_advantage_of_any_market_conditions")}</p>
                        <p className="io_od"><strong>{t("trade_crypto_derivatives_with_up_to_100x_leverage.")}</strong></p>
                        <p className="mbl__stng"><strong>{t("stake_ncxt")}</strong> {t("and_get_trading_fees_rebates_of")} <strong>{t("up_to_90%")}</strong></p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tnn__we">F</h3>
                            <h1>{t("forex")}</h1>
                        </div>
                        <p className="llp_dd">{t("trade_170_foreign_exchange_market_pairs_across_majors_minors_and_exotics")}</p>
                        <p className="io_od"><strong>{t("tight_spreads_from_0.1_pips_on_eur/usd")}</strong></p>
                        <p className="mbl__stng"><strong>{t("stake_ncxt")}</strong> {t("and_get_trading_fees_rebates_of")} <strong>{t("up_to_90%")}</strong></p>
                    </div>
                    <div className="col">
                        <div className="logo__ff">
                            <h3 className="tt__ff">M</h3>
                            <h1>{t("metals_&_commodities")}</h1>
                        </div>
                        <p className="llp_dd">{t("trade_most_popular_commodities_including_energies_and_metals")}</p>
                        <p className="io_od"><strong>{t("spreads_as_low_as_0.04_on_brent_crude.")}</strong></p>
                        <p className="mbl__stng"><strong>{t("stake_ncxt")}</strong> {t("and_get_trading_fees_rebates_of")} <strong>{t("up_to_90%")}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices2;