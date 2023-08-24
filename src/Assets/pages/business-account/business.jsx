import React from "react";
import Myheader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import DesktopScreen from '../../components/digital-business-account/desktop';

function BusinessPage()
{
    return(
        <div className="deu">
            <Myheader />

            <DesktopScreen />

            <MyFooter />
        </div>
    )
}

export default BusinessPage;