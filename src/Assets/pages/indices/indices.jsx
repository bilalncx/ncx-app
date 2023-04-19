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

function IndicesPage()
{
    return(
        <div id="indicies__page">
        
        <MyHeader />

        <Indices2 />

        <Indices1 />

        <Indices3 />

        <Indices4 />

        <Indices5 />

        <Indices6 />

        <Indices7 />

        <MyFooter />

        </div>
    )
}
export default IndicesPage;