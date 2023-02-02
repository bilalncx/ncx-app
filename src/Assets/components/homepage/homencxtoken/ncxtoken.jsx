import  React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './ncxtoken.css';
import {ReactComponent as NCXLogo} from '../../../images/NCX-logo.svg';

function HomeNCXToken()
{
    return(
        <div className="ncxtoken">
            <div className="container">
                <div className="row tokenrow">
                    <div className="col">
                        <div className="ncx-tokenlogo">
                            <NCXLogo />
                            <p>Token</p>
                        </div>
                    </div>
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <h2>Trade Futures with up to 100x Leverage</h2>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="tokentable">
                    <table>
                        <thead>
                            <tr>
                                <th>NCX Staked</th>
                                <th>Trading Fee Discount (Spot & Derivatives)</th>
                                <th>Additional Staking Rewards (APR)</th>
                                <th>Withdrawal Fee Refund</th>
                                <th>Derivatives Leaverage</th>
                                <th>Additional APR for Providing Liquidity in NCX Yield Farms</th>
                                <th>Use NCXX as Derivatives Trading Collateral </th>
                                <th>Use NCXX as Collateral to Borrow other Crypto Assets</th>
                                <th>IEO Tickets for New NCX Spot Launches</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="one"></div>
                                    <p>50,000</p>
                                </td>
                                <td>
                                    <p>10%</p>
                                </td>
                                <td>
                                    <p>3%</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HomeNCXToken;