import React from "react";
import './ambassador.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import FirstSect from '../../components/ambassador/first/first';
import SecondSect from '../../components/ambassador/second/second';
import ThirdGradient from '../../components/ambassador/third/third';

function NCXAmbassadorPage()
{
    return(
        <div id="ncxAmbassador-page">
            <MyHeader />
            <FirstSect />
            <SecondSect />
            <ThirdGradient />
            <MyFooter />
        </div>
    )
}

export default NCXAmbassadorPage;