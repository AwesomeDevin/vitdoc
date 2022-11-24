// @ts-ignore
import { Table } from "antd";
import React from "react";

export default function renderProperty({ loading = false, properties }) {
  const { props = {} } = properties;

  const dateSource = (Object.values(props) as any).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }

    return val;
  });

  return (
    <Table
      loading={loading}
      dataSource={dateSource}
      pagination={false}
      bordered
    >
      <Table.Column width={100} dataIndex="name" title="Property" />
      <Table.Column width={150} dataIndex="description" title="Description" />
      <Table.Column width={120} dataIndex={["type", "name"]} title="Type" />
      <Table.Column
        width={120}
        dataIndex={["defaultValue", "value"]}
        title="Default"
      />
    </Table>
  );
}
