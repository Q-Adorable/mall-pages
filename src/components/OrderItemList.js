import React from 'react';
import { Table, Icon, Divider } from 'antd';
const { Column } = Table;

const OrderItemList = ({id, createTime, orderItems})=>{

    let orderDetailItems = orderItems.map(item => {
        return {
            key: item.id,
            name: item.product.name,
            price: item.product.price,
            unit: item.product.unit,
            count: item.productCount,
            totalPrice: item.productCount * item.product.price,
        };
    });
    return (
        <div>
            <div style={{margin:10}}><span>订单编号：{id}</span><span style={{float:"right"}}>创建时间：{createTime}</span></div>
            <Table dataSource={orderDetailItems} bordered={true}>
                <Column title="名称" dataIndex="name" key="name" />
                <Column title="单价" dataIndex="price" key="price" />
                <Column title="单位" dataIndex="unit" key="unit" />
                <Column title="数量" dataIndex="count" key="count" />
                <Column title="总价" dataIndex="totalPrice" key="totalPrice" />
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
                    )}/>
            </Table>
        </div>);
}

export default OrderItemList;
