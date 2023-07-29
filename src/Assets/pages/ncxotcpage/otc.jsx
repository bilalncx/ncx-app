import React from "react";
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import NCXOTC1 from '../../components/otc/desktop/desktop';
import OTCMobileVersion from "../../components/otc/mobile/mobile";

function NCXOTCPage()
{

    return(
        <div id="ncxotc-page">
            <MyHeader />

            <div className="otc__desktop">
                <NCXOTC1 />
            </div>

            <div className="otc__mobile">
                <OTCMobileVersion />
            </div>
            <MyFooter />
        </div>
    )
}
export default NCXOTCPage;