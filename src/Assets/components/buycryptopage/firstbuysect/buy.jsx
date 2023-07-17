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
                <div className="desktop">
                    <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                        >
                        <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689417010/home__newvideo_tan229.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="insse">
                        <h1>{t("by_crypto_text")}</h1>
                        <Button href="#buy_crypto">{t("buy_crypto")}</Button>
                    </div>
                </div>
            </div>
            {/* <div id="dek__top" className="container990">
                <div className="buycrypt-row">
                    <div className="col coinsect">
                        <div className="inner__cc">
                            <h1>Buy Crypto with card <span>Instantly</span></h1>
                            <p>Buy Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer. Simply enter the currency & amount and chose among the available payment methods, the best available rate is displayed by default, you can easily switch between providers and payment methods and chose the one right for you.</p>
                            <div className="buy__bsx">
                                <a className="b__y" href="#buy_crypto">Buy Crypto</a>
                                <a className="mrkt" href="/markets">Markets</a>
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
                                    >
                                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689417720/buy_page_hnysad.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

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
                                    poster="https://ncx.cx/images/ncx_buycrypto_poster.png"
                                    >
                                    <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689416505/ncxbuy-cryptovideo_vyecpg.mp4" type="video/mp4" />
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