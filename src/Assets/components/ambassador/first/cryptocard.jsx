import {React} from "react";
import './first.css';
import Button from "@mui/material/Button";
import CryptoCard1 from '../../../images/crypto_card_1.png';
import CryptoCard2 from '../../../images/crypto_card_2.png';

function FirstVideo()
{
    return(
        <div className="crypto_card">
            <div className="ambassador_card row">
                <div className="col card_txt">
                    <div className="inns-div">
                        <h1>NCX Ambassador</h1>
                        <p>NCX Ambassadors are global promotion partners of NCX, Global Cryptocurrency Exchange.</p>
                        <p>Ambassadors earn a passive income of 40-60% commission on trading fees of their affiliates</p>
                        <div className="bbttn">
                            <Button href="#" className="card_apply">Apply Now</Button>
                            <Button href="#" className="card_learn">Learn More</Button>
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