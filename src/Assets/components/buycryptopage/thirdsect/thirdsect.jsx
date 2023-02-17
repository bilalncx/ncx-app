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
]


export default Accordian