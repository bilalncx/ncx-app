import React from "react";
import './first.css';
import Timer from "../../ncxToken/countdown/TimeStart";
import RoundSlider from '../../ncxToken/round_slider/round';
import NewTimer from '../../ncxToken//countdown/Minutes';
import { ReactComponent as HowWork } from '../../../images/how-it-work.svg';
import { ReactComponent as WhyBuyToken } from '../../../images/why-buy-token.svg';
import { Telegram } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function FirstSect()
{

    const { t } = useTranslation();

    return(
        <div className="ncx_token_aa">
            <div id="ncxtokenVieo">
                <video 
                    id='token_video'
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="https://ncx.cx/images/Token_bg.jpeg"
                    >
                    <source src="https://ncx.cx/images/ncx-token-video-2.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="token_first_sect">
                <div className="container">
                    <div className="row txxss">
                        <div className="col txt112">
                            <h1>{t("next_token_powering_world_first_hybrid_cex_dex_trading_platform_defi_ecosystem")}</h1>
                            <div className="btnss">
                                <a href="#" className="token_signin">{t("token_dashboard_sign_in")}</a>
                                <a href="#" className="claim_airdrop">{t("claim_airdrop")}</a>
                            </div>
                            <p>{t("sign_up_today_and_get_4000_ncx_tokens_airdrop")}</p>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row slider_countdown">
                        <div className="col">
                            <RoundSlider />
                        </div>
                        <div className="col time_contribute">
                            <div className="bonus_col">
                                <p>{t("current_bonus")}</p>
                                <h1>5-25%</h1>
                                <p className="contributors">{t("contributor_can_receive")}</p>
                            </div>
                            {/* <Timer /> */}
                            <NewTimer />
                        </div>
                    </div>
                    <div className="how_and_why22">
                        <div className="ds22">
                            <div className="work">
                                <a href="#"><HowWork /></a>
                                <a href="#"><p>{t("how_it_work")}</p></a>
                            </div>
                            <div className="work">
                                <a href="#"><WhyBuyToken /></a>
                                <a href="#"><p>{t("why_buy_tokens_now")}</p></a>
                            </div>
                        </div>
                        <div className="social-col">
                            <a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
                            <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><Telegram /></a>
                            <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSect;