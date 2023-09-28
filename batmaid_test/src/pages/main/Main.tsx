import React from "react";
import * as C from "../../components";
import * as LC from "./components";
import "./duck/styles.scss";

const Main = () => {
  return (
    <div className="main-container">
      <C.Header text={"All my cleanings"} />
      <LC.Content />
    </div>
  );
};

export default Main;
