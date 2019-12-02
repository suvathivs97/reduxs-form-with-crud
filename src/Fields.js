import React, { Component } from 'react';
import { Form, Input,Radio,Card,Button } from 'antd';

const { TextArea } = Input;

export class Fields extends Component {
    state = {
        Value: 1,
      };
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };
    
    render() {
        return (
            <div> 
                <Form.Item {...formItemLayout} label="Name">
              <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Age">
        <Input type="number" min={1} max={10} style={{float:'left'}} placeholder="Age"/> 
        </Form.Item>
        <Form.Item {...formItemLayout} label="Gender">
            <Radio.Group onChange={this.onChange} value={this.state.value} style={{float:'left'}}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
        </Radio.Group>   
        </Form.Item>
        <Form.Item {...formItemLayout} label="Phone Number">
        <Input addonBefore={'+91'} style={{ width: '70%' }} style={{float:'left'}} placeholder="Phone number" />
        </Form.Item >
        <Form.Item {...formItemLayout} label="Address">
        <TextArea rows={4} placeholder="Address"/>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}><Button style={{ width: '30%',marginRight:'60px'}}>Save</Button>
           <Button style={{ width: '30%', textAlign:"center" }} >Cancel</Button> 
          </Form.Item>
            </div>
        )
    }
}
const formItemLayout = {
  labelCol: {
    xs: { span: 10 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 10 },
    sm: { span: 8 },
  },
};
 
Fields= Form.create ({name:"register"})(Fields)
export default Fields
