import React from "react";
import './404.css';
import NotfoundImage from '../../images/ncx_notfound.webp';

function NotFoundPageSection()
{
    return(
        <div id="pagenot_found">
            <div className="contfound">
                <img src={NotfoundImage} alt="ncx-not-found"/>
                <h1>Oops, something went wrong</h1>
                <p>Sorry, we couldn't find your page</p>
                <a href="https://ncx.cx">Back to Home</a>
            </div>
        </div>
    )
}

export default NotFoundPageSection;