import React, { useState } from "react";
import './subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/24207595/79df1918-c746-4b43-a210-add3898dd9bd'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
            ],
            "context": {
                "pageUri": "www.ncx.cx",
                "pageName": "NCX Exchange"
            },
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

    return (
        <div className="newsletter_form">
            <form onSubmit={handleSubmit} onChange={e => setEmail(e.target.value)}>
            <input 
                onChange={e => setEmail(e.target.value)} 
                aria-label="Your email address" 
                name="email_address" 
                placeholder="Enter Your Email" 
                required="" 
                type="email">
            </input>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
                <p>Apply</p>
            </button>
        </form>
        <div id="error-message"></div>
        </div>
    )
}

export default Subscribe