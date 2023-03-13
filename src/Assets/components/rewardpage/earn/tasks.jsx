import React from "react";
import '../../homepage/ncxtasks/tasks.css';
import Button from "@mui/material/Button";
import {ReactComponent as NCXStar} from '../../../images/ncx-taskstar.svg';
import {ReactComponent as NCXQuestionmark} from '../../../images/ncx-questionmark.svg';

function NCXTaskSection()
{
    return(
        <div className="ncxtasksection">
            <div className="container">
                <h1>Complete tasks, earn NCX Tokens, and begin your crypto ascent.</h1>
                <p className="task">
                    <NCXStar />
                    Tasks
                </p>

                <div className="tasksrow">
                    <div className="col">
                        <div className="tasktext signup">
                            <h1>10,000<span>NCXT</span></h1>
                            <h3>Sign Up and Verify</h3>
                            <p>For new users only</p>
                            <div className="taskbtn">
                                <Button href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign Up</Button>
                                <NCXQuestionmark />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Refer a Friend</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $5,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>750<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $5,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext signup">
                            <h1>10,000<span>NCXT</span></h1>
                            <h3>Sign Up and Verify</h3>
                            <p>For new users only</p>
                            <div className="taskbtn">
                                <Button href="#">Sign Up</Button>
                                <NCXQuestionmark />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Refer a Friend</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $5,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>750<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $5,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow">
                    <div className="col">
                        <div className="tasktext">
                            <h1>750<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $10,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>1,250<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $10,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>1,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $25,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $25,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>750<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $10,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>1,250<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $10,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>1,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $25,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $25,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow">
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $50,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>4,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $50,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>3,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $100,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>7,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $100,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>2,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $50,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>4,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $50,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>3,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $100,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>7,500<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $100,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow">
                    <div className="col">
                        <div className="tasktext">
                            <h1>5,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $200,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>10,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $250,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>8,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $400,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>15,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $500,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>5,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $200,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>10,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $250,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasksrow mobile">
                    <div className="col">
                        <div className="tasktext">
                            <h1>8,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Spot Trading Volume over $400,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tasktext">
                            <h1>15,000<span>NCXT</span></h1>
                            <div className="tasktext-div">
                                <div className="col">
                                    <h3>Derivatives Trading Volume over $500,000+</h3>
                                    <p>For new users only</p>
                                </div>
                                <div className="col">
                                    <NCXQuestionmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NCXTaskSection;