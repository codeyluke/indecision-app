import React from "react";

const Action = (props) => {
  const { hasOptions, handlePick } = props;
  return (
    <div>
      <button
        className="big-button"
        disabled={!hasOptions}
        onClick={handlePick}
      >
        What Should I do?
      </button>
    </div>
  );
};

export default Action;
