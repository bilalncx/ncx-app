import React from "react";
import './token.css';
import NCXTokenHeader from '../../components/ncxToken/token-header';
import NCXTokenFooter from '../../components/ncxToken/token-footer';
import FirstSection from '../../components/ncxToken/section-1/first';
import SecondSection from '../../components/ncxToken/section-2/first';

function NCXTokenPage(){
    return(
        <div id="ncx_token_Page">
            <NCXTokenHeader />
            <FirstSection />
            <SecondSection />
            <NCXTokenFooter />
        </div>
    )
}

export default NCXTokenPage;