import React from "react";
import './11.css';
import {ReactComponent as DropIcon} from '../../../images/ind_faq_icon.svg';

function IndicesFAQ()
{
    return(
        <div className="ind__fq">
            <div className="container">
                <h1 className="fg__rer">FAQ</h1>
                <div className="accord">
                    <details>
                        <summary>This is Question
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>This is dummy text</p>
                        </div>
                    </details>
                    <details>
                        <summary>This is Question
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>This is dummy text</p>
                        </div>
                    </details>
                    <details>
                        <summary>This is Question
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>This is dummy text</p>
                        </div>
                    </details>
                    <details>
                        <summary>This is Question
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>This is dummy text</p>
                        </div>
                    </details>
                    <details>
                        <summary>This is Question
                            <span className='blue'>
                                <DropIcon />
                            </span>
                        </summary>
                        <div className='contt'>
                           <p>This is dummy text</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}
export default IndicesFAQ;