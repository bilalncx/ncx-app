import { React, useState } from "react";
import './seven.css';
import '../../homepage/accordian/accordian.css';
import BackVideo from '../../../images/ncx-firstslidervideo.mp4';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NCXLogo from '../../../images/NCX-logo.svg';
import '../../homepage/NCXOTC/otc.css';
import { ReactComponent as OTC2 } from '../../../images/ncx-otc2.svg';
import { ReactComponent as OTC4 } from '../../../images/ncx-otc4.svg';
import { ReactComponent as OTC5 } from '../../../images/ncx-otc5.svg';
import { ReactComponent as OTC6 } from '../../../images/ncx-otc6.svg';


function NCXAssetManagement()
{
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }
    return(
        <div id="trading_solutions" className="assets_management">
            <div className="backgrdound-video">
                <video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
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
                                <p>Assets Management</p>
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

                <div className="our_advantages">
                    <h1>Our Advantages</h1>
                    <div className="OTCsect row">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Fast Settlement</h2>
                                    <p>Our funds clearing and asset settlement can be finished within minutes after the transaction is completed, safe and efficient. Transaction data is not publicly available and is anonymous and secure.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC4 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Regulatory Compliance</h2>
                                    <p>NCX extensive compliance program is designed to be on the level with the world’s leading regulatory and industry best practices. Our risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC5 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Cryptocurrency Miners</h2>
                                    <p>Custody and Asset Management Service help Cryptocurrency Miners safeguard their mining rewards and ensure the mining rewards are disseminated to their clients without any operation surprises.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Corporations</h2>
                                    <p>More and more corporations are starting to allocate cash to digital assets and cryptocurrencies as part of their corporate treasury strategy. Custody and Asset Management Service support corporations to safeguard their digital assets on their balance sheet to hedge against inflation.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect row mobile assets1">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Fast Settlement</h2>
                                    <p>Our funds clearing and asset settlement can be finished within minutes after the transaction is completed, safe and efficient. Transaction data is not publicly available and is anonymous and secure.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC4 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Regulatory Compliance</h2>
                                    <p>NCX extensive compliance program is designed to be on the level with the world’s leading regulatory and industry best practices. Our risk-based and multi-layer control system has proven to be highly effective in AML and CFT.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC5 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OTCsect row mobile assets2">
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Cryptocurrency Miners</h2>
                                    <p>Custody and Asset Management Service help Cryptocurrency Miners safeguard their mining rewards and ensure the mining rewards are disseminated to their clients without any operation surprises.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC6 />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="otc-linediv">
                                <div className="otc-line"></div>
                            </div>
                            <div className="txtimgsect">
                                <div className="otctxt">
                                    <h2>Corporations</h2>
                                    <p>More and more corporations are starting to allocate cash to digital assets and cryptocurrencies as part of their corporate treasury strategy. Custody and Asset Management Service support corporations to safeguard their digital assets on their balance sheet to hedge against inflation.</p>
                                </div>
                                <div className="otc-image">
                                    <OTC2 />
                                </div>
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
        question: 'Assets Management',
        answer: 
        <div>
            <p>Investors can create managed subaccounts and grant access rights to your professional trading or advisory team for treasury management. The volume generated during the binding period will be allocated to the trading team's parent account and the account tier will be upgraded in accordance with the transaction volume. Your managed subaccount can enjoy the rate of the trading team's parent account VIP tier.</p>
        </div>,
    },
    {
        question: 'Custody Account',
        answer: 
        <div>
            <p>Any investment funds or companies that are looking to enhance the security level of their digital assets or need to meet the compliance requirements can use NCX Custody Service. Register your interest with your account manager to apply for custody account.</p>
        </div>,
    },
]

export default NCXAssetManagement;