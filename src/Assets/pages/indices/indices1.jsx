import React from "react";
import './style.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import Indices1 from "../../components/indices/01/1";
import Indices2 from "../../components/indices/02/2";
import Indices3 from "../../components/indices/03/3";
import Indices4 from "../../components/indices/04/4";
import Indices5 from "../../components/indices/05/5";
import Indices6 from "../../components/indices/06/6";
import Indices7 from "../../components/indices/07/7";
import Indices8 from "../../components/indices/08/8";
import TradingSteps from "../../components/indices/09/9";
import BannerSection from "../../components/indices/10/10";
import IndicesFAQ from "../../components/indices/11/11";

function IndicesPage()
{
    return(
        <div id="indicies__page" className="new__d">
        
        <MyHeader />

        <Indices8 />

        <Indices2 />

        <Indices1 />

        {/* <Indices3 /> */}

        <Indices4 />

        <Indices5 />

        <Indices6 />

        <Indices7 />

        <IndicesFAQ />

        <TradingSteps />

        <BannerSection />

        <MyFooter />

        </div>
    )
}
export default IndicesPage;