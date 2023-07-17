// import  React from "react";
// import './style.css';
// import {ReactComponent as NCXTickmark } from '../../../images/check.svg';
// import { ReactComponent as TokenTick } from '../../../images/check.svg';
// import {ReactComponent as NCXTokenIcon} from '../../../images/token_icon.svg';
// import { ReactComponent as NCXTokenLogo } from '../../../images/token-footerlogo.svg';
// import { useTranslation } from "react-i18next";

// function HomeNCXToken()
// {
//     const { t } = useTranslation();

//     return(
//         <div id="presale_ncxT">
//             <video
//                 id="NCX_Token_mobile"
//                     autoPlay={true}
//                     muted={true}
//                     loop={true}
//                     playsInline={true}
//                     preload="auto"
//                     poster="https://ncx.cx/images/ncx_line_poster.png"
//                     >
//                     <source src="https://ncx.cx/images/ncx-token-mblvideo.mp4" type="video/mp4" />
//                 </video>
//             <div className="container">
//                 <div className="stake_ncx">
//                     <NCXTokenLogo />
//                     <h1>{t("token")} <span>{t("private_sale")}</span></h1>
//                 </div>
//                 <div className="tokentable-stake">
//                     <div className="tokenhead-stake">
//                         <p className="q1">{t("private_sale_round")}</p>
//                         <p className="q1">{t("ncx_token_price_in_USDT")}</p>
//                         <p className="q1">{t("lockup_period")}</p>
//                         <p className="q1">{t("after_lockup_period_ends")}</p>
//                         <p className="q1">{t("receiving_trading_fee_discounts_during_the_vesting_period")}</p>
//                         <p className="q1">{t("receive_staking_rewards_during_the_vesting_period")}</p>
//                         <p className="q1">{t("receive_staking_rewards_during_the_vesting_period")}</p>
//                     </div>
//                     <div className="tokencolum-stake">
//                         <div className="colstake">
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_1")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_2")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_3")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_4")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_5")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_6")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_7")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("public_sale")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("listing_price")}</p>
//                             </div>
//                         </div>
//                         <div className="colstake">
//                             <p>$0.0004</p>
//                             <p>$0.0006</p>
//                             <p>$0.0008</p>
//                             <p>$0.0011</p>
//                             <p>$0.0015</p>
//                             <p>$0.002</p>
//                             <p>$0.003</p>
//                             <p>$0.004</p>
//                             <p>$0.008</p>
//                         </div>
//                         <div className="colstake">
//                             <p>{t("9_months")}</p>
//                             <p>{t("6_months")}</p>
//                             <p>{t("5_months")}</p>
//                             <p>{t("4_months")}</p>
//                             <p>{t("3_months")}</p>
//                             <p>{t("2_months")}</p>
//                             <p>{t("30_days")}</p>
//                             <p>{t("unlocked")}</p>
//                         </div>
//                         <div className="colstake">
//                             <p>{t("10%_monthly_release")}</p>
//                             <p>{t("10%_monthly_release")}</p>
//                             <p>{t("20%_monthly_release")}</p>
//                             <p>{t("20%_monthly_release")}</p>
//                             <p>{t("25%_monthly_release")}</p>
//                             <p>{t("25%_monthly_release")}</p>
//                             <p>{t("25%_monthly_release")}</p>
//                             <p>{t("25%_monthly_release")}</p>
//                         </div>
//                         <div className="colstake">
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                         </div>
//                         <div className="colstake">
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                         </div>
//                         <div className="colstake">
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                             <p className="checkmark"><NCXTickmark /></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mobile-tokentable">
//                     <div className="mbl-tokrow">
//                         <h3>{t("private_sale_round")}</h3>
//                         <div className="mbl-tokrowitems">
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_1")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_2")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_3")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_4")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_5")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_6")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("round_7")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("public_sale")}</p>
//                             </div>
//                             <div className="color">
//                                 <NCXTokenIcon />
//                                 <p>{t("listing_price")}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow">
//                         <h3>{t("ncx_token_price_in_USDT")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color">
//                                 <p>$0.0004</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.0006</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.0008</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.0011</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.0015</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.002</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.003</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.004</p>
//                             </div>
//                             <div className="color">
//                                 <p>$0.008</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow">
//                         <h3>{t("lockup_period")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color">
//                                 <p>{t("9_months")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("6_months")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("5_months")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("4_months")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("3_months")}</p>

//                             </div>
//                             <div className="color">
//                                 <p>{t("2_months")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("30_days")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("unlocked")}</p>
//                             </div>
//                             <div className="color mbl-hid">
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow">
//                         <h3>{t("after_lockup_period_ends")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color">
//                                 <p>{t("10%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("10%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("20%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("20%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("25%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("25%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("25%_monthly_release")}</p>
//                             </div>
//                             <div className="color">
//                                 <p>{t("25%_monthly_release")}</p>
//                             </div>
//                             <div className="color mbl-hid">
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow derivative">
//                         <h3>{t("receiving_trading_fee_discounts_during_the_vesting_period")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color mbl-hid"></div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow">
//                         <h3>{t("receive_staking_rewards_during_the_vesting_period")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color mbl-hid"></div>
//                         </div>
//                     </div>
//                     <div className="mbl-tokrow">
//                         <h3>{t("receive_staking_rewards_during_the_vesting_period")}</h3>
//                         <div className="mbl-tokrowitems sd2">
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color inactive"></div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color">
//                                 <p><TokenTick /></p>
//                             </div>
//                             <div className="color mbl-hid"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default HomeNCXToken;





import  React from "react";
import './style.css';
import {ReactComponent as NCXTickmark } from '../../../images/check.svg';
import { ReactComponent as TokenTick } from '../../../images/check.svg';
import {ReactComponent as NCXTokenIcon} from '../../../images/token_icon.svg';
import {ReactComponent as LockedNCX} from '../../../images/locked.svg';
import { ReactComponent as NCXTokenLogo } from '../../../images/token-footerlogo.svg';
import { useTranslation } from "react-i18next";

function HomeNCXToken()
{
    const { t } = useTranslation();

    return(
        <div id="presale_ncxT" className="ncx__vewd">
            <video
                id="NCX_Token_mobile"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="https://ncx.cx/images/ncx_line_poster.png"
                    >
                    <source src="https://ncx.cx/images/ncx-token-mblvideo.mp4" type="video/mp4" />
                </video>
            <div className="container">
                <div className="stake_ncx">
                    <NCXTokenLogo />
                    <h1>{t("token")} <span>{t("private_sale")}</span></h1>
                </div>
                <div className="tokentable-stake">
                    <div className="tokenhead-stake">
                        <p className="q1">{t("private_sale_round")}</p>
                        <p className="q1">{t("ncx_token_price_in_USDT")}</p>
                        <p className="q1">{t("lockup_period")}</p>
                        <p className="q1">{t("after_lockup_period_ends")}</p>
                        <p className="q1">Receive Trading Fee Rebates during the Vesting Period</p>
                        <p className="q1">Receive Staking Rewards during the Vesting Period</p>
                    </div>
                    <div className="tokencolum-stake">
                        <div className="colstake">
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_1")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_2")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_3")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_4")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("public_sale")}</p>
                            </div>
                            <div className="color">
                                <LockedNCX />
                                <p>{t("listing_price")}</p>
                            </div>
                        </div>
                        <div className="colstake">
                            <p>$0.002</p>
                            <p>$0.004</p>
                            <p>$0.007</p>
                            <p>$0.01</p>
                            <p>$0.02</p>
                            <p>$0.04</p>
                        </div>
                        <div className="colstake">
                            <p>{t("9_months")}</p>
                            <p>{t("6_months")}</p>
                            <p>{t("3_months")}</p>
                            <p>{t("30_days")}</p>
                            <p>25% {t("unlocked")}</p>
                        </div>
                        <div className="colstake">
                            <p>15% Monthly Release</p>
                            <p>{t("20%_monthly_release")}</p>
                            <p>{t("25%_monthly_release")}</p>
                            <p>{t("25%_monthly_release")}</p>
                            <p>{t("25%_monthly_release")}</p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                        <div className="colstake">
                            <p></p>
                            <p></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                            <p className="checkmark"><NCXTickmark /></p>
                        </div>
                    </div>
                </div>
                <div className="mobile-tokentable">
                    <div className="mbl-tokrow">
                        <h3>{t("private_sale_round")}</h3>
                        <div className="mbl-tokrowitems vsdc">
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_1")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_2")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_3")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("round_4")}</p>
                            </div>
                            <div className="color">
                                <NCXTokenIcon />
                                <p>{t("public_sale")}</p>
                            </div>
                            <div className="color">
                                <LockedNCX />
                                <p>{t("listing_price")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("ncx_token_price_in_USDT")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>$0.002</p>
                            </div>
                            <div className="color">
                                <p>$0.004</p>
                            </div>
                            <div className="color">
                                <p>$0.007</p>
                            </div>
                            <div className="color">
                                <p>$0.01</p>
                            </div>
                            <div className="color">
                                <p>$0.02</p>
                            </div>
                            <div className="color">
                                <p>$0.04</p>
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("lockup_period")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>{t("9_months")}</p>
                            </div>
                            <div className="color">
                                <p>{t("6_months")}</p>
                            </div>
                            <div className="color">
                                <p>{t("3_months")}</p>
                            </div>
                            <div className="color">
                                <p>{t("30_days")}</p>
                            </div>
                            <div className="color">
                                <p>{t("unlocked")}</p>
                            </div>
                            <div className="color mbl-hid">
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("after_lockup_period_ends")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color">
                                <p>15% Monthly Release</p>
                            </div>
                            <div className="color">
                                <p>{t("20%_monthly_release")}</p>
                            </div>
                            <div className="color">
                                <p>{t("25%_monthly_release")}</p>
                            </div>
                            <div className="color">
                                <p>{t("25%_monthly_release")}</p>
                            </div>
                            <div className="color">
                                <p>{t("25%_monthly_release")}</p>
                            </div>
                            <div className="color mbl-hid">
                            </div>
                        </div>
                    </div>
                    <div className="mbl-tokrow derivative">
                        <h3>{t("receiving_trading_fee_discounts_during_the_vesting_period")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color mbl-hid"></div>
                        </div>
                    </div>
                    <div className="mbl-tokrow">
                        <h3>{t("receive_staking_rewards_during_the_vesting_period")}</h3>
                        <div className="mbl-tokrowitems sd2">
                            <div className="color inactive"></div>
                            <div className="color inactive"></div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color">
                                <p><TokenTick /></p>
                            </div>
                            <div className="color mbl-hid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;