import React from "react";
import Benefit1 from '../../../images/benefit1.png';
import Benefit2 from '../../../images/benefit2.png';
import Benefit3 from '../../../images/benefit3.png';

function PremiumExperience()
{
    return(
        <div className="berfvc">
            <div className="container">
                <div className="tvscc">
                    <h1>A premium experience you can touch</h1>

                    <div className="row vsdvs">
                        <div className="col btge">
                            <img src={Benefit1} alt="ncx"/>
                            <h3>Top Up By Crypto of Fiat</h3>
                            <p>You can now use your Crypto for everyday purchases at 44 million merchant locations Worldwide with NCX Crypto Debit Card, powered by MasterCard, topping up your NCX Card using your Crypto or Fiat Wallet</p>
                        </div>

                        <div className="col btge">
                            <img src={Benefit2} alt="ncx"/>
                            <h3>ATM Withdrawals</h3>
                            <p>Bridging the gap between DeFi and Centralised Finance you can now turn your Crypto into Cash instantly using NCX Card across 3.2m ATMs Worldwide, Withdrawal Limits Apply*</p>
                        </div>

                        <div className="col btge">
                            <img src={Benefit3} alt="ncx"/>
                            <h3>Online Payments</h3>
                            <p>Using your NCX Crypto Card for Online Payments has never been easier, accepted by all MasterCard supporting merchants as well as Apple Pay, Google Pay, Samsung Pay, Zelle, Paypal, Stripe, AliPay, Payoneer and many more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumExperience;