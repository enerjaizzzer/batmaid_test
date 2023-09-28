import React from "react";
import * as LD from "./duck";
import * as LC from "./components";
import "./duck/styles.scss";

const Radio: React.FC<LD.types.RadioProps> = ({
  record,
  checkedItem,
  onChange,
}) => {
  return (
    <div className={"radio-container"}>
      {record.length
        ? record.map((record) => {
            return (
              <LC.RadioElement
                key={record.value}
                {...record}
                onChange={onChange}
                checked={checkedItem === record.value}
              ></LC.RadioElement>
            );
          })
        : null}
    </div>
  );
};

export default Radio;
