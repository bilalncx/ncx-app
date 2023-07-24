import {React} from "react";
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";



function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div className="crypto_card">
            <div className="new__ambass">
                <div className="container ml__vwxf">
                    <div className="insse">
                        <h1>{t("about_ncx_hybrid_cex_dex_ecosystem")}</h1>
                        <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer">{t("sign_up")}</Button>
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
                <video 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    >
                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1690184914/ncx-derivatives_1_jlfpwu.mp4" type="video/mp4" />
                </video>
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("about_us")}</h1>
                        <p>{t("about_us_text")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FirstVideo;