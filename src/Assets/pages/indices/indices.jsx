import React from "react";
import './style.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import Indices1 from "../../components/indices/01/1";

function IndicesPage()
{
    return(
        <div id="indicies__page">
        
        <MyHeader />

        <Indices1 />

        <MyFooter />

        </div>
    )
}
export default IndicesPage;