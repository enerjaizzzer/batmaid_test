import React from "react";
import * as C from "../../../../components";
import "./duck/styles.scss";

const Content = () => {
  return (
    <div className={"content-container"}>
      <C.Radio />
      <C.Table />
    </div>
  );
};

export default Content;
