import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import BackVideo from '../../images/wallet-video.mp4';


function App() {
    const items = [
      {
        id: 0,
        name: "How to Sign Up via Desktop",
      },
      {
        id: 1,
        name: "How to Sign Up via Mobile App",
      },
      {
        id: 2,
        name: "How to Add Two-Factor Authentication",
      },
      {
        id: 3,
        name: "How to Change Password",
      },
      {
        id: 4,
        name: "How to Add Anti Phishing Code",
      },
      {
        id: 5,
        name: "How to Add Address Whitelisting",
      },
      {
        id: 6,
        name: "How to Reset Password",
      },
    ];
  
    const handleOnSearch = (string, results) => {
    };
  
    const handleOnHover = (result) => {
    };
  
    const handleOnSelect = (item) => {
    };
  
    const handleOnFocus = () => {
    };
  
    const handleOnClear = () => {
    };
  
    return (
      <div className="Support_Searchbar">
        <div className="backgrdound-video">
            <video
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                preload="auto"
                // poster="https://ncx.cx/images/ncx_line_poster.png"
                >
                <source src={BackVideo} type="video/mp4" />
            </video>
        </div>
        <div id="search_container">
            <h1>Frequently Asked Questions</h1>
            <div className="search_bar">
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                autoFocus
                placeholder="Search help articles"
              />
            </div>
        </div>
      </div>  
    );
  }
  
  export default App;
  