import React from "react";

const Option = (props) => {
  const { optionText, handleDeleteOption, count } = props;
  return (
    <div className="option">
      <p className="option__text">
        {count}. {optionText}
      </p>
      <button
        className="button button--link"
        onClick={(e) => {
          handleDeleteOption(optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Option;
