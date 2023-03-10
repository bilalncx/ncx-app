import React from "react";
import './second.css';
import Button from "@mui/material/Button";
import { ReactComponent as Silver} from '../../../images/ncx-silverrank.svg';
import GoldRank from '../../../images/ncx-goldrank.svg';
import DiamondRank from '../../../images/ncx-diamondrank.svg';

function ReferralPrivilleges(){
    return(
        <div className="referral_privilleges">
            <div className="container">
                <h1>Referral Privilleges</h1>
                <p>The NCX Ambassadors can earn up to 60% commissions on trading fees, settled in USDT.</p>
                <div className="rank_table">
                    <div className="tab_head_row">
                        <div className="col">
                            <p>Ranking</p>
                        </div>
                        <div className="col">
                            <p>Trading Volume of Referred Users<span>(Last month)</span></p>
                        </div>
                        <div className="col">
                            <p>and/or</p>
                        </div>
                        <div className="col">
                            <p>Total Referred Traders (Last Month)</p>
                        </div>
                        <div className="col">
                            <p>Referral % (USDT)</p>
                        </div>
                    </div>
                    <div className="silver_row">
                        <div className="col logo_text">
                            <Silver />
                            <h3>Silver</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 500,000 USD</h3>
                        </div>
                        <div className="col">
                            <h3>or</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 3</h3>
                        </div>
                        <div className="col">
                            <h3>40%</h3>
                        </div>
                    </div>
                    <div className="gold_row">
                        <div className="col logo_text">
                            <img src={GoldRank} alt="NCX Gold Rank" />
                            <h3>Gold</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 1,000,000 USD</h3>
                        </div>
                        <div className="col">
                            <h3>and</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 3</h3>
                        </div>
                        <div className="col">
                            <h3>50%</h3>
                        </div>
                    </div>
                    <div className="diamond_row">
                        <div className="col logo_text">
                            <img src={DiamondRank} alt="NCX Diamond Rank" />
                            <h3>Diamond</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 5,000,000 USD</h3>
                        </div>
                        <div className="col">
                            <h3>and</h3>
                        </div>
                        <div className="col">
                            <h3>≥ 5</h3>
                        </div>
                        <div className="col">
                            <h3>60%</h3>
                        </div>
                    </div>
                </div>
                <div className="table_text">
                    <h3>Notes:</h3>
                    <p>1. The NCX Ambassador Ranking will be updated monthly, and the ranking of the current month is determined by the trading volume of referred users and the total amount of referred traders in the last month</p>
                    <p>2. There is a 3-month protection period (that is, unconditionally Silver level) for first-timer ambassadors. However, If the ambassadors have underperformed for 3 consecutive months, their status will no longer be valid.</p>
                    <p>3. The Ambassadors will enjoy permanent referral privileges from their invited traders during their tenure. If the ambassador's status is invalid, their referral reward will be calculated according to the normal referral rates.</p>
                </div>

                <div className="become_ambassador">
                    <h2>Become NCX Ambassador, whose average monthly</h2>
                    <h2>referral commissions reaches:</h2>
                </div>
                <h1 className="referral_bonus">5,000 <span>USD</span></h1>
                <Button className="referral_applynow" href="mailto:support@ncx.cx">Apply Now</Button>

                <div className="requirements_sect">
                    <h2 className="require">Requirements</h2>
                    <p>You can apply for NCX Ambassador with any one of the below conditions met:</p>
                    <div className="requirement_table">
                        <div className="require_row">
                            <div className="col">
                                <h3>Requirement 1</h3>
                            </div>
                            <div className="col">
                                <p>With independently built and operated blockchain social groups, which can provide promotional support for NCX.</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>Requirement 2</h3>
                            </div>
                            <div className="col">
                                <p>Owned personally operated blockchain SNS accounts, including but not limited to YouTube, Twitter, etc.</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>Requirement 3</h3>
                            </div>
                            <div className="col">
                                <p>With experience and resources related to various blockchain events, such as AMA, meet-ups and fans clubs.</p>
                            </div>
                        </div>
                        <div className="require_row">
                            <div className="col">
                                <h3>Requirement 4</h3>
                            </div>
                            <div className="col">
                                <p>With experience and resources related to blockchain content writing or creation, such as media advertorial, SNS advertorial, creative writing, etc.</p>
                            </div>
                        </div>
                        <div className="require_row colo_bord">
                            <div className="col">
                                <h3>Requirement 5</h3>
                            </div>
                            <div className="col">
                                <p>With experience and resources related to various blockchain events, such as AMA, meet-ups and fans clubs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReferralPrivilleges;