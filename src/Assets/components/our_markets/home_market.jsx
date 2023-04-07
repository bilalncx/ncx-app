import React from "react";
import './home_component';

function HomePageMarketSection()
{
    return(
        <div className="HomeMrketSect">
            <div class="d-flex justify-content-center">
            <div class="spinner-border" 
                 role="status" id="loadingssss">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <h1>Registered Employees</h1>
        <table id="employees"></table>
        </div>
    )
}
export default HomePageMarketSection;