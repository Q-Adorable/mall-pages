import React, {Component} from 'react';
import {Layout} from 'antd';
import MallHeader from './MallHeader';
import MallFooter from './MallFooter';

const {Content} = Layout;

class Cart extends Component {
    render() {
        return (
            <Layout className="layout">
                <MallHeader selectedKeys={['2']}></MallHeader>
                <Content style={{padding: '0 50px'}}>
                    <div style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: 280,
                        marginTop: 30
                    }}>Cart</div>
                </Content>
                <MallFooter></MallFooter>
            </Layout>
        );
    }
}

export default Cart;