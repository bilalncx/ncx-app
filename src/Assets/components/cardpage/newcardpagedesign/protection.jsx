import React from "react";
import './style.css';
import { ReactComponent as TravelProtection } from '../../../images/travel-protect.svg';
import { ReactComponent as PurchaseProtection } from '../../../images/purchase-protect.svg';
import { ReactComponent as FraudProtection } from '../../../images/fraud-protect.svg';

function PremiumProtectionCard()
{
    return(
        <div id="insurance-benefits" className="berfvc">
            <div className="container">
                <div className="tvscc">
                    <h1>Premium Protection for all your needs</h1>
                    <p>Protect your business from the unexpected with the increased coverage offered by your metal NCX Card.</p>

                    <div className="row vsdvs">
                        <div className="col btge">
                            <TravelProtection />
                            <h3>Travel Protection</h3>
                            <p>Get compensated up to $800 if your flight is delayed and get compensated up to $1,000 if ever your luggage is lost, damaged or stolen.</p>
                        </div>

                        <div className="col btge">
                            <PurchaseProtection />
                            <h3>Purchase Protection</h3>
                            <p>We’ll compensate you for up to $2,500 per year (or up to $1,250 per article) in lost or damaged goods purchased with your NCX Card.</p>
                        </div>

                        <div className="col btge">
                            <FraudProtection />
                            <h3>Fraud Protection</h3>
                            <p>We’ll reimburse you up to $3,000 per year in the event your NCX Card is stolen or lost and used to make fraudulent purchases.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumProtectionCard;