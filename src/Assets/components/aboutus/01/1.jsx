import {React} from "react";
import '../../ambassador/first/first.css';
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/crypto_card_1.png';
import CryptoCard2 from '../../../images/ncx-derivatives-trading.png';
import { useTranslation } from "react-i18next";

function FirstVideo()
{
    const { t } = useTranslation();

    return(
        <div className="crypto_card">
            <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>{t("about_us")}</h1>
                        <p>{t("about_us_text")}</p>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">{t("sign_up")}</Button>
                            <Button href="#" className="card_learn">{t("learn_more")}</Button>
                        </div>
                    </div>
                </div>
                <div className="col card_imga">
                    <img src={CryptoCard2} alt="ncx_crypto_card" />
                </div>
                <div className="col card_imgb">
                    <img src={CryptoCard1} alt="ncx_crypto_card" />
                </div>
            </div>
        </div>
    )
}
export default FirstVideo;