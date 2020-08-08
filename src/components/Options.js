import React from "react";
import Option from "./Option";

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widghet--header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove All Choices
        </button>
      </div>
      {options && options.length === 0 && (
        <p className="widget-message">Please add an option to get started</p>
      )}
      <div>
        {options &&
          options.map((option, index) => {
            return (
              <Option
                key={option}
                count={index + 1}
                optionText={option}
                handleDeleteOption={handleDeleteOption}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Options;
