import React from "react";
import './otc.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import BackVideo from '../../images/ncx-firstslidervideo.mp4';
import {ReactComponent as Icon} from '../../images/ncx-staricon.svg';
import OTCSecrtion from '../../components/homepage/NCXOTC/otc';
import Button from "@mui/material/Button";

function NCXOTCPage()
{
    return(
        <div id="ncxotc-page">
            <MyHeader />
            <div className="OTCwelcome">
                <div className="welcomevideo">
                    <video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        >
                        <source src={BackVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className="welcomeotc row">
                        <div className="col">
                            <Icon />
                            <h1>Welcome to NCX OTC</h1>
                            <p>Tight spreads, Deep Liquidity, Instant settlement</p>
                            <Button href="mailto:support@ncx.cx">Contact Us</Button>
                        </div>
                        <div className="col why-choose-otc">
                            <h1>Why choose NCX OTC</h1>
                            <p>In order to meet the specific needs of financial institutions and high net worth individuals, NCX OTC launches block trading service, providing deep liquidity and personalized service. We communicate with major global liquidity pools to provide the most competitive quotations, while ensuring transaction privacy and security.</p>
                            <p>NCX OTC avoids the impact of large orders on the price fluctuations in the open market, and provides more professional, personalized, private and secure services for institutions or individuals with professional trading needs.</p>
                            <p>The current minimum amount for a single transaction is USD 100,000.</p>
                        </div>
                    </div>
                </div>
            </div>

            <OTCSecrtion />

            <MyFooter />
        </div>
    )
}
export default NCXOTCPage;