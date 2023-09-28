import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as C from "../../../../components";
import * as LD from "./duck";
import * as LC from "./components";
import "./duck/styles.scss";
import { save } from "../../../../duck/cleanings";
import { Skeleton } from "antd";

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
      .catch((e) => {
        throw new Error(`Fetch error. Details: ${e.message}`);
      });
  }, []);

  return (
    <div className={"content-container"}>
      <C.Radio
        record={LD.consts.record}
        checkedItem={mode}
        onChange={handleOnChange}
      />
      {cleanings.data.jobs?.length ? (
        <LC.Table data={cleanings.data.jobs} mode={mode} />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Content;
