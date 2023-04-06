import React from "react";
import '../privacy-policy/privacy-policy.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import { useTranslation } from "react-i18next";

function PrivacyPolicy(){
    
    const { t } = useTranslation();

    return(
        <div className="useragreement-policypage">
            <MyHeader />
            <div className="policy">
                <div className="head container">
                    <h1>{t("user")} <span>{t("agreement")}</span></h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>{t("user_agreement")}</h2>

                <p>{t("user_agreement_para_1")}</p>

                <p>{t("user_agreement_para_2")}</p>
                
                <p>{t("user_agreement_para_3")}</p>
                
                <p>{t("user_agreement_para_4")}</p>
                
                <p>{t("user_agreement_para_5")}</p>

                <p>{t("user_agreement_para_6")}</p>

                <p>{t("user_agreement_para_7")}</p>

                <p>{t("user_agreement_para_8")}</p>

                <p>{t("user_agreement_para_9")}</p>

                <p>{t("user_agreement_para_10")}</p>
                
                <ol>
                    <li><h4>{t("terms_and_conditions")}</h4></li>
                    <ol>
                        <li>{t("terms_and_conditions_h1")}</li>
                        <ul>
                            <li>{t("terms_h2")}</li>
                            <li>{t("terms_h3")}</li>
                            <li>{t("terms_h4")}</li>
                            <li>{t("terms_h5")}</li>
                            <li>{t("terms_h6")}</li>
                            <li>{t("terms_h7")}</li>
                            <li>{t("terms_h8")}</li>
                            <li>{t("terms_h9")}</li>
                            <li>{t("terms_h10")}</li>
                            <li>{t("terms_h11")}</li>
                            <li>{t("terms_h12")}</li>
                            <li>{t("terms_h13")}</li>
                            <li>{t("terms_h14")}</li>
                            <li>{t("terms_h15")}</li>
                            <li>{t("terms_h16")}</li>
                            <li>{t("terms_h17")}</li>
                            <li>{t("terms_h18")}</li>
                            <li>{t("terms_h19")}</li>
                            <li>{t("terms_h20")}</li>
                            <li>{t("terms_h21")}</li>
                            <li>{t("terms_h22")}</li>
                            <li>{t("terms_h23")}</li>
                            <li>{t("terms_h24")}</li>
                            <li>{t("terms_h25")}</li>
                            <li>{t("terms_h26")}</li>
                        </ul>
                        <li>{t("terms_h27")}</li>
                        <li>{t("terms_h28")}</li>
                        <li>{t("terms_h29")}</li>
                        <li>{t("terms_h30")}</li>
                        <li>{t("terms_h31")}</li>
                    </ol>
                    <li><h4>{t("subject_matter_of_this_agreement")}</h4></li>
                    <ol>
                        <li>{t("subject_matter_h1")}</li>
                        <li>{t("subject_matter_h2")}</li>
                        <ul>
                            <li>{t("subject_matter_h3")}</li>
                            <li>{t("subject_matter_h4")}</li>
                            <li>{t("subject_matter_h5")}</li>
                        </ul>
                        <li>{t("subject_matter_h6")}</li>
                        <li>{t("subject_matter_h7")}</li>
                        <li>{t("subject_matter_h8")}</li>
                    </ol>
                    <li><h4>{t("requirements_and_access_to_the_service")}</h4></li>
                    <ol>
                        <li>{t("requirements_access_service_h1")}</li>
                        <li>{t("requirements_access_service_h2")}</li>
                        <li>{t("requirements_access_service_h3")}<span>{t("requirements_access_service_h4")}</span></li>
                        <li>{t("requirements_access_service_h5")}</li>
                        <ul>
                            <li>{t("requirements_access_service_h6")}</li>
                            <li>{t("requirements_access_service_h7")}</li>
                            <li>{t("requirements_access_service_h8")}</li>
                            <li>{t("requirements_access_service_h9")}</li>
                            <li>{t("requirements_access_service_h10")}</li>
                        </ul>
                        <li>{t("requirements_access_service_h11")}</li>
                        <ul>
                            <li>{t("requirements_access_service_h12")}</li>
                            <li>{t("requirements_access_service_h13")}</li>
                            <li>{t("requirements_access_service_h14")}</li>
                        </ul>
                        <li>{t("requirements_access_service_h15")}</li>
                        <li>{t("requirements_access_service_h16")}</li>
                        <li>{t("requirements_access_service_h17")}<span>{t("requirements_access_service_h18")}</span></li>
                        <li>{t("requirements_access_service_h19")}</li>
                        <li>{t("requirements_access_service_h20")}</li>
                        <li>{t("requirements_access_service_h21")}<span>{t("requirements_access_service_h22")}</span></li>
                    </ol>
                    <li><h4>{t("anti_money_laundering_financing_terrorism")}</h4></li>
                    <ol>
                        <li>{t("anti_money_laundering_h1")}</li>
                        <li>{t("anti_money_laundering_h2")}</li>
                        <li>{t("anti_money_laundering_h3")}</li>
                        <ul>
                            <li>{t("anti_money_laundering_h4")}</li>
                            <li>{t("anti_money_laundering_h5")}</li>
                            <li>{t("anti_money_laundering_h6")}</li>
                            <li>{t("anti_money_laundering_h7")}</li>
                            <li>{t("anti_money_laundering_h8")}</li>
                            <li>{t("anti_money_laundering_h9")}</li>
                        </ul>
                        <li>{t("anti_money_laundering_h10")}</li>
                        <li>{t("anti_money_laundering_h11")}</li>
                        <li>{t("anti_money_laundering_h12")}</li>
                    </ol>
                    <li><h4>{t("user_account")}</h4></li>
                    <ol>
                        <li>{t("user_acoount_h1")}</li>
                        <li>{t("user_acoount_h2")}</li>
                        <li>{t("user_acoount_h3")}<span>{t("user_acoount_h4")}</span><span>{t("user_acoount_h5")}</span></li>
                        <li>{t("user_acoount_h6")}</li>
                        <li>{t("user_acoount_h7")}<span>{t("user_acoount_h8")}</span></li>
                        <li>{t("user_acoount_h9")}</li>
                        <li>{t("user_acoount_h10")}</li>
                        <li>{t("user_acoount_h11")}</li>
                        <li>{t("user_acoount_h12")}</li>
                        <li>{t("user_acoount_h13")}</li>
                        <li>{t("user_acoount_h14")}</li>
                        <li>{t("user_acoount_h15")}</li>
                        <ul>
                            <li>{t("user_acoount_h16")}</li>
                            <li>{t("user_acoount_h17")}</li>
                            <li>{t("user_acoount_h18")}</li>
                        </ul>
                        <li>{t("user_acoount_h19")}</li>
                        <li>{t("user_acoount_h20")}</li>
                    </ol>
                    <li><h4>{t("operations_on_the_acoount")}</h4></li>
                    <ol>
                        <li>{t("operations_on_the_acoount_h1")}</li>
                        <li>{t("operations_on_the_acoount_h2")}</li>
                        <li>{t("operations_on_the_acoount_h3")}<span>{t("operations_on_the_acoount_h4")}</span></li>
                        <li>{t("operations_on_the_acoount_h5")}</li>
                        <li>{t("operations_on_the_acoount_h6")}</li>
                        <li>{t("operations_on_the_acoount_h7")}<span>{t("operations_on_the_acoount_h8")}</span></li>
                        <ul>
                            <li>{t("operations_on_the_acoount_h9")}</li>
                            <li>{t("operations_on_the_acoount_h10")}</li>
                        </ul>
                        <li>{t("operations_on_the_acoount_h11")}</li>
                        <li>{t("operations_on_the_acoount_h12")}</li>
                        <li>{t("operations_on_the_acoount_h13")}</li>
                        <li>{t("operations_on_the_acoount_h14")}</li>
                        <li>{t("operations_on_the_acoount_h15")}</li>
                        <li>{t("operations_on_the_acoount_h16")}</li>
                        <li>{t("operations_on_the_acoount_h17")}</li>
                        <li>{t("operations_on_the_acoount_h18")}</li>

                    </ol>
                    <li><h4>{t("smart_staking")}</h4></li>
                    <ol>
                        <li>{t("smart_staking_h1")}</li>
                        <li>{t("smart_staking_h2")}</li>
                        <li>{t("smart_staking_h3")}</li>
                        <li>{t("smart_staking_h4")}</li>
                    </ol>
                    <li><h4>{t("suspicious_operations")}</h4></li>
                    <ol>
                        <li>{t("suspicious_operations_h1")}</li>
                        <li>{t("suspicious_operations_h2")}</li>
                    </ol>
                    <li><h4>{t("fees")}</h4></li>
                    <ol>
                        <li>{t("fees_h1")}</li>
                        <li>{t("fees_h2")}<span>{t("fees_h3")}</span><span>{t("fees_h4")}</span></li>
                    </ol>
                </ol>
            </div>
            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;