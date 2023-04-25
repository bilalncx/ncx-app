import React from "react";
import './ban.css';
import Button from "@mui/material/Button";

function HomeBannerSection()
{
    return(
        <div id="bannss" className="ind__banner">
            <div className="container">
                <h1>Buy & Sell Crypto Instantly</h1>
                <p>Buy Crypto in just few clicks using Credit/Debit Card, Apple Pay, Google Pay and Wire Transfer</p>
                <div className="btn__dtr">
                    <Button href="/buy-crypto" className="byyy">Buy Crypto</Button>
                    <Button href="/markets" className="marr">Markets</Button>
                </div>
                <div className="row_ban">
                    <div className="col banner_1">
                        <div className="ccc_tt">
                            <p>Trade Metals on NCX with spreads as low as 0.9 on Gold</p>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer">Sign Up</Button>
                        </div>
                    </div>
                    <div className="col banner_2">
                        <div className="ccc_tt">
                            <p>Trade Stocks, World Indices and ETFs across core and emerging markets</p>
                            <Button href="https://my.ncx.cx/en/register" target="_blank" rel="noreferrer">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeBannerSection;