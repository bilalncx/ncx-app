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
        answer: 'Hey This is Market',
    },
    {
        question: 'Limit',
        answer: 'Hey this is limit',
    },
    {
        question: 'Stop Limit',
        answer: 'Hey, This is Stop Limit',
    },
    {
        question: 'Trading Shop',
        answer: 'Hey this is Tading Shop',
    },
    {
        question: 'OCO',
        answer: 'Hey This is OCO',
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