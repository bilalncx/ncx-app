import {React, useState} from 'react';
import Modal from 'react-modal';
import './apply.css';


function ApplyNowModal(){
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/24207595/d0af61e7-cf62-42cc-91dd-17c0c61696fc'
        var data = {
            "submittedAt": "24207595",
            "fields": [
                {
                    "name": "firstname",
                    "value": firstname,
                },
                {
                    "name": "lastname",
                    "value": lastname,
                },
                {
                    "name": "email",
                    "value": email,
                },
            ],
            "context": {
                "hutk": null,
                "pageUri": "www.ncx.cx",
                "pageName": "NCX Exchange"
            },
            "legalConsentOptions": {
                "consent": { // Include this object when GDPR options are enabled
                  "consentToProcess": true,
                  "text": "I agree to allow Example Company to store and process my personal data.",
                  "communications": [
                    {
                      "value": true,
                      "subscriptionTypeId": 999,
                      "text": "I agree to receive marketing communications from Example Company."
                    }
                  ]
                }
            }
        }

        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("error-message").innerHTML = xhr.responseText;
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                document.getElementById("error-message").innerHTML = xhr.responseText;   
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                document.getElementById("error-message").innerHTML = xhr.responseText; 
            }
        }

        // Sends the request 
        xhr.send(final_data)
    }

   return(
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <form onSubmit={handleSubmit}>
                    <div className="input_row">
                        <input 
                            onChange={e => setFirstName(e.target.value)} 
                            aria-label="Enter Your First Name" 
                            name="firstname" 
                            placeholder="Enter Your First Name" 
                            required="" 
                            type="text">
                        </input>
                        <input 
                            onChange={e => setLastName(e.target.value)} 
                            aria-label="Enter Your Last Name" 
                            name="lastname" 
                            placeholder="Enter Your Last Name" 
                            required="" 
                            type="text">
                        </input>
                    </div>
                    <div className="input_row">
                        <input 
                            onChange={e => setEmail(e.target.value)} 
                            aria-label="Your email address" 
                            name="email" 
                            placeholder="Enter Your Email" 
                            required="" 
                            type="email">
                        </input>
                    </div>
                    <button>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg> */}
                        <p>Apply Now</p>
                    </button>
                </form>
                <div id="error-message"></div>
            </Modal>
        </div>
   ) 
}
export default ApplyNowModal;