import {React, useState} from "react";
import './tasks.css';
import Button from "@mui/material/Button";
import {ReactComponent as NCXStar} from '../../../images/ncx-taskstar.svg';
import {ReactComponent as NCXQuestionmark} from '../../../images/ncx-questionmark.svg';
import {ReactComponent as BtnSVGIcon } from '../../../images/ncx-trend-red-icon.svg';
import { useTranslation } from "react-i18next";

function NCXTaskSection()
{
    const { t } = useTranslation();

    const [toggle, setToggle] = useState(false);

    return(
        <div className="ncxtasksection">
            <div className="container">
                <h1>{t("complete_tasks_earn_ncx_tokens_and_your_crypto_ascent")}</h1>
                <p className="task">
                    <NCXStar />
                    {t("tasks")}
                </p>
                <div className="tasksrow">
                    <div className="col">
                        <div className="tasktext signup">
                            <h1>2,000<span>NCXT</span></h1>
                            <h3>{t("sign_up_verify")}</h3>
                            <p>{t("new_user_must_complete_at_least_one_purchase")}</p>
                            <div className="taskbtn">
                                <Button href="/rewards">{t("start_task")}</Button>
                                <NCXQuestionmark />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext popop">
                            <h1>500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("refer_a_friend")}</h3>
                                    <p>{t("referred_user_must_complete_at_least_one_purchase_transaction")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>150<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("spot_trading_volume")} $5,000+</h3>
                                    <p>{t("new_user_only")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>250<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("derivatives_trading_volume")} $5,000+</h3>
                                    <p>{t("new_user_only")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext signup mobilpopop">
                            <h1>2,000<span>NCXT</span></h1>
                            <div className="yefgg">
                                <h3>{t("sign_up_verify")}</h3>
                                <p>{t("new_user_must_complete_at_least_one_purchase")}</p>
                                <div className="taskbtn">
                                    <Button href="/rewards">{t("start_task")}</Button>
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("refer_a_friend")}</h3>
                                    <p>{t("referred_user_must_complete_at_least_one_purchase_transaction")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>150<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("spot_trading_volume")} $5,000+</h3>
                                    <p>{t("new_user_only")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>250<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>{t("derivatives_trading_volume")} $5,000+</h3>
                                    <p>{t("new_user_only")}</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {toggle && (
                <div className="tasks-hidediv">
                    <div className="tasksrow">
                        <div className="col">
                            <div className="tasktext">
                                <h1>500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $10,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>750<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $10,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>1,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $25,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>1,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $25,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $10,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>750<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $10,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>1,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $25,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>1,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $25,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow">
                        <div className="col">
                            <div className="tasktext">
                                <h1>2,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $50,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>2,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $50,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>3,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $100,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>4,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $100,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>2,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $50,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>2,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $50,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>3,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $100,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>4,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $100,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow">
                        <div className="col">
                            <div className="tasktext">
                                <h1>5,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $200,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>7,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $250,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>8,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $400,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>12,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $500,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>5,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $200,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>7,500<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $250,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasksrow mobile">
                        <div className="col">
                            <div className="tasktext">
                                <h1>8,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("spot_trading_volume")} $400,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="tasktext">
                                <h1>12,000<span>NCXT</span></h1>
                                <div className="tasktext-div">
                                    <div className="col">
                                        <h3>{t("derivatives_trading_volume")} $500,000+</h3>
                                        <p>{t("new_user_only")}</p>
                                    </div>
                                    <div className="col">
                                        <NCXQuestionmark />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                <button 
                    onClick={() => setToggle(!toggle)} 
                    class="btn btn-primary mb-5">
                    {toggle ? "Show Less Tasks" : "Show More Tasks"}
                    <BtnSVGIcon className={toggle ? "turn" : "straight"} />
                </button>
            </div>
        </div>
    )
}

export default NCXTaskSection;