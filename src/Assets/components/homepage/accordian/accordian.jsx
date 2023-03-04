import { useState } from 'react'
import './accordian.css'

function Accordian() {
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
                            <span className={selected === i ? 'svg transform' : 'svg'}>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
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
        question: 'Do I need to keep my Crypto on NCX?',
        answer: 'NCX strongly believes that the future of Cryptocurrencies  is in Decentralisation, hence users should always keep the custody of their assets. However some advanced tools tools and features, fiat/crypto trading pairs, margin and derivatives trading are only available on Centralised Exchange. Users are advised to only move the assets to the trading account necessary for trading & withdraw to their non-custodial wallets right after and do not store their funds on the trading account. Our DEX does not require assets moved to the platform, just connect your wallet and Swap, Stake, Farm Yield on thousands of tokes across 5 leading blockchains including Binance Smart Chain, Ethereum, Polygon, Fantom and Avalanche',
    },
    // {
    //     question: 'Can I Buy/Sell Crypto with Fiat?',
    //     answer: 'Yes, this is one of the main features of the platform, the team is working towards accepting fiat deposits and withdrawals across the globe including SWIFT Bank Transfers, P2P, Credit/Debit Cards and multiple Payment Gateways depending on the region and the local currency',
    // },
    {
        question: 'What are benefits of using NCX vs other Crypto Exchanges?',
        answer: 'NCX is the first all-on-one, Hybrid Platform to combine CEX, DEX and Derivatives Trading of Cryptocurrencies, Stock Market, ETFs, Indexes, Metals, Forex with up to 100x Leverage. Bridging the gap between the DeFi and Centralised Finance, allowing Individuals and Corporate Entities a full spectrum of products, services and applications across Financial Markets, Cryptocurrencies and Decentralised Finance.',
    },
    {
        question: 'What is NCX Trade? How to start trading with up to 100x Leverage?',
        answer: 
        <div>
            <p>Derivatives Trading is available across 500 markets including Crypto Derivatives,  Equities (including US, EU and Asia Stock Markets), ETF’s, Forex, Indices, Metals, Oil and Gas with up to 100x Leverage.</p>
            <p>Simply Sign Up, complete KYC and start trading in minutes. You can top up your Spot wallet on NCX with crypto and covert to USD on the platform then use the available USD for trading by simply moving the necessary USD to and from your Trading Wallet. NCX Trade is a separate APP available on iOS and Android which is linked to your main NCX Account. For advanced security and in compliance with risk management the trading wallets are kept separate from spot wallets on the platform.</p>
        </div>,
    },
    // {
    //     question: 'How can I earn NCX Tokens?',
    //     answer: 'NCX is the first Platform to combine DEX, CEX and Leverage Trading of Assets (Crypto, Forex, Stock Market, ETFs, Indexes, Metals with up to 100x Leverage) all on one, advanced Hybrid Platform. Users can simply connect their non-custodial wallet on DEX, top-up their Spot or Trading Wallet and start trading, NCX doe not charge any Deposit or Withdrawal fees hence allowing customers to move their funds freely to their non-custodial wallets such as Metamask, Trust Wallet etc. preserving the safety of their assets.',
    // },
    {
        question: 'How can I earn NCX Tokens?',
        answer: 
        <div>
            <p>NCX is on target to reach 1,000,000 users by the end of 2023, to achieve our goal we’ve introduced a number of initiatives to grow a strong community and ecosystem through NCX Rewards Program:</p>
            <ul className='faq_li'>
                <li>Newly registered users will receive 10,000 NCX Tokens airdrop as a sign-up bonus</li>
                <li>Earn 2,500 NCXT with each new referral with NCX Referral Program, the referred user will receive the 10,000 NCXT SignUp Bonus Airdrop</li>
                <li>Earn rewards in NCX Tokens by completing tasks and reaching trading volumes, receive cash back on trading fees through NCX Rewards Programme</li>
                <li>Stake NCXT on NCX DEX and early daily interest</li>
                <li>Farm Yield and earn NCXT on NCX DEX Yield Farms and Liquidity Pools</li>
            </ul>
        </div>,
    },
]


export default Accordian