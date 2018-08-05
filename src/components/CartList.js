import React from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Divider, Button } from 'antd';
import createOrder from '../actions/createOrder';
const { Column } = Table;


const CartList = ({cartItems, cartDetailItems, clearCartItems})=>{
    return (
      <div>
        <Table dataSource={cartDetailItems}>
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
      </Table>
      <div style={{margin:10, display: cartItems.length === 0 ? "none" : "block"}} >
        <Button type="primary" onClick={() => createOrder(cartItems, clearCartItems)}>生成订单</Button> 
      </div>
    </div>);
}

const getCartDetailItems = (products, cartItems) =>{
  return cartItems.map(cartItem => {
      let product = products.find(item => item.id === cartItem.productId);
      return {
        key: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        count: cartItem.productCount
      };
  });
}

const mapStateToProps = ({ products, cartItems }) => ({
  cartDetailItems: getCartDetailItems(products, cartItems),
  cartItems
});

const mapDispatchToProps = dispatch => ({
  clearCartItems: () => dispatch({type:"CLEAR_CARTITEMS"})
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
