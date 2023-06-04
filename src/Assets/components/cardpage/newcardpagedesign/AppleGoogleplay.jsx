import React from "react";
import AppleGoogleImage from '../../../images/apple-google-pay.png';

function IntegrationPlay()
{
    return(
        <div className="integr__pla">
            <div className="container">
                <div className="nhy__tr">
                    <div className="mujh">
                        <img src={AppleGoogleImage} alt="ncx"/>
                    </div>
                    <div className="tjmnh">
                        <h1>Integrated Apple Pay and Google Pay</h1>
                        <div className="hyf__gg">
                            <div className="fvdd">
                                <h3>For your in-store payments</h3>
                                <p>With Apple Pay & Google Pay, there’s no need to dig for your cards—you can pay quickly and easily with the device that’s already in your hand.</p>
                            </div>
                            <div className="fvdd">
                                <h3>Encrypted and secured</h3>
                                <p>With multiple layers of security, using one of the world’s most advanced security infrastructures to help keep your account safe.</p>
                            </div>
                            <div className="fvdd">
                                <h3>For your online payments</h3>
                                <p>Pay for your purchases in one click on your favourite applications or websites with just a click using Apple Pay and Google Pay. It's fast and secure!</p>
                            </div>
                            <div className="fvdd">
                                <h3>Pay securely with your device</h3>
                                <p>Apple Pay / Google Pay doesn’t send your actual card number with your payment. We use an encrypted virtual account number instead.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntegrationPlay;