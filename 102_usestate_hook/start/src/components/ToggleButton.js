import React, { useState } from "react";

const ToggleButton = ({ init, toggle }) => {
  const [isOn, setIsOn] = useState();
  const ToggleButtonState = () => {
    if (isOn) {
      setIsOn(false);
      toggle(false);
    } else {
      setIsOn(true);
      toggle(true);
    }
  };
  return (
    <div
      className={isOn ? "toggle-btn toggle-btn-on" : "toggle-btn"}
      onClick={ToggleButtonState}
    >
      <div
        className={isOn ? "toggle-slider toggle-slider-on" : "toggle-slider"}
      />
    </div>
  );
};

ToggleButton.defaultProps = {
  init: false,
  toggle: () => {},
};

export default ToggleButton;
