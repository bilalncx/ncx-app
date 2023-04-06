import React from "react";
import './second.css';
import Button from "@mui/material/Button";
import { ReactComponent as Silver} from '../../../images/ncx-silverrank.svg';
import GoldRank from '../../../images/ncx-goldrank.svg';
import DiamondRank from '../../../images/ncx-diamondrank.svg';
import { useTranslation } from "react-i18next";

function ReferralPrivilleges()
{

    const { t } = useTranslation();

    return(
        <div className="referral_privilleges">
            <div className="container">
                <h1>{t("referral_privilleges")}</h1>
                <p>{t("referral_privilleges_text")}</p>
                <div className="rank_table">
                    <div className="tab_head_row">
                        <div className="col">
                            <p>{t("ranking")}</p>
                        </div>
                        <div className="col">
                            <p>{t("trading_volume_referred")}<span>{t("last_month")}</span></p>
                        </div>
                        <div className="col">
                            <p>{t("and_or")}</p>
                        </div>
                        <div className="col">
                            <p>{t("total_referred-traders")}</p>
                        </div>
                        <div className="col">
                            <p>{t("referral_usdt")}</p>
                        </div>
                    </div>
                    <div className="silver_row">
                        <div className="col logo_text">
                            <Silver />
                            <h3>{t("silver")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("silver_val_1")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("or")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("silver_val_2")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("silver_val_3")}</h3>
                        </div>
                    </div>
                    <div className="gold_row">
                        <div className="col logo_text">
                            <img src={GoldRank} alt="NCX Gold Rank" />
                            <h3>{t("gold")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("gold_val_1")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("and")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("gold_val_2")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("gold_val_3")}</h3>
                        </div>
                    </div>
                    <div className="diamond_row">
                        <div className="col logo_text">
                            <img src={DiamondRank} alt="NCX Diamond Rank" />
                            <h3>{t("diamond")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("diamond_val_1")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("and")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("diamond_val_2")}</h3>
                        </div>
                        <div className="col">
                            <h3>{t("diamond_val_3")}</h3>
                        </div>
                    </div>
                </div>
                <div className="table_text">
                    <h3>{t("notes")}</h3>
                    <p>{t("note_1")}</p>
                    <p>{t("note_2")}</p>
                    <p>{t("note_3")}</p>
                </div>

                <div className="become_ambassador">
                    <h2>{t("become_ncx_ambassador_average_monthly")}</h2>
                    <h2>{t("referral_commissions_reaches")}</h2>
                </div>
                <h1 className="referral_bonus">{t("referral_bonus")} <span>{t("referral_bonus_currency")}</span></h1>
                <Button className="referral_applynow" href="mailto:support@ncx.cx">{t("apply_now")}</Button>

                <div className="requirements_sect">
                    <h2 className="require">{t("requirements")}</h2>
                    <p>{t("requirement_text")}</p>
                    <div className="requirement_table">
                        <div className="require_row">
                            <div className="col">
                                <h3>{t("requirement_1")}</h3>
                            </div>
                            <div className="col">
                                <p>{t("requirement_text_1")}</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>{t("requirement_2")}</h3>
                            </div>
                            <div className="col">
                                <p>{t("requirement_text_2")}</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>{t("requirement_3")}</h3>
                            </div>
                            <div className="col">
                                <p>{t("requirement_text_3")}</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>{t("requirement_4")}</h3>
                            </div>
                            <div className="col">
                                <p>{t("requirement_text_4")}</p>
                            </div>
                        </div>
                        <div className="require_row colo_bord">
                            <div className="col">
                                <h3>{t("requirement_5")}</h3>
                            </div>
                            <div className="col">
                                <p>{t("requirement_text_5")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReferralPrivilleges;