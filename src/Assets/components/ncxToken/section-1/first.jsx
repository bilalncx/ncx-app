import React from "react";
import './first.css';
import Timer from "../../ncxToken/countdown/TimeStart";
import RoundSlider from '../../ncxToken/round_slider/round';
import { ReactComponent as HowWork } from '../../../images/how-it-work.svg';
import { ReactComponent as WhyBuyToken } from '../../../images/why-buy-token.svg';
import { Telegram } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function FirstSect()
{
    const lngs = [
        { code: "en", native: "English" },
        { code: "esp", native: "Español" },
    ];

    const { t, i18n } = useTranslation();
  
    const handleTrans = (code) => {
      i18n.changeLanguage(code);
    };


    return(
        <div className="token_first_sect">
            <div className="container">
                <div className="row txxss">
                    <div className="col txt112">
                        <h1>{t("next_token_powering_world_first_hybrid_cex_dex_trading_platform_defi_ecosystem")}</h1>
                        <div className="btnss">
                            <a href="#" className="token_signin">{t("token_dashboard_sign_in")}</a>
                            <a href="#" className="claim_airdrop">{t("claim_airdrop")}</a>
                        </div>
                        <p>{t("sign_up_today_and_get")}</p>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row slider_countdown">
                    <div className="col">
                        <RoundSlider />
                    </div>
                    <div className="col time_contribute">
                        <div className="bonus_col">
                            <p>Current Bonus</p>
                            <h1>5-25%</h1>
                            <p className="contributors">Contributors can Receive</p>
                        </div>
                        <Timer />
                    </div>
                </div>
                <div className="how_and_why22">
                    <div className="ds22">
                        <div className="work">
                            <a href="#"><HowWork /></a>
                            <a><p>How it works</p></a>
                        </div>
                        <div className="work">
                            <a href="#"><WhyBuyToken /></a>
                            <a href="#"><p>Why buy Tokens now?</p></a>
                        </div>
                    </div>
                    <div className="social-col">
                        <a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><Instagram /></a>
                        <a href="#"><Telegram /></a>
                        <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><Twitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSect;