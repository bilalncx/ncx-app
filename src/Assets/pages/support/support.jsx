import React from "react";
import './support.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import SearchModal from '../../components/support/autosearch';
import QuestionTabs from "../../components/support/search_tabs";

function SupportPageSet()
{
    return(
        <div id="supportPage">
            <MyHeader />
            <SearchModal />
            <QuestionTabs />
            <MyFooter />
        </div>
    )
}

export default SupportPageSet;