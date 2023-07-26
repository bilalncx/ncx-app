import {React, useEffect} from "react";
import './about.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import About1 from '../../components/aboutus/01/1';
import About2 from '../../components/aboutus/02/2';
import About3 from '../../components/aboutus/03/3';
import About4 from '../../components/aboutus/04/4';
import AboutDefi from '../../components/aboutus/defi/defi';
import AboutLast from '../../components/aboutus/last/last';
import AboutPartnerShips from '../../components/aboutus/partner/partner'
import TradingAdvantages from '../../components/aboutus/advantages/trading';
import TradingPairs from '../../components/aboutus/derivative/derivativs';
import DataAnalytics from '../../components/aboutus/analytics/ana';
import AboutMobileVersion from "../../components/aboutus/mobile/mobile";

function NCXAboutUs()
{
    useEffect(() => {
        document.title = 'NCX - About Us';
    }, []);

    return(
        <div id="ncx_about">
            
            <MyHeader />

            {/* <div className="about_desktop"> */}
                <About1 />

                <About2 />

                <About3 />

                <About4 />

                <DataAnalytics />

                <TradingPairs />

                <TradingAdvantages />

                <AboutDefi />

                <AboutPartnerShips />

                <AboutLast />
            {/* </div> */}

            {/* <div className="about_mobile">
                <AboutMobileVersion />
            </div> */}

            <MyFooter />

        </div>
    )
}
export default NCXAboutUs;