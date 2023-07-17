import React from "react";
import Button from "@mui/material/Button";
import {ReactComponent as Walletbadge} from '../../../images/wallet_badge.svg';
import {ReactComponent as CTrader2} from '../../../images/ctrader_logoB.svg';
import {ReactComponent as NCXBadge1} from '../../../images/ncx-badge.svg';
import {ReactComponent as NCXBadge2} from '../../../images/ncx-badge2.svg';

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
                        <p>Ethereum, Binance Smart Chain, Polygon, Avalanche, Fantom, Optimism, Arbitrum, Klaytn, Aurora, xDai, Harmony, Heco, OKEx Chain.</p>
                        <div className="tiy__bd">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="download">Sign Up</Button>
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
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415544/s-store_j1okjo.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col trg__ff__fe">
                        <div className="tra__go">
                            <h2>Swap</h2>
                            <Walletbadge />
                        </div>
                        <p>Swap 500k+ Tokens across 10 Chains with NCX Cross-Chain Swap. Migrate assets between different chains.</p>
                        <p><span>With built-in Cross-Chain</span><span>Swap get the best price on every swap.</span></p>
                        <div className="tiy__bd">
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="download">Sign Up</Button>
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
                                <source src="https://res.cloudinary.com/dqbcnwbvy/video/upload/v1689415543/s-swap_bslube.mp4" type="video/mp4" />
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
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Receive</h2>
                            <Walletbadge />
                        </div>
                        <p>Receiving crypto in your DeFi Wallet has never been easier. Select the Token on any of the 12 Networks and share the QR or copy the Wallet Address.</p>
                        <p>Import custom Tokens easily with just 2 clicks.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                        <p>Store, Send, Import NFTs across various Blockchains Import directly into NCX Wallet.</p>
                        <p>View your NFTs Collection and share with friends, all your favorite NFTs in one place.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Buy Crypto</h2>
                            <Walletbadge />
                        </div>
                        <p>Buy Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer.</p>
                        <p>Choose from over 200 Cryptocurrencies and 95 Fiat Currencies, choose between 16 Payment Providers for the Best Rate and Payment Method.</p>
                        <div className="tiy__bd">
                            <Button href="https://play.google.com/store/apps/details?id=com.mfinance.ncxdigitalexchange.prd" className="download">Download</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Browser</h2>
                            <Walletbadge />
                        </div>
                        <p>Explore the most popular dApps in browser without leaving NCX DeFi Wallet App.</p>
                        <p>Seamlessly connect to swap, farm, and mine on the hottest DeFi protocols.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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
                            <h2>Import Wallet</h2>
                            <Walletbadge />
                        </div>
                        <p>Import your existing Wallet seamlessly with a 12/18/24-word recovery phrase.</p>
                        <p>Import unlimited wallets into NCX DeFi Wallet, keep full custody of your assets with all added benefits of.</p>
                        <div className="tiy__bd">
                            <Button href="#" className="download">Download</Button>
                            <Button href="https://exchange.ncx.cx/register" target="_blank" rel="noreferrer" className="sign__up">Sign Up</Button>
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