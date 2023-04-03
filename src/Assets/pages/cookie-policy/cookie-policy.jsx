import React from "react";
import '../privacy-policy/privacy-policy.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import { useTranslation } from "react-i18next";

function PrivacyPolicy(){
    
    const { t } = useTranslation();

    return(
        <div className="cookie-policypage">
            <MyHeader />
            <div className="policy">
                <div className="head container">
                    <h1>{t("cookie_policy")}</h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>{t("cookie_policy")}</h2>
                
                <h3>{t("general")}</h3>
                
                <p>{t("general_text")}</p>
                
                <h3>{t("what_are_the_cookies_?")}</h3>
                
                <p>{t("what_are_the_cookies_text")}</p>
                
                <h3>{t("what_cookie_will_be_used_and_for_what_purpose_?")}</h3>
                
                <p><strong>{t("performance_cookie")}</strong></p>
                
                <p>{t("performance_cookie_text")}</p>
                
                <p><strong>{t("targeting_marketing_cookies")}</strong></p>  
                
                <p>{t("targeting_marketing_cookies_text")}</p>
                
                <p><strong>{t("strictly_necessary_cookies")}</strong></p>
                
                <p>{t("strictly_necessary_cookies_text")}</p>
                
                <p><strong>{t("functionality_cookies")}</strong></p>   
                
                <p>{t("functionality_cookies_text")}</p>
                        
                <h3>{t("how_long_will_the_cookies_remain")}</h3>

                <p>{t("cookies_remain_text_1")}</p>
                
                <p>{t("cookies_remain_text_2")}</p>
                
                <h3>{t("third_party_cookies")}</h3>
                
                <p>{t("third_party_cooies_text")}</p>
                
                <h3>{t("how_do_trun_cookies_off")}</h3>

                <p>{t("how_do_trun_cookies_off_text_1")}</p>
                
                <p>{t("how_do_trun_cookies_off_text_2")}</p>
                
                <h3>{t("useful_links")}</h3>

                <p>{t("useful_links_text")}</p>

                <h3>{t("updates_to_cookie_policy")}</h3>
                
                <p>{t("updates_to_cookie_policy_text")}</p>

                <h3>{t("relation_to_the_customer_agreement")}</h3>
                
                <p>{t("relation_to_the_customer_agreement_text")}</p>

                <h3>{t("cookie_contact")}</h3>     
                
                <p>{t("cookie_contact_text")}</p>
            </div>
            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;