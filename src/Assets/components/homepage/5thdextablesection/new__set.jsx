import React from "react";
import Button from "@mui/material/Button";
import Device1 from '../../../images/device_1.png';
import Device2 from '../../../images/device_2.png';
import Device3 from '../.././../images/device_3.png';
import Device4 from '../../../images/device_4.png';
import {ReactComponent as CTrader1} from '../../../images/ctrader_logo.svg';
import {ReactComponent as NCXWeb} from '../../../images/ncxweb.svg';
import Laptop3 from '../../../images/laptop3.png';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import WalletMobileVideo from '../../../images/wallet_mbl.mp4';
import WalletMobileVideo2 from '../../../images/wallet_mbl2.mp4';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';
import { useTranslation } from "react-i18next";
import SExchange from '../../../images/s-exchange.mp4';
import NCXCrossDex from '../../../images/ncx-cross-dex.png';
import { ReactComponent as NCXDEXBadge } from '../../../images/dex-badge.svg';

function Indices5()
{
    const { t } = useTranslation();
    return(
        <div className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">{t("ncx_innovative_platforms_products_and_spplications")}</h1>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_app")}</h2>
                            <NCXBadge1 />
                        </div>
                        <p>{t("ncx_c_trader_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="#" target="_blank" rel="noreferrer" className="download">{t("download")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                <source src={WalletMobileVideo2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_defi_wallet_app")}</h2>
                            <NCXBadge2 />
                        </div>
                        <p>{t("ncx_defi_wallet_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/wallet" target="_blank" rel="noreferrer" className="download">{t("View")}</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
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
                                <source src={WalletMobileVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Cross Chain DEX</h2>
                            <NCXDEXBadge />
                        </div>
                        <p>
                            <span>Swap 500k500k+ Tokens across</span>
                            <span>10 Chains with NCX Cross-Chain DEX.</span>
                        </p>
                        <div className="tiy__bd">
                            <Button href="https://dex.ncx.cx/" target="_blank" rel="noreferrer" className="download">Launch</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={NCXCrossDex} alt="ncx_platform" />
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX Web</h2>
                            <NCXWeb />
                        </div>
                        <p>Elevate your trading with innovation. Advanced tools for serious traders.</p>
                        <div className="tiy__bd">
                            <Button href="https://trade.ncx.cx/" target="_blank" rel="noreferrer" className="download">Launch</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Laptop3} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
                <div id="ghrthf-we" className="plat__ggre row">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>{t("ncx_c_trader_app")}</h2>
                            <CTrader2 />
                        </div>
                        <p>{t("ncx_c_trader_app_text")}</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">View</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pho__img">
                            {/* <img src={Device4} alt="ncx_platform" /> */}
                            <video 
                                id="phomsdf"
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                preload="auto"
                                // poster="https://ncx.cx/images/ncx_redrok_poster.png"
                                >
                                <source src={SExchange} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>NCX cTrader Windows</h2>
                            <CTrader1 />
                        </div>
                        <p>Automate your trading on the most advanced platform for Derivatives trading.</p>
                        <div className="tiy__bd">
                            <Button href="https://ncx.cx/derivatives" target="_blank" rel="noreferrer" className="download">View</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">{t("sign_up")}</Button>
                        </div>
                        <div className="pla__img">
                            <img src={Device1} alt="ncx_platform" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices5;