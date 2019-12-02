import React, { Component } from 'react';
import Fields from './Fields';
import { Layout, Menu, Breadcrumb,Modal,Button } from 'antd';

const { Header, Content, Footer } = Layout;


export class Home extends Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    render() {
        return (
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
       
                <Button type="primary" onClick={this.showModal} style={{float:"right"}}>AddNew </Button>
                <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Fields />
                </Modal>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 280,marginTop:"30px" }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
               
    
        )
    }
}


export default Home
