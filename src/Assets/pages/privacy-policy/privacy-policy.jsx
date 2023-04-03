import React from "react";
import './privacy-policy.css';
import MyHeader from '../../components/header/header';
import MyFooter from '../../components/footer/footer';
import { useTranslation } from "react-i18next";

function PrivacyPolicy(){

    const { t } = useTranslation();

    return(
        <div className="privacy-policypage">
            <MyHeader />
            <div className="policy">
                <div className="head container">
                    <h1>{t("privacy_policy")}</h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>{t("privacy_policy")}</h2>
                <p>{t("privacy_policy_h1")}</p>
                <p>{t("privacy_policy_h2")}</p>
                <p>{t("privacy_policy_h3")}</p>
                <h3>{t("what_data_we_collect_about_you")}</h3>
                <p>{t("data_collect_h1")}</p>
                <p>{t("data_collect_h2")}</p>
                <p>{t("data_collect_h3")}</p>
                <p>{t("data_collect_h4")}</p>  
                <ul>
                    <li>{t("data_collect_h5")}</li>
                    <li>{t("data_collect_h6")}</li>
                    <li>{t("data_collect_h7")}</li>
                    <li>{t("data_collect_h8")}</li>
                    <li>{t("data_collect_h9")}</li>
                    <li>{t("data_collect_h10")}</li>
                    <li>{t("data_collect_h11")}</li>
                    <li>{t("data_collect_h12")}</li>
                    <li>{t("data_collect_h13")}</li>
                    <li>{t("data_collect_h14")}</li>
                    <li>{t("data_collect_h15")}</li>
                    <li>{t("data_collect_h16")}</li>
                    <li>{t("data_collect_h17")}</li>
                    <li>{t("data_collect_h18")}</li>
                    <li>{t("data_collect_h19")}</li>
                    <li>{t("data_collect_h20")}</li>
                    <li>{t("data_collect_h21")}</li>
                    <li>{t("data_collect_h22")}</li>
                    <li>{t("data_collect_h23")}</li>
                </ul>
                <p>{t("data_collect_h24")}</p>
                <p>{t("data_collect_h25")}</p>
                <p>{t("data_collect_h26")}</p>
                <ul>
                    <li>{t("data_collect_h27")}</li>
                    <li>{t("data_collect_h28")}</li>
                    <li>{t("data_collect_h29")}</li>
                    <li>{t("data_collect_h30")}</li>
                </ul>
                <p>{t("data_collect_h31")}</p>
                <p>{t("data_collect_h32")}</p>
                <ol>
                    <li>{t("data_collect_h33")}</li>
                    <li>{t("data_collect_h34")}</li>
                    <li>{t("data_collect_h35")}</li>
                </ol>
                        
                <p>{t("data_collect_h36")}</p>
                        
                <h3>{t("why_use_ypur_personal_data")}</h3>

                <p>{t("use_personal_data_h1")}</p>
                
                <p>{t("use_personal_data_h2")}</p>

                <ul>
                    <li>{t("use_personal_data_h3")}</li>
                    <li>{t("use_personal_data_h4")}</li>
                    <li>{t("use_personal_data_h5")}</li>
                    <li>{t("use_personal_data_h6")}</li>
                    <li>{t("use_personal_data_h7")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h8")}</p>

                <ul>
                    <li>{t("use_personal_data_h9")}</li>
                    <li>{t("use_personal_data_h10")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h11")}</p>
                        
                <ul>
                    <li>{t("use_personal_data_h12")}</li>
                    <li>{t("use_personal_data_h13")}</li>
                    <li>{t("use_personal_data_h14")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h15")}</p>
                        
                <ul>
                    <li>{t("use_personal_data_h16")}</li>
                    <li>{t("use_personal_data_h17")}</li>
                    <li>{t("use_personal_data_h18")}</li>
                    <li>{t("use_personal_data_h19")}</li>
                    <li>{t("use_personal_data_h20")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h21")}</p>
                        
                <ul>
                    <li>{t("use_personal_data_h22")}</li>
                    <li>{t("use_personal_data_h23")}</li>
                    <li>{t("use_personal_data_h24")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h25")}</p>
                        
                <ul>
                    <li>{t("use_personal_data_h26")}</li>
                    <li>{t("use_personal_data_h27")}</li>
                    <li>{t("use_personal_data_h28")}</li>
                </ul>
                        
                <p>{t("use_personal_data_h29")}</p>
                        
                <ul>
                    <li>{t("use_personal_data_h30")}</li>
                </ul>

                <h3>{t("disclosure_0f_your_personal_data")}</h3>

                <p>{t("disclousre_personal_data_h1")}</p>
                        
                <p>{t("disclousre_personal_data_h2")}</p>
                        
                <ul>
                    <li>{t("disclousre_personal_data_h3")}</li>
                    <li>{t("disclousre_personal_data_h4")}</li>
                    <li>{t("disclousre_personal_data_h5")}</li>
                </ul>
                        
                <p>{t("disclousre_personal_data_h6")}</p>
                        
                <ul>
                    <li>{t("disclousre_personal_data_h7")}</li>
                    <li>{t("disclousre_personal_data_h8")}</li>
                    <li>{t("disclousre_personal_data_h9")}</li>
                    <li>{t("disclousre_personal_data_h10")}</li>
                </ul>

                <h3>{t("securit_and_storage_personal_data")}</h3>

                <p>{t("securit_storage_personal_data_h1")}</p>
                        
                <p>{t("securit_storage_personal_data_h2")}</p>
                        
                <p>{t("securit_storage_personal_data_h3")}</p>

                <h3>{t("basis_of_personal_data_processing")}</h3>

                <p>{t("basis_personal_data_processing_h1")}</p>

                <ul>
                    <li>{t("ypur_consent")}</li>
                    <li>{t("consent_h1")}</li>
                    <li>{t("consent_h2")}</li>
                    <li>{t("consent_h3")}</li>
                    <li>{t("consent_h4")}</li>
                    <li>{t("consent_h5")}</li>
                </ul>

                <p>{t("consent_h6")}</p>


                <h3>{t("your_rights")}</h3>

                <p>{t("rights_h1")}</p>
                        
                <ul>
                    <li>{t("rights_h2")}</li>
                    <li>{t("rights_h3")}</li>
                    <li>{t("rights_h4")}</li>
                    <li>{t("rights_h5")}</li>
                </ul>
                        
                <p>{t("rights_h6")}</p>
                        
                <p>{t("rights_h7")}</p>
                        
                <p>{t("rights_h8")}</p>
                        
                <h3>{t("retention_of_personal_data")}</h3>
                        
                <p>{t("retention_data_h1")}</p>
                        
                <p>{t("retention_data_h2")}</p>
                        
                <p>{t("retention_data_h3")}</p>
                        
                <p>{t("retention_data_h4")}</p>
                        
                <h3>{t("changes_to_this_privacy_policy")}</h3>
                        
                <p>{t("changes_privacy_policy_h1")}</p>
                        
                <h3>{t("contact")}</h3>
                        
                <p>{t("contact_h1")}</p>
            </div>
            <MyFooter />
        </div>
    )
}

export default PrivacyPolicy;