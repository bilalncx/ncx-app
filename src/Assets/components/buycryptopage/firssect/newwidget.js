import { EconomicCalendar } from "react-ts-tradingview-widgets";

function NCXWidget()
{
    return(
        <div className="economic_calendar">
            <div className="container">
            <EconomicCalendar colorTheme="light" height={800} width="100%" locale="en" currencyFilter="USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,DEM,MXN,ESP,GBP" importanceFilter="-1,0,1"></EconomicCalendar>
            </div>
        </div>
    )
}

export default NCXWidget;