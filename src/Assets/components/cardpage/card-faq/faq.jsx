import React from 'react';
import './faq.css';
import { useTranslation } from "react-i18next";

function Accordian() {

    const { t } = useTranslation();

    // const [selected, setselected] = useState(null);
    // const toggle = (i) => {
    //     if(selected === i){
    //         return setselected(null)
    //     }
    //     setselected(i)
    // }
    return(
        <div id="card-faqss">
            <div className="container">
                <h1 className='freq-ask-ques'>{t("frequently_asked_questions")}</h1>
                <div className="accordian">
                    <details>
                        <summary>{t("how_to_top_up_your_ncx_card_?")}
                            <span className='red'>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer_top_up_ncx_card")}</p>
                            <p>{t("subject_to_region")}</p>
                            <p>{t("limits_apply")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("what-are_the_benfits_of_using_ncx_card_?")}
                            <span className='red'>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer-benefits_using_ncx_card")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("where_can_i_pay_with_my_ncx_card_?")}
                            <span className='red'>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer-pay_with_ncx_card")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("how_to_get_your_ncx_card_rewards_?")}
                            <span className='red'>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer_how_to_get_ncx_rewards")}</p>
                        </div>
                    </details>
                    <details>
                        <summary>{t("ncx_card_security-features_?")}
                            <span className='red'>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </summary>
                        <div className='contt'>
                            <p>{t("answer_ncx_card_security_features")}</p>
                        </div>
                    </details>
                    {/* {data.map((item, i) => (
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
                    ))} */}
                </div>
            </div>
        </div>
    )
}

// const data = [
//     {
//         question: 'How to Top Up your NCX Card?',
//         answer: 
//         <div className="faq-ans">
//             <p>NCX Card is linked to your account on NCX, you can easily top-up your card by converting your Crypto to any of the acceptable Fiat Currencies* and use your NCX Card for everyday purchases, online payments or ATM cash withdrawals**</p>
//             <p>* - Subject to region</p>
//             <p>** - Limits apply</p>
//         </div>
//     },
//     {
//         question: 'What are the benefits of using NCX Card?',
//         answer: 
//         <div className="faq-ans">
//             <p>Apart of many benefits included in the card, the main purpose of the NCX Card is bridging the gap between Crypto and Centralised Finance, allowing the NCX Platform users to use their crypto assets to pay for their everyday purchases without the need to withdraw the funds back to the bank account to make small, everyday payments, saving on fees and processing times as well allowing users the freedom of travel and user their crypto how, when and where they want.</p>
//         </div>
//     },
//     // {
//     //     question: 'What are benefits of using NCX vs other Crypto Exchanges?',
//     //     answer:
//     //     <div className="faq-ans">
//     //         <p>Apart of many benefits included in the card, the main purpose of the NCX Card is bridging the gap between Crypto and Centralised Finance, allowing the NCX Platform users to use their crypto assets to pay for their everyday purchases without the need to withdraw the funds back to the bank account to make small, everyday payments, saving on fees and processing times as well allowing users the freedom of travel and user their crypto how, when and where they want.</p>
//     //     </div>
//     // },
//     {
//         question: 'Where can I pay with my NCX Card?',
//         answer:
//         <div className="faq-ans">
//             <p>NCX Cards are issued by MasterCard and accepted at over 44 million merchant locations Worldwide. Online Payments accepted by all MasterCard supporting merchants as well as Apple Pay, Google Pay, Samsung Pay, Zelle, Paypal, Stripe, AliPay, Payoneer and many more.</p>
//         </div>
//     },
//     {
//         question: 'How to get your NCX Card Rewards?',
//         answer:
//         <div className="faq-ans">
//             <p>All card rewards are paid in NCX Tokens and deposited into your NCX Wallet in the NCX App. Rewards are instantly reflected with each eligible transaction. Purchase rebates are reimbursed to the USD equivalent, and the rebate cap is reset on the first day of each month.</p>
//         </div>
//     },
//     {
//         question: 'NCX Card Security Features?',
//         answer:
//         <div className="faq-ans">
//             <p>One of the NCX main priorities is keeping clients funds secure by exercising latest tech in the card fraud prevention, the features include 3D Security for all online payments requiring  OTP</p>
//         </div>
//     },
// ]


export default Accordian