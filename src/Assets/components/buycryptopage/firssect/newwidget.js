import { EconomicCalendar } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";
import { ForexCrossRates } from "react-ts-tradingview-widgets";
// import TestWidget from './test';


function NCXWidget()
{
    return(
        <div className="economic_calendar">
            <div className="container">
            {/* <EconomicCalendar colorTheme="light" height={800} width="100%" locale="en" currencyFilter="USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,DEM,MXN,ESP,GBP" importanceFilter="-1,0,1"></EconomicCalendar> */}

            {/* <MarketData colorTheme="light" width="100%" height={800} locale="en"></MarketData> */}

            <MarketOverview 
                colorTheme="light" 
                height={800} 
                width="100%" 
                dateRange="12M" 
                showChart="true" 
                // showSymbolLogo="true" 
                showFloatingTooltip="true" 
                plotLineColorFalling="rgba(152, 0, 255, 1)" 
                plotLineColorGrowing="rgba(152, 0, 255, 1)" 
                gridLineColor="rgba(240, 243, 250, 0)" 
                scaleFontColor="rgba(106, 109, 120, 1)" 
                belowLineFillColorGrowing="rgba(180, 167, 214, 0.12)" 
                belowLineFillColorFalling="rgba(180, 167, 214, 0.12)" 
                belowLineFillColorGrowingBottom="rgba(41, 98, 255, 0)" 
                belowLineFillColorFallingBottom="rgba(41, 98, 255, 0)" 
                symbolActiveColor="rgba(180, 167, 214, 0.12)"
                // tabs={"indices, futures"}
                showSymbolLogo={"INDEX:DEU40, INDEX:NKY"}
            >
            </MarketOverview>

            {/* <TestWidget /> */}

            {/* <StockMarket colorTheme="light" height={800} width="100%"></StockMarket>

            <ForexCrossRates colorTheme="light" height={800} width="100%"></ForexCrossRates> */}
            </div>
        </div>
    )
}

export default NCXWidget;