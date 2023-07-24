import React from "react";
import './buy.css';
import Button from "@mui/material/Button";
import { ReactComponent as TrendingGraph } from '../../../images/ncx-trendinggraph.svg';
import { ReactComponent as Ethereum } from '../../../images/ncx-ethereum.svg';
import { ReactComponent as Bitcoin } from '../../../images/ncx-bitcoin.svg';
import { ReactComponent as BinanceCoinBNB } from '../../../images/ncx-binancecoinbnb.svg';
import { ReactComponent as ChangeValue } from '../../../images/cryptochange.svg';
import { ReactComponent as RewardStar } from '../../../images/ncx-reward-star.svg';
import { useTranslation } from "react-i18next";


function BuyCrypto(){

    const { t } = useTranslation();

    return(
       <div className="buycrypto-page">
            <div className="reward-row">
                <div className="container">
                    <div className="rewardheadrow">
                        <p className="complete-tsks">{t("buy_crypto_earn_ncxt")}</p>
                        <div className="reward-center">
                            <p><a href="/rewards">{t("visit_rewards_center")}</a></p>
                            <p className="star-res"><RewardStar />{t("ncx_rewards")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new__ambass">
                <div className="container ml__vwxf">
                    <div className="insse">
                        <h1>{t("by_crypto_text")}</h1>
                        <Button href="#buy_crypto">{t("buy_crypto")}</Button>
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

            <div id="mbl_cr__sd" className="container990">
                <div className="buycrypt-row">
                    <div className="col coinsect">
                        <div className="inner__cc">
                            <h1>{t("buy_sell_crypto_instantly")}</h1>
                            <p>{t("buy_sell_crypto_instantly_text")}</p>
                        </div>
                    </div>
                    <div className="col buysell-sect">
                        <div id="ncxbuycrypto-desk">
                            <div className="desktop">
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
                </div>
            </div>
       </div>
    )
}

export default BuyCrypto;