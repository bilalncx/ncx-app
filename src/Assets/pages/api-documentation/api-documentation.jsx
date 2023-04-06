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
                    <h1>API <span>Agreement</span></h1>
                </div>
            </div>
            <div className="policy-body container">
                <h2>API Agreement</h2>

                <p>We provide access to data and functionality that form our Application Programming Interface that allows our customers to transact on their Accounts. This API Agreement forms part of our Customer Agreement with you.</p>
                
                <p>This API Agreement will apply exclusively to your use of our API.</p>
                
                <h3>Risk Warning</h3>
                
                <p>Our API offers limited functionality and information compared to Trading Venues. You should not rely solely on our API as a means of fulfilling your obligations under your Agreement with us and you should not use methods or properties of our API which are not supported.</p>
                
                <p>Price events sent through our API may be throttled to your external application. This means that you may not receive every price tick on each Trading Venue or Liquidity Pool due to the dynamic nature of the Deliverable Digital Currency Contracts we offer. You acknowledge that Trading Venues and Liquidity Pools have wide powers to impose Limits (as defined below) on your trading activity and that Orders submitted through our API may therefore be delayed, executed, partially executed, amended or canceled. We cannot guarantee the delivery of each event generated via our API and therefore we cannot guarantee that the status of your Account is always up to date. You should resubmit your subscriptions to the relevant API events when a gap in an event sequence is detected to obtain up to date information.</p>

                <h3>Defined Terms</h3>
                
                <ol>
                    
                    <li>Capitalized terms. Unless separately defined in this document, words and expressions have the meanings given to them in our Customer Agreement or are used in a widespread trading practices.</li>
                    
                    <li>In this Agreement, the following definitions apply. 
                        
                        <span>Algorithmic Trading, means trading Deliverable Digital Currency Contracts where a computer algorithm automatically determines individual parameters of Orders such as whether to initiate the Order, the timing, price or quantity of the order or how to manage the Order after its submission, with limited or no human intervention. Algorithmic Trading does not include any system that is only used for the purpose of routing orders to one or more Trading Venues or for the processing of Orders involving no determination of any trading parameters or for the confirmation of Orders or the post-trade processing of executed trades so using our API may not necessarily involve Algorithmic Trading.</span>
                        
                        <span>Due Diligence Assessment has the meaning in Term 4.1 (Due Diligence Assessment).</span>
                        
                        <span>Internal Conformance Test has the meaning in Term 3.1</span>
                        
                        <span>Limits means any limits or restrictions to limit, block, cancel or otherwise restrict the use of our API in relation to any aspect of such use, including:</span>
                        
                        <ul className="api-ul">
                            
                            <li>Deliverable Digital Currency Contracts;</li>
                            
                            <li>Orders;</li>
                            
                            <li>Messages;</li>
                            
                            <li>methods of trading (for example using a high-frequency and/or Algorithmic Trading technique);</li>
                            
                            <li>the location of where you may use our API.</li>
                        </ul>

                        <span>Pre-Trade Risk Controls means any Limits which apply to all your Orders placed by a computer algorithm using our API.</span>
                        
                        <span>Post-Trade Risk Controls means any Limits which apply to all your trades, strategies and Deliverable Digital Currency Contracts relating to Orders placed by a computer algorithm using our API.</span>

                        <span>Security Procedures means such security procedures, agreements, protocols, licenses, or other requirements as we may apply to your use of our API from time to time. System means your infrastructure (including computer hardware and software, equipment, network facilities and other resources and facilities) for using our API.</span>
                    
                    </li>
                
                </ol>

                <h3>COMMENCEMENT AND UPDATES</h3>

                <ol>
                    <li>Commencement. This API Agreement is a part of our Customer Agreement and comes into force from the date of accepting the Customer agreement by you according to its conditions, but applies exclusively to your use of our API;</li>

                    <li>Access. To access and transact on our API, you must have an opened Account and a positive cash balance with us. We reserve the right not to provide any technical support whether it be online, by email or over the telephone, until this condition is satisfied.</li>

                    <li>Local regulations. Our API is not directed at or intended to be used by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. You must ensure that you comply with any local law or regulation to which you are subject.</li>

                    <li>Amendments to this Agreement. The version of this API Agreement posted on our Website is the version that will be in force at any given time. Any new version of this API Agreement will supersede any earlier versions and we will notify you of the date that any new version will come into effect. The new version will apply to all trades entered into with us after that new version comes into effect. By submitting Orders to us after the date of the new version using API, you agree to the terms of such new version.</li>
                
                </ol>

                <h3>CONFORMANCE TESTING</h3>

                <ol>

                    <li>Testing. As you are using our API in your own System, you must thoroughly test the functions described in the specifications documents to ensure that you can properly manage those functions in their entirety (Internal Conformance Testing).</li>

                    <li>System requirements. When using our API, you must:

                        <ul className="api-ul">

                            <li>ensure that your System is maintained in good order and is suitable for use with our API, and complies with our requirements and, if applicable, those of a third party provider;</li>

                            <li>run such tests and provide such information to us as is required by applicable laws and Regulations and that we reasonably consider necessary to establish that your System satisfies our requirements and those of a third party provider (if applicable);</li>
                            
                            <li>carry out virus checks and install and update security software on a regular basis; and</li>

                            <li>comply with such requirements as we or a third party service provider may prescribe from time to time in respect of use and access to our API (including trading, technological, licensing and/or security requirements).</li>
                        
                        </ul>

                    </li>

                    <li>System Defects. If you become aware of a material defect, malfunction or virus in your System or in our API, you must immediately notify us and, if applicable, the third party provider of such defect, malfunction or virus and cease all use of sour API (and, where relevant, such System) until you have received permission from us and/or such third party provider to resume use.</li>
                
                </ol>

                <h3>DUE DILIGENCE ASSESSMENT</h3>

                <ol>

                    <li>Due Diligence Assessment: On our sole discretion we may conduct a due diligence and restrict you from accessing our API if it is appeared that you are not in compliance with our Due Diligence requirements;

                        <span>You agree to provide us promptly, upon request, with all information or other assistance which we may reasonably request in order to conduct Due Diligence Assessments.</span>
                    
                    </li>

                    <li>We may stop you from using our API if the result of our Due Diligence Assessment is, in our sole opinion, not satisfactory.</li>

                    <li>Information requests: In order for us to comply with our monitoring and control obligations, we may conduct such inquiries as we deem appropriate to ensure your compliance with any security, credit and risk management procedures in addition to Due Diligence Assessments. Accordingly, notwithstanding any other provisions of this Agreement, you shall, as soon as practicable following our request, provide us with information (including electronic records) regarding your use of our API where we have received a request to provide the same: (i) pursuant to applicable laws and regulations or (ii) following a request made by any Trading Venue or any other operator of a Trading Venue or Liquidity Provider (or any other competent authority), in respect of any investigation of your use of our API.</li>
                
                    <li>Notwithstanding any provision of this Agreement relating to information or data or its disclosure, you consent to the disclosure by us of any information or data in connection with or relating to you, this API Agreement and/or any Order or trade (including pricing data) to the extent that we determine that it is required, permitted or desirable to comply with applicable laws and regulations.</li>
                
                </ol>

                <h3>LIMITS</h3>

                <ol>

                    <li>Our Limits: We may set and change our Limits in respect of your use of our API at any time. We will endeavor to give you notice of such Limits or changes before we implement them, but this may not be possible and we will not be liable for not notifying you. You will comply with all Limits we have implemented and will not try to bypass or otherwise avoid such Limits. The Limits are for our exclusive benefit. Where any Order has been blocked for exceeding our Limits, we may nonetheless decide, in our sole and absolute discretion, to submit such Order.</li>

                    <li>Other Limits: A Trading Venue, a Liquidity Provider, or a competent authority may set Limits in respect of your use of our API. We will use reasonable endeavors to notify you of such Limits (and any changes to them) where we receive them from a Trading Venue, but third parties may implement any Limits before notifying us of such Limits. You agree not to attempt to bypass or otherwise avoid such Limits.</li>

                    <li>Restrictions: You also acknowledge that the transmission of Orders to Trading Venues is dependent upon the accurate and timely receipt of prices or quotes from the relevant Trading Venue or market data provider. You acknowledge that a Trading Venue may cancel such an order when upgrading its systems, trading screens may drop the record of such an Order, and you enter such Orders at your own risk. You may not be able to cancel an Order previously given using our API and in particular will not be permitted to do so once such an Order or instruction has been executed.</li>
                
                </ol>

                <h3>SUPPORT</h3>

                <ol>

                    <li>Changes to functionality. The functionality and information of our API is subject to change. We will not support previous versions but we will give clients at least 3 Business Days’ notice of changes on our Website. We do not guarantee that an application written against an older version of our API will work with future API versions. There may be changes in schemas, method signatures and data representations. It is therefore your duty to check the Website regularly to keep informed of changes to our API.</li>

                    <li>Support hours. Official API support hours are limited and there is no guarantee on response times for queries submitted to our API Trading team. Please refer to our Website for our support hours for our API.</li>

                    <li>Ending support. We may cease to support all or part of our API at any time. We will not be liable to you or any other person if any, or all, of our API is modified or terminated.</li>

                </ol>

                <h3>USING OUR API</h3>

                <ol>

                    <li>Unauthorized use. You will take appropriate steps to keep, and to ensure that any person authorized to access your Account keeps your usernames, passwords and other security information confidential and secure.</li>
                    
                    <li>We shall not be liable for any loss, liability or cost whatsoever arising from any unauthorized use of our API. We shall have no obligation to verify the validity of any Order or received from you which has been authenticated using your username, password and other security information.</li>

                    <li>We will assume that anyone who accesses your Account and our API using your usernames, passwords and other security information was authorized by you. If you suspect that this information has been obtained by any other person without your consent, then you must notify us immediately. If you fail to do so, you will be liable for any unauthorized Orders and trades on the Account. We may, acting reasonably, suspend your Account if we have reason to believe that the security of your Account has been compromised.</li>

                    <li>Compliance monitoring: You understand that your trading activity will be (i) monitored for compliance with applicable laws and regulations and the rules of the relevant Trading Venue or Liquidity Pool and that any non-compliance may be reported to the competent authority and that your trading activity may be suspended; and that (ii) you will be bound by Pre-Trade Risk Controls and Post-Trade Risk Controls administered by us.</li>
                
                </ol>

                <h3>ALGORITHMS</h3>

                <ol>

                    <li>Consent: You may not use an Algorithmic Trading technique when using our API without our prior written Consent.</li>

                    <li>You must ensure that you and any authorized users are aware of and comply with all applicable laws and regulations and Limits in relation to the use of an Algorithmic Trading technique.</li>

                    <li>Sharing information. You acknowledge and agree that, where we have given you permission to access our API using an Algorithmic Trading technique, we:

                        <ul class="api-ul">
                            
                            <li>may disclose information on the computer algorithms to the competent authorities, Trading Venues, Liquidity Providers and such other persons as are required by applicable laws and regulations;</li>
                            
                            <li>may take any action in connection with your Algorithmic Trading, or any Orders generated by the computer algorithms which we in in our sole discretion deem necessary in order to ensure compliance with all applicable laws and regulations; and</li>
                            
                            <li>are under no obligation to provide you with any prior notice of any actions taken or to be taken in accordance with this Term 8.3.</li>
                        
                        </ul>
                    
                    </li>

                    <li>Trading Venue Limits. You further acknowledge and agree that a Trading Venue or Liquidity Provider may impose Limits on Algorithmic Trading techniques, and may:

                        <ul class="api-ul">

                            <li>implement and maintain Limits on the ratio of unexecuted orders to transactions entered by us for our clients or directly by clients of ours using our API;</li>
                            
                            <li>decrease the rate of execution of orders;</li>
                            
                            <li>impose Pre- and Post-Trade Risk Controls, including controls filtering order price and quantity;</li>
                            
                            <li>implement and maintain Limits on the minimum tick size that may be executed on the Trading Venue; and/or</li>
                            
                            <li>take any other action it sees fit in order to maintain orderly trading conditions.</li>
                        
                        </ul>

                        <span>Such actions taken by a Trading Venue or Liquidity Provider may cause your orders to be delayed, executed, partially executed, amended or canceled.</span>
                    
                    </li>
               
                </ol>

                <h3>THIRD PARTIES</h3>

                <p>Where our API is provided to you by a distributor or other third party, the sign up and use of those services may be subject to a separate third party agreement. If this is the case you will remain bound by the API Agreement and in the event of a conflict, this API Agreement will take precedence.</p>
                
                <h3>CHARGES</h3>

                <p>Please contact us for further information regarding data feed and connectivity fees.</p>

                <h3>PERFORMANCE</h3>
                
                <p>We do not warrant that the operation of our API will be uninterrupted or entirely error free. Additionally, we do not give any guarantee as to the accuracy, suitability, reliability, completeness, or performance of our API.</p>

                <p>You acknowledge and agree that our API is provided by us on an “as is” and “as available” basis without any representations or any kind of warranty made (whether express or implied), to the extent permitted by law, as to non-infringement, satisfactory quality, fitness for purpose, merchantability, compatibility, security and accuracy. Our API is used at your own discretion and risk.</p>

                <p>Our API is not immune to failure and may from time to time fail to operate satisfactorily or at all. To the extent permitted by law, we will have no liability to you in relation to any loss that you suffer as a result of any delay or defect in or failure of the whole or any part of our API provided that the occurrence of the delay, defect or failure was beyond our reasonable control.</p>

                <p>Where you have been disconnected from the API for any reason due to our systems, through a fault or deliberate change in your external application, you accept that all your Orders given before you were disconnected will remain active and may be executed. In the event of a delay or defect in or failure of the whole or any part of our API you should immediately notify us to report such delay, defect or failure.</p>

                <h3>TERMINATION</h3>
                
                <p>We may acting reasonably suspend your Account at any time if your trading activity or conduct is such that we believe it has or is likely to impair the integrity, functionality, speed or reliability of any Trading Venue or compromise, impair, restrict or prevent the ability of the Trading Venue to operate a fair and orderly market.</p>

                <p>We may reasonably terminate your Account if your trading activity is deemed to be disruptive to the operation of a Trading Venue or Liquidity Provider and you have failed to correct this behavior following a notice from us. We additionally have the right to terminate your access to or use of our Account if we determine in our sole discretion that you have in any way breached our Agreement</p>
            
            </div>
            
            <MyFooter />
        
        </div>
    )
}

export default PrivacyPolicy;