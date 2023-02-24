import { useState } from 'react'
import './whatwe.css'
import { ReactComponent as APIDropDown} from '../../../images/ncxapi-accordsvg.svg';

function APIAccordian() {
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }


    return(
        <div className="accordian_wrapper">
            <div className="accordian">
                {data.map((item, i) => (
                    <div className="item">
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span className={selected === i ? 'apisvg transform' : 'apisvg'}>
                                <APIDropDown />
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'Market',
        answer: 'A market order is an order to immediately buy or sell at the best available price. It needs liquidity to be filled, meaning that it is executed based on the limit orders already placed on the order book. If you want to buy or sell instantly at the current market price, setting a market order is your best option.',
    },
    {
        question: 'Limit',
        answer: 'A limit order is an order with a specific buy or sell price. To place a limit order, you need to set a maximum or minimum price you’re willing to buy or sell an asset. Your order will then be placed on the order book and will only be executed if the market price reaches the limit price (or better). Unlike market orders, where trades are executed instantly at the current price, a limit order gives you more control over the execution price. As limit orders are automated, you don’t have to watch the market 24/7 or worry about missing a buy or sell opportunity while you sleep. However, there is no guarantee that your limit order will be executed. If the market price never reaches the limit price, your trade will remain unfilled on the order book. Typically, a limit order can be placed for up to a few months, but it depends on the crypto exchange you are using.',
    },
    {
        question: 'Stop Limit',
        answer: 'A stop-limit order combines a stop trigger and a limit order. Stop-limit orders allow traders to set the minimum amount of profit they’re happy to take or the maximum they’re willing to spend or lose on a trade. Once you set a stop-limit order and the trigger price is reached, a limit order will be placed automatically, even if you are logged out or offline. You can strategically place stop-limit orders by considering resistance and support levels and the asset’s volatility. In a stop-limit order, the stop price is the trigger price for the exchange to place a limit order. The limit price is the price at which your order will be placed. You can customize the limit price, which is usually set higher than the stop price for a buy order and lower for a sell order. This difference accommodates market price changes between the time the stop price triggers and the limit order is placed.',
    },
    {
        question: 'Trailing Stop',
        answer: 'A trailing stop order is very similar to a stop-limit order, but a trailing stop order’s trigger price will follow your position when the market moves favorably, and will close the position if the market moves adversely against you. With a Spot trailing stop order, you can place a pre-set order at a specific percentage away from the market price. When the price moves favorably, a trailing stop order locks in profit by enabling a trade to remain open and continue to profit as long as the price moves in a favorable direction. The trailing stop does not move back in the other direction. When the price moves in the opposite direction by a specified percentage, the trailing stop order will be executed as a limit order. When a trade does not move in a favorable direction, a trailing stop order can help you minimize losses and protect gains.',
    },
    {
        question: 'OCO',
        answer: 'An OCO, or “One Cancels the Other” order allows you to place two orders at the same time. It combines a limit order, with a stop-limit order, but only one of the two can be executed. In other words, as soon as one of the orders get partially or fully filled, the remaining one will be canceled automatically. Note that manually canceling one of the orders will also cancel the other one. When trading you can use OCO orders as a basic form of trade automation. This feature gives you the option of placing two limit orders simultaneously, which may come handy for taking profit and minimizing potential losses.',
    },
    // {
    //     question: 'How can I earn NCXX Tokens?',
    //     answer: 
    //     <div>
    //         <p>NCX is on target to reach 500,000 users by the end of 2023, to achieve our goal we introduced a number of ways to 
    //             grow and reward NCX community and built a scalable ecosystem. As a part of our marketing campaign:</p>
    //         <ul className='faq_li'>
    //             <li>Newly registered users will receive 10,000 NCXX tokens airdrop as a sign-up bonus</li>
    //             <li>Earn 10,000 NCXX tokens with each new referral with NCX Referral Program, both the referred user and the one referring will receive the 10,000 NCXX tokens airdrop, one as referral another as sign-up bonus </li>
    //             <li>Stake NCXX on NCX DeFi Staking & Liquidity Pools</li>
    //             <li>Farm Yield and earn NCXX on NCX DeFi Yield Farms</li>
    //             <li>Earn rewards in NCXX Tokens by completing task on the platform and reaching trading volumes, receive cash back on trading fees in NCXX</li>
    //         </ul>
    //     </div>,
    // }
]


export default APIAccordian;