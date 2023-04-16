import React from "react";
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";
import {ReactComponent as SafeArrow} from '../../../images/safe-arrow.svg';

function Wallet9Screen()
{
    const { t } = useTranslation();

    return(
        <div id="ncxt__stake" className="wallet__buy_crypto">
            <div className="container">
                <h1 className="__ldd">Stake <span>NCXT</span> earn up to 35% APR</h1>
                <div className="arrow__sect">
                    <a href="/faq" className="col">
                        <div className="arr__log">
                            <p>Earn interest on your assets</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Earn up to 35% APR in Staking plus Additional Staking Rewards</h1>
                        </div>
                    </a>
                    <a href="/faq" className="col">
                        <div className="arr__log">
                            <p>Fees rebate</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Get Up to 100% Trading and Withdrawal Fees Back</h1>
                        </div>
                    </a>
                    <a href="/ncx-card" className="col third">
                        <div className="arr__log">
                            <p>NCX Crypto Card</p>
                            <SafeArrow />
                        </div>
                        <div className="btm__tc">
                            <h1>Facilitate every day Card Payments & ATM Withdrawals</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Wallet9Screen;