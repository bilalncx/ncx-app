import {React, useEffect} from "react";
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import AboutMobileVersion from '../../components/aboutus/mobile/mobile';
import AboutDesktopVersion from '../../components/aboutus/desktop/desktop';

function NCXAboutUs()
{
    useEffect(() => {
        document.title = 'NCX - About Us';
    }, []);

    return(
        <div id="ncx_about">
            
            <MyHeader />

            <div className="about_desktop">

                <AboutDesktopVersion />
            </div>

            <div className="about_mobile">
                <AboutMobileVersion />
            </div>

            <MyFooter />

        </div>
    )
}
export default NCXAboutUs;