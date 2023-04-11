import { EconomicCalendar } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";
import { ForexCrossRates } from "react-ts-tradingview-widgets";

function NCXWidget()
{
    return(
        <div className="economic_calendar">
            <div className="container">
            <EconomicCalendar colorTheme="light" height={800} width="100%" locale="en" currencyFilter="USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,DEM,MXN,ESP,GBP" importanceFilter="-1,0,1"></EconomicCalendar>

            <MarketData colorTheme="light" width="100%" height={800} locale="en"></MarketData>

            <MarketOverview colorTheme="light" height={800} width="100%" showFloatingTooltip></MarketOverview>

            <StockMarket colorTheme="light" height={800} width="100%"></StockMarket>

            <ForexCrossRates colorTheme="light" height={800} width="100%"></ForexCrossRates>
            </div>
        </div>
    )
}

export default NCXWidget;