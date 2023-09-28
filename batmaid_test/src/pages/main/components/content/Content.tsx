import React from "react";
import * as C from "../../../../components";
import * as LD from "./duck";
import "./duck/styles.scss";

const Content = () => {
  const [mode, setMode] = React.useState<string>(LD.consts.defaultMode);
  const [data, setData] = React.useState<any>();

  const handleOnChange = (newMode: string) => {
    setMode(newMode);
  };

  React.useEffect(() => {
    fetch("./mock.json")
      .then((res) => res.json())
      .then((data) => console.log(333, data));
  }, []);

  console.log(111, data);

  return (
    <div className={"content-container"}>
      <C.Radio
        record={LD.consts.record}
        checkedItem={mode}
        onChange={handleOnChange}
      />
      <C.Table />
    </div>
  );
};

export default Content;
