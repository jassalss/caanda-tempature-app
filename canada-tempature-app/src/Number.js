import React from "react";

export default Number = ({ number }) => {
  return (
    <div className="bigNumber">
      {number}
      <sup>°</sup>
    </div>
  );
};
