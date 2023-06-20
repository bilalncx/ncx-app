import React from "react";
import './2ndsection.css';
import { useTranslation } from "react-i18next";
import { CarouselProvider, Slider, Slide, Dot, DotGroup } from 'pure-react-carousel';
import ExchangeIcon from '../../../images/orders-min.png';
import DerivativeIcon from '../../../images/deri_icon.png';
import WalletIcon from '../../../images/wallet_icon.png';
import DebitIcon from '../../../images/debit_icon.png';
import GlobalMarket2 from '../../../images/purchase-icon.png';
import { Wallet } from "@mui/icons-material";

function Indices2()
{
    const { t } = useTranslation();
    return(
        <div id="hme__gg__ff">
            <div className="container">
                <h1 className="fg__rer">First all-in-one Hybrid CEX | DEX Crypto Exchange, Trading Platform & DeFi Ecosystem</h1>
                <div className="rf__aab row">
                    <div className="col">
                        <img src={ExchangeIcon} alt="ncx"/>
                        <h3>Crypto Exchange</h3>
                        <p>Trade over 200 Cryptocurrency pairs on Spot Exchange. Swap  500k+ Tokens across 10 Chains on NCX Cross Chain Decentralised Exchange.</p>
                    </div>
                    <div className="col">
                        <img src={DerivativeIcon} alt="ncx" />
                        <h3>Derivatives Trading</h3>
                        <p>Trade over 500 Markets: Crypto Derivatives, Global Financial Markets including Stocks, Indices, ETFs, Metals, Energies, Forex with up to 200x Leverage.</p>
                    </div>
                    <div className="col">
                        <img src={WalletIcon} alt="ncx" />
                        <h3>DeFi Wallet</h3>
                        <p>Safely Store, Send, Swap 500k+ Tokens across 10 Chains on NCX DeFi Wallet. Safeguard your assets holding your own private keys, import existing wallets or create new.</p>
                    </div>
                    <div className="col">
                        <img src={GlobalMarket2} alt="ncx" />
                        <h3>Crypto Debit Card</h3>
                        <p>Pay with Crypto converted into currency at 44 million merchant locations Worldwide. ATM Withdrawals up to $20,000 per month. Apple Pay, Google Pay Integrated.</p>
                    </div>
                </div>

                <div className="mbl__sec__cr">
                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={4}
                        step={1}
                        naturalSlideWidth={300}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                        interval={3000}
                        orientation="horizontal"
                        infinite
                        playDirection="forward"
                    >
                        <Slider className="global__row row">
                            <Slide index={0}>
                                <div className="col">
                                    <img src={ExchangeIcon} alt="ncx"/>
                                    <h3>Crypto Exchange</h3>
                                    <p>Trade over 200 Cryptocurrency pairs on Spot Exchange. Swap  500k+ Tokens across 10 Chains on NCX Cross Chain Decentralised Exchange</p>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="col">
                                    <img src={DerivativeIcon} alt="ncx" />
                                    <h3>Derivatives Trading</h3>
                                    <p>Trade over 500 Markets: Crypto Derivatives, Global Financial Markets including Stocks, Indices, ETF’s, Metals, Energies, Forex with up to 200x Leverage.</p>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="col">
                                    <img src={WalletIcon} alt="ncx" />
                                    <h3>DeFi Wallet</h3>
                                    <p>Safely Store, Send, Swap 500k+ Tokens across 10 Chains on NCX DeFi Wallet. Safeguard your assets holding your own private keys, import existing wallets or create new.</p>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div className="col">
                                    <img src={DebitIcon} alt="ncx" />
                                    <h3>Crypto Debit Card</h3>
                                    <p>Pay with Crypto converted into currency at 44 million merchant locations Worldwide. ATM Withdrawals up to $20,000 per month. Apple Pay, Google Pay Integrated.</p>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default Indices2;