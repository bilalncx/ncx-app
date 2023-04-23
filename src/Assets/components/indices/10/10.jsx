import React from "react";
import './10.css';
import Banner1 from '../../../images/ind_baner1.png';
import Banner2 from '../../../images/ind_baner2.png';
import Button from "@mui/material/Button";

function BannerSection()
{
    return(
        <div className="ind__banner">
            <div className="container">
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
export default BannerSection;