import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as C from "../../../../components";
import * as LD from "./duck";
import * as LC from "./components";
import "./duck/styles.scss";
import { save } from "../../../../duck/cleanings";

const Content = () => {
  const [mode, setMode] = React.useState<string>(LD.consts.defaultMode);
  const { cleanings } = useSelector((state: LD.types.CleaningsReduxFetch) => {
    return state;
  });
  const dispatch = useDispatch();

  const handleOnChange = (newMode: string) => {
    setMode(newMode);
  };

  React.useEffect(() => {
    fetch("mock.json")
      .then((response) => {
        return response.json();
      })
      .then((data: LD.types.CleaningsFetch) => {
        return dispatch(save(data));
      })
      .catch((e) => console.log(e.message, e));
  }, []);

  return (
    <div className={"content-container"}>
      <C.Radio
        record={LD.consts.record}
        checkedItem={mode}
        onChange={handleOnChange}
      />
      <LC.Table data={cleanings.data.jobs} mode={mode} />
    </div>
  );
};

export default Content;
