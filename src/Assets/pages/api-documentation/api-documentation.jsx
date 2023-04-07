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
                    <h1>API <span>{t("agreement")}</span></h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>{t("api_agreement")}</h2>

                <p>{t("api_agreement_h1")}</p>
                
                <p>{t("api_agreement_h2")}</p>
                
                <h3>{t("risk_warning")}</h3>
                
                <p>{t("risk_warning_h1")}</p>
                
                <p>{t("risk_warning_h2")}</p>

                <h3>{t("defined_terms")}</h3>
                
                <ol>
                    
                    <li>{t("defined_terms_h1")}</li>
                    
                    <li>{t("defined_terms_h2")}
                        
                        <span>{t("defined_terms_h3")}</span>
                        
                        <span>{t("defined_terms_h4")}</span>
                        
                        <span>{t("defined_terms_h5")}</span>
                        
                        <span>{t("defined_terms_h6")}</span>
                        
                        <ul className="api-ul">
                            
                            <li>{t("defined_terms_h7")}</li>
                            
                            <li>{t("defined_terms_h8")}</li>
                            
                            <li>{t("defined_terms_h9")}</li>
                            
                            <li>{t("defined_terms_h10")}</li>
                            
                            <li>{t("defined_terms_h11")}</li>
                        </ul>

                        <span>{t("defined_terms_h12")}</span>
                        
                        <span>{t("defined_terms_h13")}</span>

                        <span>{t("defined_terms_h14")}</span>
                    
                    </li>
                
                </ol>

                <h3>{t("commencement_and_updates")}</h3>

                <ol>
                    <li>{t("commencement_updates_h1")}</li>

                    <li>{t("commencement_updates_h2")}</li>

                    <li>{t("commencement_updates_h3")}</li>

                    <li>{t("commencement_updates_h4")}</li>
                
                </ol>

                <h3>{t("conformance_testing")}</h3>

                <ol>

                    <li>{t("conformance_testing_h1")}</li>

                    <li>{t("conformance_testing_h2")}

                        <ul className="api-ul">

                            <li>{t("conformance_testing_h3")}</li>

                            <li>{t("conformance_testing_h4")}</li>
                            
                            <li>{t("conformance_testing_h5")}</li>

                            <li>{t("conformance_testing_h6")}</li>
                        
                        </ul>

                    </li>

                    <li>{t("conformance_testing_h7")}</li>
                
                </ol>

                <h3>{t("due_diligence_assessment")}</h3>

                <ol>

                    <li>{t("diligence_assessment_h1")}

                        <span>{t("diligence_assessment_h2")}</span>
                    
                    </li>

                    <li>{t("diligence_assessment_h3")}</li>

                    <li>{t("diligence_assessment_h4")}</li>
                
                    <li>{t("diligence_assessment_h5")}</li>
                
                </ol>

                <h3>{t("limits")}</h3>

                <ol>

                    <li>{t("limit_h1")}</li>

                    <li>{t("limit_h2")}</li>

                    <li>{t("limit_h3")}</li>
                
                </ol>

                <h3>{t("support")}</h3>

                <ol>

                    <li>{t("support_h1")}</li>

                    <li>{t("support_h2")}</li>

                    <li>{t("support_h3")}</li>

                </ol>

                <h3>{t("using_our_api")}</h3>

                <ol>

                    <li>{t("using_api_h1")}</li>
                    
                    <li>{t("using_api_h2")}</li>

                    <li>{t("using_api_h3")}</li>

                    <li>{t("using_api_h4")}</li>
                
                </ol>

                <h3>{t("algorithms")}</h3>

                <ol>

                    <li>{t("algorithms_h1")}</li>

                    <li>{t("algorithms_h2")}</li>

                    <li>{t("algorithms_h3")}

                        <ul class="api-ul">
                            
                            <li>{t("algorithms_h4")}</li>
                            
                            <li>{t("algorithms_h5")}</li>
                            
                            <li>{t("algorithms_h6")}</li>
                        
                        </ul>
                    
                    </li>

                    <li>{t("algorithms_h7")}

                        <ul class="api-ul">

                            <li>{t("algorithms_h8")}</li>
                            
                            <li>{t("algorithms_h9")}</li>
                            
                            <li>{t("algorithms_h10")}</li>
                            
                            <li>{t("algorithms_h11")}</li>
                            
                            <li>{t("algorithms_h12")}</li>
                        
                        </ul>

                        <span>{t("algorithms_h13")}</span>
                    
                    </li>
               
                </ol>

                <h3>{t("third_parties")}</h3>

                <p>{t("third_parties_text")}</p>
                
                <h3>{t("charges")}</h3>

                <p>{t("charges_text")}</p>

                <h3>{t("performance")}</h3>
                
                <p>{t("performance_h1")}</p>

                <p>{t("performance_h2")}</p>

                <p>{t("performance_h3")}</p>

                <p>{t("performance_h4")}</p>

                <h3>{t("termination")}</h3>
                
                <p>{t("termination_tex_1")}</p>

                <p>{t("termination_tex_2")}</p>
            
            </div>
            
            <MyFooter />
        
        </div>
    )
}

export default PrivacyPolicy;