import { React, useState} from "react";
import './second.css';

function MarketMakerDiscountSection()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div className="market-discount">
            <div className="container">
                <h1>Market Maker <span>Fees Discount</span></h1>
                <div className="market-tabs-btn">
                    <button
                        className={toggleState === 1 ? "market-tabs active" : "market-tabs"}
                        onClick={() => toggleTab(1)}
                    >
                    Sport Market Maker
                    </button>
                    <button
                        className={toggleState === 2 ? "market-tabs active" : "market-tabs"}
                        onClick={() => toggleTab(2)}
                    >
                    Futures Market Maker
                    </button>
                </div>
                <div className="market-content-tabs">
                    <div id="market-1" className={toggleState === 1 ? "market-content active" : "market-content"}>
                        <div className="hsd11">
                            <h3>Normal Market Fee Rate</h3>
                            <p>207</p>
                        </div>
                        <p>Requirements of Ranking: <span>Last--month spot trading volume ≥ 5,000,000 USD</span></p>
                        <div className="discount_table">
                            <div className="head_table">
                                <div className="col"><p>Level</p></div>
                                <div className="col"><p>Ranking</p></div>
                                <div className="col"><p>Maker</p></div>
                                <div className="col"><p><span>NCX</span>Maker</p></div>
                                <div className="col"><p>Taker</p></div>
                                <div className="col"><p><span>NCX</span>Maker</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV5</p></div>
                                <div className="col"><p>≤10%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV4</p></div>
                                <div className="col"><p>≤25%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV3</p></div>
                                <div className="col"><p>≤45%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV2</p></div>
                                <div className="col"><p>≤70%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV1</p></div>
                                <div className="col"><p>Last 30%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                            <div className="table_body_row boder-color">
                                <div className="col"><p>LV0</p></div>
                                <div className="col"><p>/</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                                <div className="col"><p>0.0400%</p></div>
                            </div>
                        </div>
                        <div className="fees_details">
                            <h4>Fees Level Details</h4>
                            <p>1. Individual traders or professional trading agencies with a monthly trading volume of 5,000,000 USD in spot/futures markets are welcome to apply and become NCX Market Maker.</p>
                            <p>2. According to the ranking of last-month trading volume, the level of every Market Maker is updated on a monthly basis, and all users with a monthly trading volume of 5,000,000 USD in spot/futures markets are included in the ranking.</p>
                            <p>3. For Market Makers who didn't meet the minimum requirement for 1 or 2 consecutive months, they will be retained LV1. If underperformed for 3 consecutive months, their Market Making status will no longer be valid.</p>
                        </div>
                        <div className="hsd13">
                            <h3>Normal Market Fee Rate</h3>
                            <p>Since AMM market adopts an independent fees system and all Market makers enjoy special fee rates. The fee rate details are as follows:</p>
                        </div>
                        <div className="amm_markettable">
                            <div className="amm_head">
                                <div className="col"><p>User Type</p></div>
                                <div className="col"><p>Normal AMM Market Fee Rate</p></div>
                                <div className="col"><p>Stable AMM Market Fee Rate</p></div>
                            </div>
                            <div className="amm_body_row">
                                <div className="col"><p>NCX Users</p></div>
                                <div className="col"><p>0.30%</p></div>
                                <div className="col"><p>0.10%</p></div>
                            </div>
                            <div className="amm_body_row">
                                <div className="col"><p>Market Maker</p></div>
                                <div className="col"><p>0.15%</p></div>
                                <div className="col"><p>0.05%</p></div>
                            </div>
                        </div>
                    </div>
                    <div id="market-1" className={toggleState === 2 ? "market-content active" : "market-content"}>
                    <div className="hsd11">
                            <h3>Market Maker</h3>
                            {/* <p>207</p> */}
                        </div>
                        <p>Requirements of Ranking: <span>Trading volume ≥ 5,000,000 USD</span></p>
                        <div className="discount_table">
                            <div className="head_table">
                                <div className="col"><p>Level</p></div>
                                <div className="col"><p>Ranking</p></div>
                                <div className="col"><p>Maker</p></div>
                                <div className="col"><p>Taker</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV5</p></div>
                                <div className="col"><p>≤10%</p></div>
                                <div className="col"><p>-0.0150%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV4</p></div>
                                <div className="col"><p>≤25%</p></div>
                                <div className="col"><p>-0.0100%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV3</p></div>
                                <div className="col"><p>≤45%</p></div>
                                <div className="col"><p>-0.0050%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV2</p></div>
                                <div className="col"><p>≤70%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0250%</p></div>
                            </div>
                            <div className="table_body_row">
                                <div className="col"><p>LV1</p></div>
                                <div className="col"><p>Last 30%</p></div>
                                <div className="col"><p>0.0000%</p></div>
                                <div className="col"><p>0.0300%</p></div>
                            </div>
                            <div className="table_body_row boder-color">
                                <div className="col"><p>LV0</p></div>
                                <div className="col"><p>/</p></div>
                                <div className="col"><p>0.0300%</p></div>
                                <div className="col"><p>0.0500%</p></div>
                            </div>
                        </div>
                        <div className="fees_details">
                            <h4>Fees Level Details</h4>
                            <p>1. Individual traders or professional trading agencies with a monthly trading volume of 5,000,000 USD in spot/futures markets are welcome to apply and become NCX Market Maker.</p>
                            <p>2. According to the ranking of last-month trading volume, the level of every Market Maker is updated on a monthly basis, and all users with a monthly trading volume of 5,000,000 USD in spot/futures markets are included in the ranking.</p>
                            <p>3. For Market Makers who didn't meet the minimum requirement for 1 or 2 consecutive months, they will be retained LV1. If underperformed for 3 consecutive months, their Market Making status will no longer be valid.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MarketMakerDiscountSection;