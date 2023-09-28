import React from "react";
import * as LD from "./duck";
import "./duck/styles.scss";

const Header: React.FC<LD.types.TypesProps> = ({ text }) => {
  return <div className="header">{text}</div>;
};

export default Header;
