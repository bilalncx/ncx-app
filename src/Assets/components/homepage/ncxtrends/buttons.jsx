import React from "react";
import TrendingCard from "./data";
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="d-flex justify-content-flex-left">
            <button
                className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                onClick={() => setItem(TrendingCard)}
            >
                Latest Articles
            </button> 
            {menuItems.map((Val, id) => {
                return (
                    <button
                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                        onClick={() => filterItem(Val)}
                        key={id}
                    >
                        {Val}
                    </button>
                );
            })}
         </div>
    );
  };
   
  export default Buttons;