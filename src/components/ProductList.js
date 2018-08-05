import React, {Component} from 'react';
import { connect } from 'react-redux';
import Product from './Product'
import { Row } from 'antd';
import loadProducts from '../actions/loadProducts'

class ProductList extends Component {

    componentDidMount(){
        this.props.loadProducts();
      }    

    render() {
        const {products} = this.props;
        return (
            <Row gutter={16}>
                {products.map(product => <Product key={product.id} {...product}/>)}
            </Row>);
    }
}

const mapStateToProps = ({ products }) => ({
    products
  });
  
  const mapDispatchToProps = dispatch => ({
    loadProducts: ()=> {dispatch(loadProducts())}
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductList);