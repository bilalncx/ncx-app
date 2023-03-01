import React from "react";
import Data from "../../../config/jata";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="searching_btns">
        {menuItems.map((Val, category) => {
          return (
            <button
              className="btn-dark"
              onClick={() => filterItem(Val)}
              key={category}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark"
          onClick={() => setItem(Data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
