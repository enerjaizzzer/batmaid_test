import React from "react";
import * as LD from "./duck";
import "./duck/styles.scss";

const RadioElement: React.FC<LD.types.RadioElementProps> = ({
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div
      onClick={() => onChange(value)}
      className={`radio-element ${checked ? "active" : ""}`}
    >
      {name}
    </div>
  );
};

export default RadioElement;
