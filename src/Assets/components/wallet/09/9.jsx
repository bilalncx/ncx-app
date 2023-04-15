import React from "react";
import './9.css';
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';

function Wallet9Screen()
{
    const { t } = useTranslation();

    return(
        <div className="wallet__buy_crypto">
            <div className="container">
                <p className="__pp">Buy Crypto</p>
                <h1 className="__ldd">Buy <span>Crypto</span> in just few clicks</h1>
                <div className="ccs__cont">
                    <div className="col">
                        <CountUp
                            className="balance"
                            start={1}
                            end={16}
                            duration={15}
                            useEasing={true}
                            useGrouping={true}
                            // separator=" "
                            // decimals={4}
                            // decimal=","
                            prefix=">"
                            // suffix=" left"
                            delay={0}
                        />
                        <p>{t("payment_methods")}</p>
                    </div>
                    <div className="col">
                        <CountUp
                            className="balance"
                            start={10}
                            end={200}
                            duration={20}
                            useEasing={true}
                            useGrouping={true}
                            prefix=">"
                        />
                        <p>{t("cryptocurrencies")}</p>
                    </div>
                    <div className="col">
                        <CountUp
                            className="balance"
                            start={10}
                            end={95}
                            duration={20}
                            useEasing={true}
                            useGrouping={true}
                            prefix=">"
                        />
                        <p>{t("fiat_currencies")}</p>
                    </div>
                    <div className="col">
                        <CountUp
                            className="balance"
                            start={10}
                            end={180}
                            duration={20}
                            useEasing={true}
                            useGrouping={true}
                            prefix=">"
                        />
                        <p>{t("countries")}</p>
                    </div>
                </div>
                <div className="arrow__sect">
                    <a href="/faq" className="col">
                        <div className="arr__log">
                            <p>Step 1</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Choose Crypto, Payment Currency and Enter the Amount</h1>
                            <p>Choose from over 200 Cryptocurrencies and 95 Fiat Currencies, enter the required amount, if your currency is not available, select USD</p>
                            <a href="/faq">faq</a>
                        </div>
                    </a>
                    <a href="/faq" className="col">
                        <div className="arr__log">
                            <p>Step 2</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Choose Between Payment Providers for the Best Rate & Payment Method</h1>
                            <p>Choose between Payment Methods and Providers to find the best rate and most convenient Payment Method</p>
                            <a href="/faq">faq</a>
                        </div>
                    </a>
                    <a href="/faq" className="col third">
                        <div className="arr__log">
                            <p>Step 3</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Complete the Payment & Receive your Crypto</h1>
                            <p>Once you complete the payment the Assets will be sent to your Crypto Wallet, if the amount is over certain limit you may be asked to complete KYC</p>
                            <a href="/faq">faq</a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Wallet9Screen;