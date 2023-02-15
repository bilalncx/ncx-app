import React from "react";
import './buy-crypto.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import BuyCryptoFirst from '../../components/buycryptopage/firssect/first';
import BuyCryptoSecond from '../../components/buycryptopage/secondsect/second';
import BuyCryptoThird from '../../components/buycryptopage/thirdsect/thirdsect';
import BuyCryptoFourth from '../../components/buycryptopage/fourthsect/fourthsect';


function PrivacyPolicy(){
    return(
        <div id="buyCryptoPage">

            <MyHeader />

            <BuyCryptoFirst />

            <BuyCryptoSecond />

            <BuyCryptoThird />

            <BuyCryptoFourth />

            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;