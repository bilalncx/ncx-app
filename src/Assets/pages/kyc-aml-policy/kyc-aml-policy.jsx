import React from "react";
import '../privacy-policy/privacy-policy.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import { useTranslation } from "react-i18next";

function PrivacyPolicy(){

    const { t } = useTranslation();

    return(
        <div className="kycaml-policypage">
            <MyHeader />
            <div className="policy">
                <div className="head container">
                    <h1>{t("aml_kyc")}<span>{t("policy")}</span></h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>{t("anti_money_laundering_counter_terroist_financing")} <span>{t("and_know_your_customer_policy")}</span></h2>

                <p>{t("aml_kyc_policy_h1")}</p>

                <p>{t("aml_kyc_policy_h2")}</p>
                
                <p>{t("aml_kyc_policy_h3")}</p>
                
                <p>{t("aml_kyc_policy_h4")}</p>
                
                <p>{t("aml_kyc_policy_h5")}</p>
                
                <h3>{t("how_aml_regulated_in_different_jurisdictions_?")}</h3>
                
                <p>{t("aml_regulated_h1")}</p>
                
                <h3>{t("regulations_in_europe")}</h3>
                
                <p>{t("regulations_in_europe_h1")}</p>
                
                <p>{t("regulations_in_europe_h2")}</p>  
                
                <p>{t("regulations_in_europe_h3")}</p>

                <ul>
                    <li>{t("regulations_in_europe_h4")}</li>
                    <li>{t("regulations_in_europe_h5")}</li>
                    <li>{t("regulations_in_europe_h6")}</li>
                    <li>{t("regulations_in_europe_h7")}</li>
                    <li>{t("regulations_in_europe_h8")}</li>
                    <li>{t("regulations_in_europe_h9")}</li>
                </ul>
                
                <p>{t("regulations_in_europe_h10")}</p>
                
                <ul>
                    <li>{t("regulations_in_europe_h11")}</li>
                    <li>{t("regulations_in_europe_h12")}</li>
                    <li>{t("regulations_in_europe_h13")}</li>
                    <li>{t("regulations_in_europe_h14")}</li>
                    <li>{t("regulations_in_europe_h15")}</li>
                </ul>
                
                <h3>{t("verification_procedures")}</h3>
                
                <p>{t("verification_procedures_h1")}</p>
                        
                <p>{t("verification_procedures_h2")}</p>
                        
                <p>{t("verification_procedures_h3")}</p>

                <p>{t("verification_procedures_h4")}</p>
                
                <p>{t("verification_procedures_h5")}</p>

                <p>{t("verification_procedures_h6")}</p>

                <p>{t("verification_procedures_h7")}</p>

                <p>{t("verification_procedures_h8")}</p>

                <p>{t("verification_procedures_h9")}</p>
                
                <p>{t("verification_procedures_h10")}</p>

                <p>{t("verification_procedures_h11")}</p>

                <p>{t("verification_procedures_h12")}</p>

                <p>{t("verification_procedures_h13")}</p>

                <h3>{t("chief_compliance_officer")}</h3>

                <p>{t("chief_compliance_officer_h1")}</p>
                
                <ul>
                    <li>{t("chief_compliance_officer_h2")}</li>
                    <li>{t("chief_compliance_officer_h3")}</li>
                    <li>{t("chief_compliance_officer_h4")}</li>
                    <li>{t("chief_compliance_officer_h5")}</li>
                </ul>
                        
                <p>{t("chief_compliance_officer_h6")}</p>
                
                <h3>{t("transaction_monitoring")}</h3>

                <p>{t("transaction_monitoring_h1")}</p>

                <p>{t("transaction_monitoring_h2")}</p>

                <p>{t("transaction_monitoring_h3")}</p>

                <ul>
                    <li>{t("transaction_monitoring_h4")}</li>
                    <li>{t("transaction_monitoring_h5")}</li>
                    <li>{t("transaction_monitoring_h6")}</li>
                </ul>
                        
                <p>{t("transaction_monitoring_h7")}</p>
                  
                <h3>{t("risk_assessment")}</h3>
                        
                <p>{t("risk_assessment_h1")}</p>
                        
                <p>{t("risk_assessment_h2")}</p>
            </div>
            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;