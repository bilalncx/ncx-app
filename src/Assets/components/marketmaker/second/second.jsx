import { React, useState} from "react";
import './second.css';
import { useTranslation } from "react-i18next";

function MarketMakerDiscountSection()
{

    const { t } = useTranslation();

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="market-discount">
            <div className="container">
                <h1>{t("market_maker")} <span>{t("fees_discount")}</span></h1>
                <div className="market-tabs-btn">
                    <button
                        className={toggleState === 1 ? "market-tabs active" : "market-tabs"}
                        onClick={() => toggleTab(1)}
                    >
                    {t("spot_maker_fees_discount")}
                    </button>
                    <button
                        className={toggleState === 2 ? "market-tabs active" : "market-tabs"}
                        onClick={() => toggleTab(2)}
                    >
                    {t("future_market_maker")}
                    </button>
                </div>
                <div className="market-content-tabs">
                    <div id="market-1" className={toggleState === 1 ? "market-content active" : "market-content"}>
                        <div className="hsd11">
                            <h3>{t("normal_market_fee_rate")}</h3>
                        </div>
                        <p>{t("requirement_of_ranking")} <span>{t("requirement_of_ranking_text")}</span></p>
                        <div className="discount_table">
                            <div className="head_table">
                                <div className="col"><p>{t("level")}</p></div>
                                <div className="col"><p>{t("ranking")}</p></div>
                                <div className="col"><p>{t("maker")}</p></div>
                                <div className="col"><p><span>NCXT</span>{t("maker")}</p></div>
                                <div className="col"><p>{t("taker")}</p></div>
                                <div className="col"><p><span>NCXT</span>{t("maker")}</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV5</p></div>
                                <div className="col"><p>≤10%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV4</p></div>
                                <div className="col"><p>≤25%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV3</p></div>
                                <div className="col"><p>≤45%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV2</p></div>
                                <div className="col"><p>≤70%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV1</p></div>
                                <div className="col"><p>{t("last_30_%")}</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row boder-color">
                                <div className="col"><p>LV0</p></div>
                                <div className="col"><p>/</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                        </div>
                        <div className="fees_details">
                            <h4>{t("fees_level_details")}</h4>
                            <p>{t("fees_detail_1")}</p>
                            <p>{t("fees_detail_2")}</p>
                            <p>{t("fees_detail_3")}</p>
                        </div>
                        <div className="hsd13">
                            <h3>{t("normal_market_fee_rate")}</h3>
                            <p>{t("normal_market_fee_rate_text")}</p>
                        </div>
                        <div className="amm_markettable">
                            <div className="amm_head">
                                <div className="col"><p>{t("user_type")}</p></div>
                                <div className="col"><p>{t("normal_aam_market_fee_rate")}</p></div>
                                <div className="col"><p>{t("stable_aam_market_fee_rate")}</p></div>
                            </div>
                            <div className="amm_body_row">
                                <div className="col"><p>{t("ncx_user")}</p></div>
                                <div className="col"><p>0.30%</p></div>
                                <div className="col"><p>0.10%</p></div>
                            </div>
                            <div className="amm_body_row">
                                <div className="col"><p>{t("market_makers")}</p></div>
                                <div className="col"><p>0.15%</p></div>
                                <div className="col"><p>0.05%</p></div>
                            </div>
                        </div>
                    </div>
                    <div id="market-1" className={toggleState === 2 ? "market-content active" : "market-content"}>
                    <div className="hsd11">
                            <h3>{t("market_makers")}</h3>
                            {/* <p>207</p> */}
                        </div>
                        <p>{t("requirement_of_ranking")} <span>{t("trading_volume")}</span></p>
                        <div className="discount_table">
                            <div className="head_table">
                                <div className="col"><p>{t("level")}</p></div>
                                <div className="col"><p>{t("ranking")}</p></div>
                                <div className="col"><p>{t("maker")}</p></div>
                                <div className="col"><p>{t("taker")}</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV5</p></div>
                                <div className="col"><p>≤10%</p></div>
                                <div className="col"><p>-0.0150%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV4</p></div>
                                <div className="col"><p>≤25%</p></div>
                                <div className="col"><p>-0.0100%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV3</p></div>
                                <div className="col"><p>≤45%</p></div>
                                <div className="col"><p>-0.0050%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV2</p></div>
                                <div className="col"><p>≤70%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV1</p></div>
                                <div className="col"><p>{t("last_30_%")}</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0300%</p></div>
                            </div>
                            <div className="table_body_row boder-color">
                                <div className="col"><p>LV0</p></div>
                                <div className="col"><p>/</p></div>
                                <div className="col"><p>0.0300%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                            </div>
                        </div>
                        <div className="fees_details">
                            <h4>{t("fees_level_details")}</h4>
                            <p>{t("fees_detail_1")}</p>
                            <p>{t("fees_detail_2")}</p>
                            <p>{t("fees_detail_3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MarketMakerDiscountSection;