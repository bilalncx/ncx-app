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
        answer: 'Write Text Here. Write Text Here.',
    },
    {
        question: 'Can I Buy/Sell Crypto with Fiat?',
        answer: 'Write Text Here. Write Text Here. Write Text Here. Write Text Here.',
    },
    {
        question: 'What are benefits of using NCX vs other Crypto Exchnages?',
        answer: 'Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here.',
    },
    {
        question: 'How can I earn $NERO Tokens?',
        answer: 'Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here. Write Text Here.',
    }
]


export default Accordian