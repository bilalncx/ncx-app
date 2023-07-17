import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import Device2 from '../../../images/device_2.png';
import Device3 from '../.././../images/device_3.png';
import Device4 from '../../../images/device_4.png';
import {ReactComponent as Walletbadge} from '../../../images/wallet_badge.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import WalletMobileVideo from '../../../images/wallet_mbl.mp4';
import WalletMobileVideo2 from '../../../images/wallet_mbl2.mp4';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';
import SImport from '../../../images/s-import.mp4';
import SNFTS from '../../../images/s-nfts.mp4';
import SReceive from '../../../images/s-receive.mp4';
import SStore from '../../../images/s-store.mp4'; 
import SSwap from '../../../images/s-swap.mp4';
import SBrowser from '../../../images/s-browser.mp4';
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">{t("sign_up")}</Button>
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
                                <source src={SStore} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">{t("sign_up")}</Button>
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
                                <source src={SSwap} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device4} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={WalletMobileVideo} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device2} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={SReceive} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device1} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={SNFTS} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device3} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={WalletMobileVideo2} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device1} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={SBrowser} type="video/mp4" />
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
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img viso__ff">
                            {/* <img src={Device3} alt="ncx_platform" /> */}
                            <video 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={SImport} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;