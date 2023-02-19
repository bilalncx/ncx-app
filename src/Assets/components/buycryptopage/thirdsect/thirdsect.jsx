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
        question: 'Which Cards are accepted?',
        answer: 
        <div className="faq-ans">
            <p>Most credit and debit cards issued by VISA and MasterCard as well some virtual and prepaid cards.</p>
            <p>Before making a payment, please check the following: </p>
            <ul className='faq_li'>
                <li>Your card is eligible for international transactions</li>
                <li>You are enrolled in the 3DSecure program</li>
                <li>You have enough money in your account to complete the transaction</li>
                <li>Also, please note that some banks may require additional authorization for cryptocurrency purchases. It would be best to clarify this with them before making the payment.</li>
            </ul>
            <p>Please note that, currently, cards issued by American Express or Discover are not accepted.</p>
        </div>
    },
    {
        question: 'How long does it take to complete a transaction?',
        answer: 
        <div className="faq-ans">
            <p>Usually, payments are processed within the hour; however, some cases require more attention and can take up to 24 hours to be approved. You will receive an email once your payment has been reviewed. If your transaction is still pending, it might be because you have yet to submit a verification request. In such cases, an email is sent asking for proof of identity or card ownership – which can land in your spam folder. In case of delays, please check your spam folder for a verification email. In some cases, your transaction may be canceled due to price volatility. All prices are locked at the time of purchase, but if the price changes +/- 2.5% of the locked-in rate, the transaction will be canceled.</p>
        </div>
    },
    {
        question: 'Can I use my local currency to buy Crypto?',
        answer:
        <div className="faq-ans">
            <p>Yes, you can use your local currency, you can choose between 95 Currencies that are currently accepted, if your currency is not listed please choose USD as payment option.</p>
        </div>
    },
]


export default Accordian