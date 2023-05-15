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

function Indices5()
{
    return(
        <div id="Wallet_Main" className="trading__platform">
            <div className="container">
                <h1 className="fg__rer">NCX Multi Chain DeFi Wallet</h1>
                <div className="plat__ggre row one">
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>Store</h2>
                            <Walletbadge />
                        </div>
                        <p>Gain full control over your crypto assets and private keys. Easily manage tokens across 12+ Blockchains.</p>
                        <p>Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora, xDai, Harmony, Heco, OKEx Chain</p>
                        <div className="tiy__bd">
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">Sign Up</Button>
                            <Button href="#" className="sign__up">Claim Airdrop</Button>
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
                            <h2>Swap</h2>
                            <Walletbadge />
                        </div>
                        <p>Swap 500k+ Tokens across 10 Chains with NCX Cross-Chain Swap. Migrate assets between different chains</p>
                        <p><span>With built-in Cross-Chain</span><span>Swap get the best price on every swap</span></p>
                        <div className="tiy__bd">
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="download">Sign Up</Button>
                            <Button href="#" className="sign__up">Claim Airdrop</Button>
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
                            <h2>Send</h2>
                            <Walletbadge />
                        </div>
                        <p>Send crypto at your preferred confirmation speed and network fee.</p>
                        <p>Our Gas Meter gives you real-time updates on gas fees and transaction speeds.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Receive</h2>
                            <Walletbadge />
                        </div>
                        <p>Swap 500k+ Tokens across 10 Chains with NCX Cross-Chain Swap. Migrate assets between different chains</p>
                        <p><span>With built-in Cross-Chain</span><span>Swap get the best price on every swap</span></p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                        <p>Store, Send, Import NFTs across various Blockchains Import directly into NCX Wallet </p>
                        <p>View your NFTs Collection and share with friends, all your favorite NFTs in one place</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Buy Crypto</h2>
                            <Walletbadge />
                        </div>
                        <p>Buy Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer.</p>
                        <p>Choose from over 200 Cryptocurrencies and 95 Fiat Currencies, choose between 16 Payment Providers for the Best Rate and Payment Method</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Browser</h2>
                            <Walletbadge />
                        </div>
                        <p>Explore the most popular dApps in browser without leaving NCX DeFi Wallet App</p>
                        <p>Seamlessly connect to swap, farm, and mine on the hottest DeFi protocols</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Import Wallet</h2>
                            <Walletbadge />
                        </div>
                        <p>Import your existing Wallet seamlessly with a 12/18/24-word recovery phrase.</p>
                        <p>Import unlimited wallets into NCX DeFi Wallet, keep full custody of your assets with all added benefits of</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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