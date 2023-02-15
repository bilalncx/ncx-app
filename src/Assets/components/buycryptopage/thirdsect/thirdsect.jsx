import { useState } from 'react'
import '../../cardpage/card-faq/faq.css'

function Accordian() {
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }


    return(
        <div id="card-faqss">
            <div className="container">
                <h1 className='freq-ask-ques'>Frequently Asked Questions</h1>
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
        </div>
    )
}

const data = [
    {
        question: 'How long will it take to buy crypto?',
        answer: 
        <div className="faq-ans">
            <p>With Instant Buy/Sell, your order goes through in a few seconds. We're reliable like that!</p>
        </div>
    },
    {
        question: 'Are my funds safe?',
        answer: 
        <div className="faq-ans">
            <p>Yes, they are. All funds are secured with top-notch encryption and wallet storage.</p>
        </div>
    },
    {
        question: 'Can I use my local currency to buy crypto?',
        answer:
        <div className="faq-ans">
            <p>Yes you can use your local currency to buy crypto. For example, if you are in Nigeria, you can use Naira [NGN] to buy bitcoin or any cryptocurrency.</p>
        </div>
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


export default Accordian