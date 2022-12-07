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
        answer: 'NCX strongly believes that the future of Cryptocurrencies  is in Decentralisation, hence users should always keep the custody of their assets. However some tools such us buying and selling cryptocurrency with fiat, advanced trading tools and features, fiat/crypto trading pairs, margin trading and liquidity are only available on Centralised Exchange. Users are advised to only move the assets to the trading account only to use the features & withdraw to their non-custodial wallets right after and do not store their funds on the trading account. Our DEX does not require assets moved to the platform, just connect your wallet and Swap, Stake, Farm Yield on thousands of tokes across 5 leading blockchains including Binance Smart Chain, Ethereum, Solana, Fantom and Polygon',
    },
    {
        question: 'Can I Buy/Sell Crypto with Fiat?',
        answer: 'Yes, this is one of the main feats of the platform, the team is working towards accepting fiat deposits and withdrawals across the globe including SWIFT Bank Transfers, P2P, Credit/Debit Cards and multiple Payment Gateways depending on the region and the local currency',
    },
    {
        question: 'What are benefits of using NCX vs other Crypto Exchnages?',
        answer: 'Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here.',
    },
    {
        question: 'How can I earn NCXX Tokens?',
        answer: 
        <div>
            <p>NCX is on target to reach 500,000 users by the end of 2023, to achieve our goal we introduced a number of ways to 
                grow and reward NCX community and built a scalable ecosystem. As a part of our marketing campaign:</p>
            <ul className='faq_li'>
                <li>Newly registered users will receive 10,000 NCXX tokens airdrop as a sign-up bonus</li>
                <li>Earn 10,000 NCXX tokens with each new referral with NCX Referral Program, both the referred user and the one referring will receive the 10,000 NCXX tokens airdrop, one as referral another as sign-up bonus </li>
                <li>Stake NCXX on NCX DeFi Staking & Liquidity Pools</li>
                <li>Farm Yield and earn NCXX on NCX DeFi Yield Farms</li>
                <li>Earn rewards in NCXX Tokens by completing task on the platform and reaching trading volumes, receive cash back on trading fees in NCXX</li>
            </ul>
        </div>,
    }
]


export default Accordian