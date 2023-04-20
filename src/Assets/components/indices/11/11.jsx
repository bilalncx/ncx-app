import React from "react";
import './11.css';
import {ReactComponent as DropIcon} from '../../../images/ind_faq_icon.svg';

function IndicesFAQ()
{
    return(
        <div className="ind__fq">
            <div className="container">
                <h1 className="fg__rer">FAQ</h1>
                <div className="accord">
                    <details>
                        <summary>What are the steps involved in Derivatives Trading?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <ul>
                                <li>Open the account</li>
                                <li>Complete KYC</li>
                                <li>Deposit funds</li>
                                <li>Research the markets</li>
                                <li>Place a trade</li>
                                <li>Monitor your trade</li>
                                <li>Close your trade</li>
                                <li>Earn a profit or loss</li>
                                <li>Withdraw funds from your trading to spot wallet on NCX</li>
                                <li>Find your next trading opportunity</li>
                           </ul>
                        </div>
                    </details>
                    <details>
                        <summary>How long do Derivatives trade transactions take?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>Transactions can take anywhere from a seconds to a few minutes, depending on the size and complexity of the trade. In general, however, NCX executes trades almost instantly. This is one of the major benefits of trading derivatives on NCX – it allows traders to capitalise on short-term market movements without having to wait for the flow of money as their trades to settle.</p>
                        </div>
                    </details>
                    <details>
                        <summary>How do I calculate the profit or loss of a trade?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>To calculate the profit or loss of a trade, you need to take into account</p>
                           <p>The size of the contract, <span>The underlying asset's price movement The spread.</span></p>
                           <p>To calculate the P&L of a long position, you subtract the entry price from the exit price, and then multiply this by the number of contracts you traded.</p>
                           <p>To calculate the P&L of a short position, you subtract the exit price from the entry price, and then multiply this by the number of  contracts you traded.</p>
                           <p>NOTE: In each example, the spreads are reflected in the buy and sell prices.</p>
                        </div>
                    </details>
                    <details>
                        <summary>What strategies are commonly used in Derivatives Trading?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>Common strategies used by traders include trend following, scalping, and contrarian trading. Trend following involves traders taking a position in the direction of the overall trend. Scalping involves trying to take small profits on a regular basis. Contrarian trading involves taking a position against the market trend.</p>
                        </div>
                    </details>
                    <details>
                        <summary>What is Forex trading?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>Forex stands for foreign exchange and it is the name given to the currency market/foreign exchange market on which FX traders buy and sell currencies. A currency rises or falls in value relative to another currency when Forex trades happen, so the price is shown as a currency quote. You will have seen these same quotes at the foreign exchange office if traveling overseas.</p>
                           <p>The change in the quote happens when currency conversion takes place. Foreign currencies are converted millions of times every day creating the volatility that provides the opportunity to profit in Forex.</p>
                           <p>One of the most challenging aspects of learning how to invest in Forex is knowing when to buy and sell currencies. There are multiple factors that affect currency prices that Forex traders looking to make more informed decisions can watch out for. For example, the exchange rate between the United States and other major economies is known as major currencies or major Forex pairs. They are affected by the economic calendar in their region.</p>
                        </div>
                    </details>
                    <details>
                        <summary>What are the advantages of Forex Trading?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p><strong>Go long or short.</strong> When you trade Forex you can make a profit whether markets are going up or down.</p>
                            <p><strong>Trade 24 hours a day.</strong> Forex market hours are open 24 hours a day which gives you the flexibility to trade around the clock.</p>
                            <p><strong>High liquidity.</strong> Forex markets are the most liquid markets in the world. This means that that is a large number of buyers and sellers that are looking to place a trade at any given time. This high liquidity means that Forex transactions can be completed swiftly and easily.</p>
                            <p><strong>High Volatility.</strong> Volatility in Forex Markets: Since there is a high volume of currency trades each day the price movements of some currencies can be very volatile. While this volatility can be advantageous since you can trade price movements in any direction it's also important to employ risk management tools to protect yourself against losses.</p>
                            <p><strong>Trade on leverage.</strong>FlowBank gives you the opportunity to trade Forex with CFDs. When trading CFDs, investors are able to profit from both rising and falling markets. This is due to the ability to both buy (go long) and sell (go short) when trading contracts for difference, providing traders with additional ways to earn a profit when compared with traditional methods of investment.</p>
                            <p><strong>Extensive choice of currency pairs.</strong>A wide range of currency pairs: Forex trading gives you the opportunity to trade global currencies and react to current market events.</p>
                        </div>
                    </details>
                    <details>
                        <summary>How do Derivatives work?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>When you trade Derivatives, you don’t actually own the underlying asset. Instead, you are entering into a financial contract to speculate on how high or low the price of the asset will go. If the price moves in your favour, you will make a profit. The risk is that it can also move against you so you will have a losing trade.</p>
                            <p>Derivatives are a leveraged product, so you only need to put down a small deposit of money (margin) into your trading account to open a position. Using margin gives you the potential to make a much larger profit (or loss) than if you were to trade the asset outright. The use of leverage means a higher risk of losing more than your initial deposit.</p>
                        </div>
                    </details>
                    <details>
                        <summary>Which assets can I trade?
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>There are seven asset classes that can be traded: Stocks, Indices, ETF's, Forex and Commodities (Oil, Gas, Metals etc). Each asset class has its benefits and carries its own risk to your trading capital.</p>
                            <p>Indices Derivatives allow you to trade on the movement of a basket of shares, rather than just one stock.</p>
                            <p>Forex allows you to trade on the movement of currency pairs and can be a great way to hedge against movements in the real-world currency markets.</p>
                            <p>Commodities Derivatives allow you to trade on the movement of underlying commodity prices such as Oil and Gas and can be a great way to diversify your portfolio.</p>
                            <p>Stocks Derivatives allow you to trade on the movement of individual shares and can be a great way to get exposure to the underlying companies.</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
export default IndicesFAQ;