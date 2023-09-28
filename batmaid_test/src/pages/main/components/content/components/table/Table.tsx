import React from "react";
import "./duck/styles.scss";
import { Table as ANTDTable, Skeleton } from "antd";
import * as LD from "./duck";
import dayjs from "dayjs";
import { ColumnsType } from "antd/es/table";
import * as _ from "lodash";

const Table: React.FC<LD.types.TableProps> = ({ data, mode }) => {
  const locations = new Set();

  React.useEffect(() => {
    locations.clear();
  }, []);

  const columns: ColumnsType<LD.types.Job> = [
    {
      title: "Address",
      dataIndex: "location",
      // @ts-ignore
      onCell: (record, index) => {
        if (locations.has(record.location)) {
          // @ts-ignore

          return { rowSpan: 0 };
        } else {
          const occurcount = data.filter(
            (elem) => elem.location === record.location,
          ).length;

          // @ts-ignore
          locations.add(record.location);
          return { rowSpan: occurcount };
        }
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
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

  console.log(columns);

  const filteredData = data?.filter((record) => {
    if (mode === "previous") {
      return dayjs().isAfter(record.executionDate);
    } else {
      return dayjs().isBefore(record.executionDate);
    }
  });

  console.log(filteredData);

  return data?.length ? (
    <ANTDTable columns={columns} dataSource={filteredData} />
  ) : (
    <Skeleton />
  );
};

export default Table;
