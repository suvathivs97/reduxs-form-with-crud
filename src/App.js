import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Modal,Button } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './Create';
import Index1 from './Index1';

import './App.css';

const { Header, Content, Footer } = Layout;
class App extends React.Component { 
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
      cancelfun=async(data)=>{
        console.log('cancalfunc in app',data)
        await this.setState({visible:data})
      }
  render(){
  return (
    <Router>
    <div className="App">
      <header >
      <div>
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
              
                <Button type="primary" onClick={this.showModal} style={{float:'Right' }}>AddNew </Button>
                <Modal title="Basic Modal" footer={null} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                     <Create  cancelfun={this.cancelfun}/> 
                   </Modal>               
                </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 280,marginTop:"30px" }}>Content
              <Index1  cancelfun={this.cancelfun}/></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
               
        </div>
      </header>
    </div>
    </Router>
  );
}
}


export default App;
