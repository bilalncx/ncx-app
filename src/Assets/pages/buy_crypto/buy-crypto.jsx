import React from "react";
import './buy-crypto.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import CountUp from 'react-countup';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {ReactComponent as MoonPay} from '../../images/moonpay.svg';
import {ReactComponent as Wyre} from '../../images/wyre.svg';
import {ReactComponent as Xanpool} from '../../images/xanpool.svg';
import {ReactComponent as Utorg} from '../../images/utorg.svg';
import {ReactComponent as Indain} from '../../images/indian.svg';
import Coinify from '../../images/coinify.png';
import {ReactComponent as Transak} from '../../images/transak.svg';
import {ReactComponent as Mercuryo} from '../../images/mercuro.svg';
import {ReactComponent as BTCDirect} from '../../images/btcdirect.svg';
import CryptoImage from '../../images/crypto-imga.png';
import NCXExchange from '../../images/ncx-exchange.png';
import Barcode from '../../images/barcode.png';
import Applestore from '../../images/appstore.png';
import DownloadGoogle from '../../images/googleplay.png';


function PrivacyPolicy(){
    const onComplete = () => {
        console.log('Completed!');
      };
      
      const onStart = () => {
        console.log('Started!');
      };
    return(
        <div className="buycrypto">
            <MyHeader />
            <div className="crypto-body">
                <div className="buy-banner">
                    <div className="container">
                        <h1>Buy/Sell Crypto</h1>
                        <p>with Credit/Debit Card, Apple Pay</p>
                        <p>Google Pay and Wire Transfer</p>
                    </div>
                </div>
                <div className="crypto-frame">
                    <div className="container">
                        <div className="row framerow">
                            <div className="col buycrypt-img">
                                <img className="cryptimg" src={CryptoImage} alt="Buy Crypto at NCX" />
                                {/* <div style="display: flex; justify-content: center; padding: 15px;">
                                    <iframe
                                        style="--border-radius: 10px; box-shadow: 0 2px 10px 0 rgba(0,0,0,.20); border-radius: var(--border-radius); margin: auto;max-width: 420px"
                                        src="https://widget.onramper.com?color=266677&apiKey=pk_test_jBpYSQgTycNTu8w7YmjyKJ5azaC5lNJ0aQxcK2xhCFg0"
                                        height="660px"
                                        width="482px"
                                        title="Onramper widget"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; camera; gyroscope; payment"
                                    >
                                    </iframe>
                                </div> */}
                            </div>
                            <div className="col">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="brandimage row">
                                    <div className="imager col">
                                        <MoonPay />
                                    </div>
                                    <div className="imager col">
                                        <Wyre />
                                    </div>
                                    <div className="imager col">
                                        <Xanpool />
                                    </div>
                                </div>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="brandimage row">
                                    <div className="imager col">
                                        <Utorg />
                                    </div>
                                    <div className="imager col">
                                        <Indain />
                                    </div>
                                    <div className="imager col">
                                        <img src={Coinify} alt="Coinify" />
                                    </div>
                                </div>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                <div className="brandimage row">
                                    <div className="imager col">
                                        <Transak />
                                    </div>
                                    <div className="imager col">
                                        <Mercuryo />
                                    </div>
                                    <div className="imager col">
                                        <BTCDirect />
                                    </div>
                                </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        
                        <div className="contentp">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>NCX provides seamless access to an array of digital assets with a foundation in Decentralised & Centralised Finance Technology. You can now Buy and Sell Cryptocurrencies for Fiat using one of our Integrated Payment Providers in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer. Simply enter the currency & amount and chose among the available payment methods, the best available rate is displayed by default, you can easily switch between providers and payment methods and chose the one right for you. </p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>We stand by Zero Fees for our loyal customers, NCX charges 0% Fee on all Buy/Sell Crypto for Fiat transactions, as well as Deposits and Withdrawals -    all fees displayed are charged by the Payment Providers only.</p>
                            </AnimationOnScroll>
                        </div>

                        <div className="gradient-bar crypto">
                            <AnimationOnScroll animateIn="animate__slideInLeft">
                                <div className="gradientbar"></div>
                            </AnimationOnScroll>
                        </div>
                        
                        <div className="currencies-options row">
                            <div className="col">
                                <CountUp
                                    className="balance"
                                    start={10}
                                    end={90}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                    // separator=" "
                                    // decimals={4}
                                    // decimal=","
                                    prefix=">"
                                    // suffix=" left"
                                    onComplete={onComplete}
                                    onStart={onStart}
                                    delay={0}
                                />
                                <p>Payment Methods</p>
                            </div>
                            <div className="col">
                                <CountUp
                                    className="balance"
                                    start={10}
                                    end={200}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                    prefix=">"
                                    onComplete={onComplete}
                                    onStart={onStart}
                                />
                                <p>Cryptocurrencies</p>
                            </div>
                            <div className="col">
                                <CountUp
                                    className="balance"
                                    start={10}
                                    end={95}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                    prefix=">"
                                    onComplete={onComplete}
                                    onStart={onStart}
                                />
                                <p>Fiat Currencies</p>
                            </div>
                            <div className="col">
                                <CountUp
                                    className="balance"
                                    start={10}
                                    end={180}
                                    duration={10}
                                    useEasing={true}
                                    useGrouping={true}
                                    prefix=">"
                                    onComplete={onComplete}
                                    onStart={onStart}
                                />
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="download Cryptopage">
                    <div className="container">
                        <div className="row">
                            <div className="asss">
                                <div className="animtation">
                                    <AnimationOnScroll animateIn="animate__slideInUp">
                                        <h1>Download App, Trade on the go!</h1>
                                    </AnimationOnScroll>
                                </div>
                                <div className="bar11">
                                    <div className="bar12">
                                        <AnimationOnScroll animateIn="animate__fadeIn">
                                            <img src={Barcode} alt="NCX BarCode" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className="stores">
                                        <AnimationOnScroll animateIn="animate__fadeIn">
                                            <img src={Applestore} alt="AppleStore"/>
                                            <img src={DownloadGoogle} alt="GoogleStore" />
                                        </AnimationOnScroll>
                                    </div>
                                </div>
                            </div>
                            <di className="bsss">
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <img src={NCXExchange} alt="NCX Exchange" />
                                </AnimationOnScroll>
                            </di>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;