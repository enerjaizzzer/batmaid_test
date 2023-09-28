import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as C from "../../../../components";
import * as LD from "./duck";
import "./duck/styles.scss";
import { save } from "../../../../duck/cleanings";

const Content = () => {
  const [mode, setMode] = React.useState<string>(LD.consts.defaultMode);
  const { cleanings } = useSelector((state: any) => state.cleanings);
  const dispatch = useDispatch();

  const handleOnChange = (newMode: string) => {
    setMode(newMode);
  };

  React.useEffect(() => {
    fetch("mock.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(save(data)))
      .catch((e) => console.log(e.message, e));
  }, []);

  console.log(cleanings);

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
