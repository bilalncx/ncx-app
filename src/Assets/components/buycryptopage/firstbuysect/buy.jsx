import React from "react";
import './buy.css';
import { ReactComponent as TrendingGraph } from '../../../images/ncx-trendinggraph.svg';
import { ReactComponent as Ethereum } from '../../../images/ncx-ethereum.svg';
import { ReactComponent as Bitcoin } from '../../../images/ncx-bitcoin.svg';
import { ReactComponent as BinanceCoinBNB } from '../../../images/ncx-binancecoinbnb.svg';
import { ReactComponent as ChangeValue } from '../../../images/cryptochange.svg';
import BuyCrypotVideo from '../../../images/ncxbuy-cryptovideo.mp4';
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
                            <p><a href="https://ncx.cx/task-rewards">{t("visit_rewards_center")}</a></p>
                            <p className="star-res"><RewardStar />{t("ncx_rewards")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container990">
                <div className="buycrypt-row">
                    <div className="col coinsect">
                        <h1>{t("buy_sell_crypto_instantly")}</h1>
                        <p>{t("buy_sell_crypto_instantly_text")}</p>
                        <div className="crypto-assets row">
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <Bitcoin />
                                    <TrendingGraph />
                                </div>
                                <h1>Bitcoin</h1>
                                <p>24,565.91 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    3.46%</p>
                            </div>
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <Ethereum />
                                    <TrendingGraph />
                                </div>
                                <h1>Ethereum</h1>
                                <p>1,693.26 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    1.90%</p>
                            </div>
                            <div className="col coin-details">
                                <div className="coin-graph">
                                    <BinanceCoinBNB />
                                    <TrendingGraph />
                                </div>
                                <h1>BNB</h1>
                                <p>316.04 USD</p>
                                <p className="change">
                                    <ChangeValue />
                                    2.09%</p>
                            </div>
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
                                    poster="https://ncx.cx/images/ncx_buycrypto_poster.png"
                                    >
                                    <source src={BuyCrypotVideo} type="video/mp4" />
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