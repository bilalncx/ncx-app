import React from "react";
import './taskreward.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import EarnTaskSection from '../../components/rewardpage/earn/earn';
import VideoSection from '../../components/homepage/6thvideosection/newgeneration';
import NCXBalance from '../../components/rewardpage/balance/balance';
import NCXSteps from '../../components/rewardpage/steps/steps';
import NCXCompleteEarn from '../../components/rewardpage/complete/complete';

function TaskRewardPage(){
    return(
        <div className="taskrewardpage-sect">
            <MyHeader />
            <NCXBalance />
            <VideoSection />
            <EarnTaskSection />
            <NCXSteps />
            <NCXCompleteEarn />
            <MyFooter />
        </div>
    )
}

export default TaskRewardPage;