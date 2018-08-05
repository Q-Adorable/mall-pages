import React, {Component} from 'react';
import {Layout} from 'antd';
import MallHeader from './MallHeader';
import MallFooter from './MallFooter';

const {Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout className="layout">
                <MallHeader selectedKeys={['1']}></MallHeader>
                <Content style={{padding: '0 50px'}}>
                    <div style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: 280,
                        marginTop: 30
                    }}>Home</div>
                </Content>
                <MallFooter></MallFooter>
            </Layout>
        );
    }
}

export default Home;
