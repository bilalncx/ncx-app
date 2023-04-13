import React from "react";
import Arbitrum from '../../../images/ArbitrumLogo.png';
import Avalanche from '../../../images/AvalancheLogo.png';
import Ethereum from '../../../images/EthereumLogo.png';
import Gnosis from '../../../images/GnosisChainLogo.png';
import BNB from '../../../images/BNBLogo.png';
import Base from '../../../images/BaseLogo.png';
import Polygon from '../../../images/PolygonLogo.png';
import Aurora from '../../../images/AuroraLogo.png';
import Optimism from '../../../images/OptimismLogo.png';
import './style.css';

function Wallet1()
{
    return(
        <div className="wallet-slider">
            <div className="container">
                <h1>Available on 12+ Networks</h1>
                <div className="slider__leftright">
                    <div className="styles_gradientBase__0SEn1"></div>
                    <div className="scroll-parent">
                        <div className="coin__chain__ccx primary">
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
                        <div className="coin__chain__ccx secondary">
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
                    <div className="styles_gradientBase__0SEn1 styles_gradientFlipped__Krens"></div>
                </div>
                <h3>and more, including testnets</h3>
            </div>
        </div>
    )
}
export default Wallet1;