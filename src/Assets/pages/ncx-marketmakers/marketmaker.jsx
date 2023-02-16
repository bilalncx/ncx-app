import React from "react";
import './marketmaker.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import FirstVideoSection from '../../components/marketmaker/first/first';
import MaketMakerDiscountTable from '../../components/marketmaker/second/second'; 
import MarketBenefits from '../../components/marketmaker/third/third';

function NCXMarketMakers()
{
    return(
        <div id="marketmakers_page">
            <MyHeader />
            <FirstVideoSection />
            <MaketMakerDiscountTable />
            <MarketBenefits />
            <MyFooter />
        </div>
    )
}

export default NCXMarketMakers;