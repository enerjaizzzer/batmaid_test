import React from "react";
import "./duck/styles.scss";
import { Table as ANTDTable } from "antd";
import * as LD from "./duck";
import dayjs from "dayjs";
import { ColumnsType } from "antd/es/table";
import * as _ from "lodash";

const Table: React.FC<LD.types.TableProps> = ({ data, mode }) => {
  const locations = new Set();

  React.useEffect(() => {
    locations.clear();
  }, []);

  const columns: ColumnsType<LD.types.Job> = React.useMemo(() => {
    if (data?.length) {
      return [
        {
          title: "Address",
          dataIndex: "location",
          key: "location",
          onCell: (record, index) => {
            const props: { rowSpan?: number } = {
              rowSpan: undefined,
            };

            if (locations.has(record.location) && !locations.has(index)) {
              props.rowSpan = 0;
            } else {
              props.rowSpan = data?.filter(
                (elem) => elem.location === record.location,
              ).length;
              console.log(
                "props.rowSpan = 1",
                locations,
                record.location,
                index,
              );
              locations.add(index);
            }
            locations.add(record.location);

            return props;
          },
        },
        {
          title: "Type",
          dataIndex: "type",
          key: "type",
          render: (type) => {
            return _.startCase(_.toLower(type));
          },
        },
        {
          title: "Date & Time",
          dataIndex: "",
          key: "executionDate",
          render: (record) => (
            <div>
              {dayjs(record.executionDate).format("ddd, MMM D")}
              <br />
              {dayjs(record.executionDate).format("HH:mm")}-
              {dayjs(record.executionDate)
                .add(record.duration, "hour")
                .format("HH:mm")}
            </div>
          ),
        },
        {
          title: "Repetition",
          dataIndex: "contractPeriodicity",
          key: "contractPeriodicity",
        },
        {
          title: "Batmaid",
          dataIndex: "agent",
          key: "agent",
        },
      ];
    } else {
      return [];
    }
  }, [data]);

  const filteredData = data?.filter((record) => {
    if (mode === "previous") {
      return dayjs().isAfter(record.executionDate);
    } else {
      return dayjs().isBefore(record.executionDate);
    }
  });

  console.log(filteredData);

  return <ANTDTable columns={columns} dataSource={filteredData} />;
};

export default React.memo(Table);
