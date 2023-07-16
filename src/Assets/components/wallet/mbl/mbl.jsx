import { React, useState } from "react";
import './mbl.css';

function WalletMobileSection()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div id="mbl__wal">
            <div className="container">
                    <h1 className="hed_x">One app. Unlimited possibilities.</h1>
                <div className="wallet__tab">
                    <button
                        className={toggleState === 1 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(1)}
                    >
                    Store
                    </button>
                    <button
                        className={toggleState === 2 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(2)}
                    >
                    Wallet
                    </button>
                    <button
                        className={toggleState === 3 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(3)}
                    >
                    Swap
                    </button>
                    {/* <button
                        className={toggleState === 4 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(4)}
                    >
                    Send
                    </button>
                    <button
                        className={toggleState === 5 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(5)}
                    >
                    Browser
                    </button>
                    <button
                        className={toggleState === 6 ? "wall__tab active" : "wall__tab"}
                        onClick={() => toggleTab(6)}
                    >
                    NFTs
                    </button> */}
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1>Gain <span>full control</span> over your crypto assets and private keys. Easily manage tokens across 12+ <span>Blockchains.</span></h1>
                            <p>Including Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora, xDai Chain, Harmony, Heco Chain, OKEx Chain</p>
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689497053/wallet__sc1_weztnb.png" alt="wallet_mbl" />
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1>Import your <span>existing Wallet</span> seamlessly with a 12/18/24-word <span>recovery phrase.</span></h1>
                            <p>Import unlimited wallets into NCX DeFi Wallet, keep full custody of your assets with all added benefits of</p>
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689497126/wallet__sc2_zmlzph.png" alt="wallet_mbl" />
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1>With built-in <span>Cross-Chain Swap</span> get the best price on every swap</h1>
                            <p>Chose the best route, safe on gas fees and time</p>
                            <img src="https://res.cloudinary.com/dqbcnwbvy/image/upload/v1689497053/wallet__sc1_weztnb.png" alt="wallet_mbl" />
                        </div>
                    </div>
                    {/* <div className={toggleState === 4 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1><span>Send crypto</span> at your preferred confirmation speed and <span>network</span> fee.</h1>
                            <p>Our Gas Meter gives you real-time updates on gas fees and transaction speeds.</p>
                            <img src={Wallet2} alt="wallet_mbl" />
                        </div>
                    </div>
                    <div className={toggleState === 5 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1>Explore the most popular <span>dApps</span> in browser without leaving NCX <span>DeFi Wallet</span> App</h1>
                            <p>Seamlessly connect to swap, farm, and mine on the hottest DeFi protocols</p>
                            <img src={Wallet1} alt="wallet_mbl" />
                        </div>
                    </div>
                    <div className={toggleState === 6 ? "wall__cont  active" : "wall__cont"}>
                        <div className="cont__txt">
                            <h1>Store, Send, Deposit, NFTs across various blockchains</h1>
                            <p>NCX non-custodial wallet that gives you access to a full suite of DeFi services in one place.</p>
                            <img src={Wallet2} alt="wallet_mbl" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default WalletMobileSection;