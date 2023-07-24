import {React} from "react";
import './new.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div id="mkt__mkr__ndd">
            <div className="new__ambass">
                <div className="container ml__vwxf">
                    <div className="insse">
                        <h1>{t("ncx_market_maker_program_for_professional_volume_trading_equities")}</h1>
                        <Button href="mailto: support@ncx.cx">{t("apply")}</Button>
                    </div>
                    <div className="fvsd__v">
                        <video 
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            >
                            <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div id="mobileSlider">
                <div className="mark__makr__video">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        >
                        <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("ncx_marekt_maker")}</h1>
                        <p>Professional entities who trade with API services and reach a monthly trading volume of 5,000,000 USD in spot/derivatives markets are welcome to apply and become NCX Market Maker.</p>
                        {/* <div className="bbttn">
                            <Button href="#" className="card_apply">{t("apply_now")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FirstVideo;