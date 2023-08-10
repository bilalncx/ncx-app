import React from "react";
import './buy-crypto.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import BuyCryptoFirst from '../../components/buycryptopage/firssect/first';
import BuyCryptoSecond from '../../components/buycryptopage/secondsect/second';
import BuyCryptoThird from '../../components/buycryptopage/thirdsect/thirdsect';
import FirstBuyCrypto from '../../components/buycryptopage/firstbuysect/buy';
// import EconomicCalendar from '../../components/buycryptopage/firssect/newwidget';


function PrivacyPolicy(){
    return(
        <div id="buyCryptoPage">

            <MyHeader />

            <FirstBuyCrypto />

            <BuyCryptoFirst />

            <BuyCryptoSecond />

            <BuyCryptoThird />

            {/* <EconomicCalendar /> */}

            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;