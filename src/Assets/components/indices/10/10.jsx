import React from "react";
import './10.css';
import Banner1 from '../../../images/ind_baner1.png';
import Banner2 from '../../../images/ind_baner2.png';

function BannerSection()
{
    return(
        <div className="ind__banner">
            <div className="container">
                <div className="row_ban">
                    <div className="col">
                        <img src={Banner2} alt="Indices_banner" />
                    </div>
                    <div className="col">
                        <img src={Banner1} alt="Indices_banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSection;