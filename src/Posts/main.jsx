import React from "react";
import './style.css';
import Button from "@mui/material/Button";
import MyHeader from '../Assets/components/header/header';
import MyFooter from '../Assets/components/footer/footer';
import PostListingSection from "./listing_page";

function NCXNewBlogs()
{
    return(
        <div id="ncx__blgg">

            <MyHeader />

            <div className="blo__btns">
                <div className="container">
                    <h1>Market Insights</h1>
                    <div className="blg__btn">
                        <Button href="#">Latest Articles</Button>
                        <Button href="#">Crypto</Button>
                        <Button href="#">Markets</Button>
                        <Button href="#">Forex</Button>
                        <Button href="#">Commodities</Button>
                        <Button href="#">Indices</Button>
                    </div>
                </div>
            </div>

            <PostListingSection />

            <MyFooter />
            
        </div>
    )
}
export default NCXNewBlogs;