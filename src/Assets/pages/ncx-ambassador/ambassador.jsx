import React from "react";
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import FirstSect from '../../components/ambassador/first/first';
import SecondSect from '../../components/ambassador/second/second';

function NCXAmbassadorPage()
{
    return(
        <div id="ncxAmbassador-page">
            <MyHeader />
            <FirstSect />
            <SecondSect />
            <MyFooter />
        </div>
    )
}

export default NCXAmbassadorPage;