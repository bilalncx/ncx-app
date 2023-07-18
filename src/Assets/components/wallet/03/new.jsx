import React from "react";
import Button from "@mui/material/Button";
import {ReactComponent as Walletbadge} from '../../../images/wallet_badge.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';
import { useTranslation } from "react-i18next";

function Indices5()
{
    const { t } = useTranslation();
    return(
        <div id="Wallet_Main" className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_multi_chain_defi_wallet")}</h1>
                <div className="plat__ggre row one">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("store")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("store_text")}</p>
                        <p>Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora, xDai, Harmony, Heco, OKEx Chain.</p>
                        <div className="tiy__bd">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="download">{t("sign_up")}</Button>
                            <Button href="#" className="sign__up">{t("claim_airdrop")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415544/s-store_j1okjo.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("swap")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("swap_text_1")}</p>
                        <p><span>{t("swap_text_2")}</span><span>{t("swap_text_3")}</span></p>
                        <div className="tiy__bd">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="download">{t("sign_up")}</Button>
                            <Button href="#" className="sign__up">{t("claim_airdrop")}</Button>
                        </div>
                        <div className="pla__img gf__grthbh">
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-swap_bslube.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row two">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("send")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("send_text_1")}</p>
                        <p>{t("send_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src='"https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689419619/device_4_yoprds.png" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl_o7zqgs.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("receive")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("receive_text_1")}</p>
                        <p>{t("receive_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418806/device_2_uf6ofq.png" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-receive_tfag00.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row three">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NFT</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("nft_text_1")}</p>
                        <p>{t("nft_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_1_fkkwpv.png" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-nfts_wmg2fs.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                             <h2>{t("buy_crypto")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("buy_crypto_text_1")}</p>
                        <p>{t("buy_crypto_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_3_mtaeal.jpg" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689411497/wallet_mbl2_xxwzpb.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row four">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                             <h2>{t("browser")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("browser_text_1")}</p>
                        <p>{t("browser_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_1_fkkwpv.png" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415542/s-browser_ep1hha.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                        <h2>{t("import_wallet")}</h2>
                            <Walletbadge />
                        </div>
                        <p>{t("import_wallet_text_1")}</p>
                        <p>{t("import_wallet_text_2")}</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">{t("download")}</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689418805/device_3_mtaeal.jpg" alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-import_px8ljp.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;