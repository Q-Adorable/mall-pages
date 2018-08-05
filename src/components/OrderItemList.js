import React from 'react';
import { Table, Icon, Divider } from 'antd';
const { Column } = Table;

const OrderItemList = ({orderItems})=>{
    return (
        <Table dataSource={orderItems}>
        <Column title="名称" dataIndex="name" key="name" />
        <Column title="单价" dataIndex="price" key="price" />
        <Column title="单位" dataIndex="unit" key="unit" />
        <Column title="数量" dataIndex="count" key="count" />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <span>
              <a href="javascript:;">Action 一 {record.name}</a>
              <Divider type="vertical" />
              <a href="javascript:;">Delete</a>
              <Divider type="vertical" />
              <a href="javascript:;" className="ant-dropdown-link">
                More actions <Icon type="down" />
              </a>
            </span>
          )}
        />
      </Table>                );
}

export default OrderItemList;
