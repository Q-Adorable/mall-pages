import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import OrderItemList from './OrderItemList'

class OrderList extends Component{
    render(){
        const {orders} = this.props;        
        return (<div>
            {orders.map(order => <Row>
                <OrderItemList key={order.id} {...order}/>
            </Row>)}
        </div>);
    }
} 

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
