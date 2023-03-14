import React, {useEffect} from "react";
    
    const HubspotContactForm = props => {
        const { region, portalId, formId } = props;
        useEffect(() => {
            const script = document.createElement('script');
            script.src='https://js.hsforms.net/forms/embed/v2.js';
            document.body.appendChild(script);
    
            script.addEventListener('load', () => {
                // @TS-ignore
                if (window.hbspt) {
                    // @TS-ignore
                    window.hbspt.forms.create({
                        region: 'na1',
                        portalId: '24207595',
                        formId: 'd0af61e7-cf62-42cc-91dd-17c0c61696fc',
                        target: '#hubspotForm'
                    })
                }
            });
        }, []);
    
        return (
            <div>
                <div id="hubspotForm"></div>
            </div>
        );
    };
    
    export default HubspotContactForm;