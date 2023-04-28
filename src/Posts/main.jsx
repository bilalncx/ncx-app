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
                        <Button href="/latest-articles">Latest Articles</Button>
                        <Button href="/post-crypto">Crypto</Button>
                        <Button href="/post-markets">Markets</Button>
                        <Button href="/post-forex">Forex</Button>
                        <Button href="/post-commodities">Commodities</Button>
                        <Button href="/post-indices">Indices</Button>
                    </div>
                </div>
            </div>

            <PostListingSection />

            <MyFooter />
            
        </div>
    )
}
export default NCXNewBlogs;