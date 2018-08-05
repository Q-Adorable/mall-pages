import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import OrderItemList from './OrderItemList'
import loadOrders from '../actions/loadOrders'

class OrderList extends Component{
    componentDidMount(){
        this.props.loadOrders();
      }    

    render(){
        const {orders} = this.props;        
        return (<div>
            {orders.map(order => <Row key={order.id}>
                <OrderItemList {...order}/>
            </Row>)}
        </div>);
    }
} 

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => ({
    loadOrders: ()=> {dispatch(loadOrders())},
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
