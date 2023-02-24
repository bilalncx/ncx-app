import React from "react";

function QuestionTabs()
{
    return(
        <div id="question_tabs">
            <div className="container">
                <div className="question_row">
                    <a href="#" className="col first animated animation:fade-in-up">
                        <h1>Account Registration</h1>
                        <p>Sign Up via Desktop</p>
                        <p>Sign Up via Mobile App</p>
                    </a>
                    <a href="#" className="col second animated animation:fade-in-up">
                        <h1>KYC</h1>
                        <p>Identity Verification</p>
                        <p>Requirements</p>
                    </a>
                    <a href="#" className="col third animated animation:fade-in-up">
                        <h1>Settings & Security</h1>
                        <p>Google 2FA</p>
                        <p>Password Reset</p>
                        <p>Anti Phishing</p>
                        <p>Device Management</p>
                        <p>Address Whitelist</p>
                    </a>
                </div>
                <div className="question_row">
                    <a href="#" className="col first animated animation:fade-in-up">
                        <h1>Deposits</h1>
                        <p>Deposits on Desktop</p>
                        <p>Deposits on Mobile App</p>
                    </a>
                    <a href="#" className="col second animated animation:fade-in-up">
                        <h1>Withdrawals</h1>
                        <p>Withdrawals on Desktop</p>
                        <p>Withdrawals on Mobile App</p>
                    </a>
                    <a href="#" className="col third animated animation:fade-in-up">
                        <h1>DEX</h1>
                        <p>Swaps</p>
                        <p>Liquidity Pools</p>
                    </a>
                </div>
                <div className="question_row">
                    <a href="#" className="col first animated animation:fade-in-up">
                        <h1>Spot Trading</h1>
                        <p>Spot Trading Tutorial</p>
                    </a>
                    <a href="#" className="col second animated animation:fade-in-up">
                        <h1>Derivatives</h1>
                        <p>Derivatives Trading Tutorial</p>
                    </a>
                    <a href="#" className="col third animated animation:fade-in-up">
                        <h1>Rewards & Referrals</h1>
                        <p>Rewards Program</p>
                        <p>Referral Program</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default QuestionTabs;