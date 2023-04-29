import React from "react";
import './coin.css';
import Arbitrum from '../../../images/ArbitrumLogo.png';
import Avalanche from '../../../images/AvalancheLogo.png';
import Ethereum from '../../../images/EthereumLogo.png';
import Gnosis from '../../../images/GnosisChainLogo.png';
import BNB from '../../../images/BNBLogo.png';
import Base from '../../../images/BaseLogo.png';
import Polygon from '../../../images/PolygonLogo.png';
import Aurora from '../../../images/AuroraLogo.png';
import Optimism from '../../../images/OptimismLogo.png';
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function Wallet1()
{
    const { t } = useTranslation();
    return(
        <div id="home_coins" className="wallet-slider">
            <div className="container">
                <h1>
                    <span>{t("swap_500k_tokens_across")}</span>
                    <span>{t("10_chains_with")} <strong>{t("ncx_cross_chain_dex")}</strong></span>
                    <span>{t("migrate_assets_between_different_chains")}</span>
                </h1>
                <section class="slide-option">
                    <div id="infinite" class="highway-slider">
                        <div class="container highway-barrier">
                            <div class="highway-lane">
                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>

                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>


                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="right__left" class="slide-option">
                    <div id="infinite" class="highway-slider">
                        <div class="container highway-barrier">
                            <div class="highway-lane">
                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>

                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>


                                <div className="coin__chain arbitrum">
                                    <img src={Arbitrum} alt="arbitrum_chain" />
                                    <p>Arbitrum</p>
                                </div>
                                <div className="coin__chain gnosis">
                                    <img src={Gnosis} alt="gnosis" />
                                    <p>Gnosis Chain</p>
                                </div>
                                <div className="coin__chain bnb_chain">
                                    <img src={BNB} alt="bnb_chain" />
                                    <p>BNB Smart Chain</p>
                                </div>
                                <div className="coin__chain aurora">
                                    <img src={Aurora} alt="aurora" />
                                    <p>Aurora</p>
                                </div>
                                <div className="coin__chain ethereum">
                                    <img src={Ethereum} alt="ethereum" />
                                    <p>Ethereum Mainnet</p>
                                </div>
                                <div className="coin__chain polygon">
                                    <img src={Polygon} alt="polygon" />
                                    <p>Polygon</p>
                                </div>
                                <div className="coin__chain base">
                                    <img src={Base} alt="base" />
                                    <p>Base</p>
                                </div>
                                <div className="coin__chain avalanche">
                                    <img src={Avalanche} alt="avalanche" />
                                    <p>Avalanche</p>
                                </div>
                                <div className="coin__chain optimism">
                                    <img src={Optimism} alt="optimism" />
                                    <p>Optimism</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <p className="gjg_gf">Including Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora</p>
                <div className="coin__tb">
                    <Button href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="lnch_dx">{t("launch_dex")}</Button>
                    <Button href="#" className="dx_drp"> {t("claim_airdrop")}</Button>
                </div>
            </div>
        </div>
    )
}
export default Wallet1;