import React from "react";
import './token.css';
import NCXTokenHeader from '../../components/ncxToken/token-header';
import NCXTokenFooter from '../../components/ncxToken/token-footer';
import FirstSection from '../../components/ncxToken/section-1/first';
import SecondSection from '../../components/ncxToken/section-2/staking_ncxt';
import ThirdSectionTokenFeatures from '../../components/ncxToken/features/features';
import FourthSectionTokenAllocation from '../../components/ncxToken/features/token-allocation';
import CEXDEXTable from '../../components/homepage/5thdextablesection/cexdex';
import SixthVideoSection from '../../components/ncxToken/token_video/video';
import NCXTPresale from '../../components/ncxToken/section-2/private_sale';
import RoadmapSlider from "../../components/ncxToken/round_slider/roadmap-slider";

function NCXTokenPage(){
    return(
        <div id="ncx_token_Page">
            <NCXTokenHeader />
            <FirstSection />
            <SecondSection />
            <ThirdSectionTokenFeatures />
            <CEXDEXTable />
            <NCXTPresale />
            <SixthVideoSection />
            <FourthSectionTokenAllocation />
            <RoadmapSlider />
            <NCXTokenFooter />
        </div>
    )
}

export default NCXTokenPage;