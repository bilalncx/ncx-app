import { useState } from 'react'
import './third.css'
import '../../homepage/accordian/accordian.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/NCX-logo.svg';
import { useTranslation } from "react-i18next";

function Accordian() {

    const { t } = useTranslation();

    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }
    return(
        <div id="trading_solutions">
            <div className="backgrdound-video">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                    preload="auto"
                    poster="https://ncx.cx/images/ncx_line_poster.png"
                    >
                    <source src={BackVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="trading-sol-row">
                    <div className="col">
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div className="ncx-otc">
                                <img className="ncx-whitelogo" src={NCXLogo} alt="ncx-whitelogo" />
                                <p>{t("trading_solutions")}</p>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col">
                        <div className="accordian_maindiv">
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
                </div>
            </div>
        </div>
    )   
}

const data = [
    {
        question: 'Portfolio Margin Account',
        answer: 
        <div>
            <p>NCX portfolio margin is the latest trading system that can consolidate the balances across different trading accounts as one single joint collateral to determine margin balance. It supports margin requirement offsetting to enable greater capital utilization for the user.</p>
        </div>,
    },
    {
        question: 'OTC',
        answer: 
        <div>
            <p>NCX OTC launches block trading service, providing deep liquidity and personalized service. We communicate with major global liquidity pools to provide the most competitive quotations, while ensuring transaction privacy and security. NCX OTC avoids the impact of large orders on the price fluctuations in the open market, and provides more professional, personalized, private and secure services for institutions or individuals with professional trading needs.</p>
        </div>,
    },
    {
        question: 'API',
        answer: 
        <div>
            <p>Complete API functions that provide smooth transaction functions and market service capabilities with REST service and Websockets.</p>
        </div>,
    },
    {
        question: 'Sub-account',
        answer: 
        <div>
            <p>Sub-account allows the user better manage his investments. The user can create multiple sub-accounts through the master account to manage his trading and investment management.</p>
        </div>,
    },
    {
        question: 'Managed Sub-account',
        answer: 
        <div>
            <p>To better serve our user needs, we provide a new sub-account feature for the investor to delegate their fund management to professional trading team.</p>
        </div>,
    },
    {
        question: 'Custom Login',
        answer:
        <div>
            <p>Subaccount Custom Login Function - create custom login for non-trading operating personnel and auditor to view any of your subaccounts trade/deposit histories.</p>
        </div>,
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