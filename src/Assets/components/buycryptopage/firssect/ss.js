import { Title } from "@mui/icons-material";
import React from "react";
import {MarketOverview} from "react-ts-tradingview-widgets";

function MYAPP()
{
    // const [tabs, setTabs] = React.useState(0);
    
    // const addSymbol = () => {
    //     let test = [...tabs];
    //     test[0].symbols.push({s: "NASDAQ:AAPL", d: "UK 100"});
    //     setTabs(test);
    // };

    return(
        <div>
            <MarketOverview 
                colorTheme="light" 
                height={800} 
                width="100%" 
                dateRange="12M" 
                showChart="true" 
                showSymbolLogo="false"
                symbol="NASDAQ:AAPL"
            >
            </MarketOverview>
        </div>
    )
}

export default MYAPP;