import { React, useState} from "react";
import '../../../pages/support/support.css';
import MyHeader from '../../../components/header/header';
import MyFooter from '../../../components/footer/footer';
import SearchModal from '../../../components/support/autosearch';
import ArticleSlider from '../article_slide';
import NCXLogo from '../../../images/ncx-black-logo.svg';
import Telegram from '../../../components/footer/telegram.svg';
import Twitter from '../../../components/footer/twitter.svg';
import Instagram from '../../../images/instagram.svg';
import { ReactComponent as CardArrow } from '../../../images/ncx-cardarrow.svg';
import SpotTrading1 from '../../../images/spot-trading-1.png';
import SpotTrading2 from '../../../images/spot-trading-2.png';
import SpotTrading3 from '../../../images/spot-trading-3.png';
import SpotWeb1 from '../../../images/spot-web1.png';
import SpotWeb2 from '../../../images/spot-web2.png';
import SpotWeb3 from '../../../images/spot-web3.png';
import SpotWeb4 from '../../../images/spot-web4.png';
import SpotWeb5 from '../../../images/spot-web5.png';
import SpotWeb6 from '../../../images/spot-web6.png';



function SupportPageSet()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div id="support_faqdetails">

            <MyHeader />

            <SearchModal />

            <div id="insight_page" className="details_faqs">
                <div className="container">
                    <div className="row">
                        <div className="col fest">
                            <div className="support_leftbar">
                                <div className="ncx-trends">
                                    <img className="ncx-blacklogo" src={NCXLogo} alt="ncx-blacklogo"/>
                                    <p>FAQs</p>
                                </div>

                                <div className="faq_nav">
                                    <a href="/faq">FAQs</a>
                                    <div className="arr_sv">
                                        <CardArrow />
                                    </div>
                                    <p>Spot Trading</p>
                                </div>

                                <ul className="details_faqul">
                                    <li>
                                        <button
                                            className={toggleState === 1 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(1)}
                                        >
                                        Order Types
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 2 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(2)}
                                        >
                                        How to Trade Spot on Web
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 3 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(3)}
                                        >
                                        How to Trade Spot on App
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 4 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(4)}
                                        >
                                        What is Taker and Maker?
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={toggleState === 5 ? "faq-tabs active" : "faq-tabs"}
                                            onClick={() => toggleTab(5)}
                                        >
                                        Definitions and Calculation of Last Trade Price, Index Price and Marking Price
                                        </button>
                                    </li>
                                </ul>

                                <h1 className="support_ticket">Open Support Ticket</h1>
                                <p className="support_txt">Open Support Ticket via Support Chat section in your NCX Dashboard or reach us at <a href="mailto:support@ncx.cx">support@ncx.cx</a></p>
                                <a className="support_signin" href="#">Sign In</a>

                                <div className="social-icons">
                                    <div class="icons"><a href="#"><img src={Telegram} alt="NCX" title="Telegram"/></a></div>
                                    <div class="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Twitter} alt="NCX" title="Twitter" /></a></div>
                                    <div class="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="NCX" title="Instagram" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col sect">
                            <div className={toggleState === 1 ? "sprt-content active" : "sprt-content"}>
                                <h1>Different Order Types in Spot Trading</h1>
                                <p>NCX offers different order types for you to use in Spot Trading. You can use them to set your trading strategies and trade efficiently. Let’s look at the common order types in NCX Spot Trading.</p>
                                <p><strong>What is a market order</strong></p>
                                <p>A market order is executed at the current market price as quickly as possible when you place the order. You can use it to place both buy and sell orders.</p>
                                <p>You can select [Amount] or [Total] to place a buy or sell market order. For example, if you want to buy a certain quantity of BTC, you can enter the amount directly. But if you want to buy BTC with a certain amount of funds, such as 10,000 USDT, you can use [Total] to place the buy order.</p>
                                <img src={SpotTrading1} alt="ncx-spot-trading" />
                                <p><strong>What is a limit order?</strong></p>
                                <p>A limit order is an order that you place on the order book with a specific limit price. It will not be executed immediately like a market order. Instead, the limit order will only be executed if the market price reaches your limit price (or better). Therefore, you may use limit orders to buy at a lower price or sell at a higher price than the current market price.</p>
                                <p>For example, you place a buy limit order for 1 BTC at $60,000, and the current BTC price is 50,000. Your limit order will be filled immediately at $50,000, as it is a better price than the one you set ($60,000).</p>
                                <p>Similarly, if you place a sell limit order for 1 BTC at $40,000 and the current BTC price is $50,000. The order will be filled immediately at $50,000 because it is a better price than $40,000.</p>
                                <img src={SpotTrading2} alt="ncx-spot-trading" />
                                <p><strong>What is a stop-limit order?</strong></p>
                                <p>A stop-limit order has a stop price and a limit price. You can set the minimum amount of profit you’re happy to take or the maximum you’re willing to spend or lose on a trade. When the trigger price is reached, a limit order will be placed automatically.</p>
                                <p>Stop-limit orders are good tools for limiting the losses that may incur in a trade. For example, BTC is trading at $40,000, and you set up a stop-limit order at a stop price of $39,500 and a limit price of $39,000. A limit order at $39,000 will be placed when the price drops from $40,000 to $39,500.</p>
                                <img src={SpotTrading3} alt="ncx-spot-trading" />
                                <p><strong>What is an OCO (One Cancels the Other) order?</strong></p>
                                <p>A One Cancels the Other (OCO) order, is a combination of a limit order with a stop-limit order. You place two orders at the same time, but as soon as one is triggered, the other order is canceled. Therefore, only one of the orders can be executed.</p>
                                <p>For example, BTC is at $40,000. You can use an OCO order to buy 1 BTC when the price reaches $39,000 or sell it when the price rises to $41,000. One of the orders will be executed first, meaning that the second one is automatically canceled.</p>
                                <p><strong>What is a trailing stop order?</strong></p>
                                <p>A trailing stop order lets you place a pre-set order at a specific percentage away from the market price. It is especially useful when the market swings, which can help you limit the loss and protect gains when a trade does not move in a favorable direction.</p>
                                <p>Please note that the trailing stop order does not move back in the other direction. When the price moves in the opposite direction by a specified percentage, it will close or exit the trade at market price.</p>
                            </div>
                            <div className={toggleState === 2 ? "sprt-content active" : "sprt-content"}>
                                <h1>How to Trade Spot on NCX</h1>
                                <p>A spot trade is a simple transaction between a buyer and a seller to trade at the current market rate, known as the spot price. The trade takes place immediately when the order is fulfilled.</p>
                                <p>Users can prepare spot trades in advance to trigger when a specific (better) spot price is reached, known as a limit order. You can make spot trades on NCX through our trading page interface.</p>
                                <img src={SpotWeb1} alt="ncx-spot-trading" />
                                <h3>What is a limit order?</h3>
                                <ol>
                                    <li>Select Trading Pair</li>
                                    <li>Trading View Graphs</li>
                                    <li>Sell Order Book</li>
                                    <li>Buy Order Book</li>
                                    <li>Favorite Trading Pairs</li>
                                    <li>Assets</li>
                                    <li>Type of order: Limit/Market/Stop-limit/OCO(One-Cancels-the-Other)</li>
                                    <li>Select Trading Pair</li>
                                    <li>Place Buy Order</li>
                                    <li>Place Sell Order</li>
                                    <li>Your  Order History</li>
                                    <li>Menu</li>
                                    <li>Custom Workspaces (Customise your Trading Interface)</li>
                                    <li>Customise your Trading Interface - Add Widget</li>
                                    <li>Help and Tips</li>
                                    <li>Notifications</li>
                                    <li>Reset Trading Widgets to Default</li>
                                    <li>Settings</li>
                                    <li>Sign Out</li>
                                </ol>
                                <p>Custom Workspaces (Customise your Trading Interface) </p>
                                <img src={SpotWeb2} alt="ncx-spot-trading" />
                                <p> Customise your Trading Interface - Add Widget</p>
                                <img src={SpotWeb3} alt="ncx-spot-trading" />
                                <p>Help and Tips</p>
                                <img src={SpotWeb4} alt="ncx-spot-trading" />
                                <p>Notifications</p>
                                <img src={SpotWeb5} alt="ncx-spot-trading" />
                                <p>Reset Trading Widgets to Default </p>
                                <img src={SpotWeb6} alt="ncx-spot-trading" />
                            </div>
                            <div className={toggleState === 3 ? "sprt-content active" : "sprt-content"}>
                                <h2>How to Trade Spot on NCX App</h2>
                            </div>
                            <div className={toggleState === 4 ? "sprt-content active" : "sprt-content"}>
                                <h1>What is Taker and Maker?</h1>
                                <p>Note: Trading fees on NCX are applied only to trades, not orders.</p>
                                <h3>1. Taker:</h3>
                                <p>When you place an order that trades immediately, by filling partially or fully, before going on the order book, those trades will be "taker" trades.</p>
                                <p>Trades from Market orders are always Takers, as Market orders can never go on the order book. These trades are "taking" volume off of the order book, and therefore called the "taker."</p>
                                <h3>2. Maker:</h3>
                                <p>When you place an order that goes on the order book partially or fully (such as a limit order placed via the trading screen on ncx.cx), any subsequent trades coming from that order will be as a “maker.”</p>
                                <p>These orders add volume to the order book, helping to "make the market," and are therefore termed the "maker" for any subsequent trades.</p>
                            </div>
                            <div className={toggleState === 5 ? "sprt-content active" : "sprt-content"}>
                                <h1>Definitions and Calculation of Last Trade Price, Index Price and Marking Price</h1>
                                <div className="calculation_table">
                                    <table>
                                        <tr>
                                            <th><p><strong>Type</strong></p></th>
                                            <th><p><strong>Function</strong></p></th>
                                            <th><p><strong>Calculation</strong></p></th>
                                        </tr>
                                        <tr>
                                            <td><p><strong>Last Trade Price</strong></p></td>
                                            <td><p>Display the latest traded price of the order book on a real-time basis</p></td>
                                            <td><p>The latest traded price of the order book on a real-time basis</p></td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>Index Price</strong></p></td>
                                            <td><p>Reflect the fail last traded price of cryptocurrency calculated with reference to its USD or USDT price on multiple exchanges</p></td>
                                            <td><p>Last traded prices of three of more major exchange as the weighted index constituents for each cryptocurrency; measures introduced to handle abnormal situations and control fluctuation within a normal range</p></td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>Marking Price <span> (Reasonable Price)</span></strong></p></td>
                                            <td><p>To avoid unnecessarily forced liquidation of high-leverage products. Without this system, the marking price may deviate unnecessarily from the price index due to manipulated market or lack of liquidity, thus leading to unnecessarily forced liquidation.</p></td>
                                            <td><p><strong>Marking price (Reasonable price) = index-based price * (1 + basis rate of funding cost)</strong></p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col thest">
                            <ArticleSlider />
                        </div>
                    </div>
                </div>
            </div>

            <MyFooter />

        </div>
    )
}

export default SupportPageSet;