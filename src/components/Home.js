import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Layout} from 'antd';
import MallHeader from './MallHeader';
import MallFooter from './MallFooter';
import Product from './Product'
import { Row } from 'antd';
import loadProducts from '../actions/loadProducts'

const {Content} = Layout;

class Home extends Component {

    componentDidMount(){
        this.props.loadProducts();
      }    

    render() {
        const {products} = this.props;
        return (
            <Layout className="layout">
                <MallHeader selectedKeys={['1']}></MallHeader>
                <Content style={{padding: '0 50px'}}>
                    <div style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: 280,
                        marginTop: 30
                    }}>
                    <Row gutter={16}>
                        {products.map(product => <Product key={product.id} {...product}/>)}
                    </Row>
                    </div>
                </Content>
                <MallFooter></MallFooter>
            </Layout>
        );
    }
}

const mapStateToProps = ({ products }) => ({
    products
  });
  
  const mapDispatchToProps = dispatch => ({
    loadProducts: ()=> {dispatch(loadProducts())}
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);