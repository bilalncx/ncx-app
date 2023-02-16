import React from "react";
import './second.css';
import { ReactComponent as Silver} from '../../../images/ncx-silverrank.svg';
import { ReactComponent as Gold } from '../../../images/ncx-goldrank.svg';
import { ReactComponent as Diamond } from '../../../images/ncx-diamondrank.svg';
import Rankg from '../../../images/ncx-winbg.svg'

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
                            <Gold />
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
                            <Diamond />
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
            </div>
        </div>
    )
}
export default ReferralPrivilleges;