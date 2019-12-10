import React, { Component } from 'react';
import { Form, Input,Radio,Button } from 'antd';

import axios from 'axios';

const { TextArea } = Input;

export class Create extends Component {
  state = { visible: false };
  constructor(props){
    super (props);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeAge=this.onChangeAge.bind(this);
    this.onChangeGender=this.onChangeGender.bind(this);
    this.onChangePhoneNumber=this.onChangePhoneNumber.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      Name:'',
      Age:'',
      Gender:'',
      PhoneNumber:'',
      Address:''
    }
  }
        onChangeName = e =>{
          console.log('Name:',e.target.value);
          this.setState({
           Name:e.target.value
           });
          }
          onChangeAge=e =>{
            console.log('Age:',e.target.value);
            this.setState({
              Age:e.target.value
            });
          }
         onChangeGender = e => {
           console.log('radio checked', e);
           this.setState({
               Gender:e.target.value
           });
          }
          onChangePhoneNumber = e=> {
            console.log('PhoneNumber',e.target.value);
            this.setState({
              PhoneNumber:e.target.value    
            });
          }
          onChangeAddress =e =>{
            console.log('Address',e.target.value);
            this.setState({
              Address:e.target.value
            });
          }
          handleCancel = e => {
            console.log(e);
            this.props.cancelfun(false)
           
          };
           onSubmit=e =>{
             console.log('inside onsubmit')
             e.preventDefault();
             console.log(`the ${this.state.Name},${this.state.Age},
             ${this.state.Gender},
             ${this.state.PhoneNumber},and ${this.state.Address}`)
             
             const obj={
               name:this.state.Name,
               age:this.state.Age,
               gender:this.state.Gender,
               mobile_no:this.state.PhoneNumber,
               address:this.state.Address
             };
             console.log('obj',obj)
             axios.post('http://localhost:4000/business/add', {obj})
             .then(res => console.log(res.data));
             this.setState({
              Name:'',
              Age:'',
              Gender:'',
              PhoneNumber:'',
              Address:''

             })
             this.props.cancelfun(false)
             
           }
    render() {
        return (
            <div> 
         <Form.Item {...formItemLayout} label="Name">
              <Input placeholder="Please input your name" 
               value={this.state.Name}
               onChange={this.onChangeName}/>
        </Form.Item>
        <Form.Item {...formItemLayout} label="Age">
                <Input type="number" min={1} max={10} style={{float:'left'}} placeholder="Age"
                  value={this.state.Age}
                  onChange={this.onChangeAge}/> 
        </Form.Item>
        <Form.Item {...formItemLayout} label="Gender">
            <Radio.Group  style={{float:'left'}}value={this.state.Gender} onChange={this.onChangeGender}>
             <Radio value="Male">Male</Radio>
             <Radio value="Female">Female</Radio>
              </Radio.Group>   
        </Form.Item>
        <Form.Item {...formItemLayout} label="Phone Number">
             <Input addonBefore={'+91'} style={{ width: '70%' }} style={{float:'left'}} placeholder="Phone number"
              value={this.state.PhoneNumber} onChange={this.onChangePhoneNumber}/>
        </Form.Item >
       <Form.Item {...formItemLayout} label="Address">
        <TextArea rows={4} placeholder="Address"value={this.state.Address} onChange={this.onChangeAddress}/>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 15, offset: 5 }}>
           <Button type="primary"  style={{ width: '30%',marginRight:'60px'}} visible={this.state.visible}
           onClick={this.onSubmit} >Save</Button>
           <Button  style={{ width: '30%', textAlign:"center" }} 
           visible={this.state.visible}  onClick={this.handleCancel}>Cancel</Button> 
          </Form.Item>
            </div>
        )
    }
}
const formItemLayout = {
  labelCol: {
    xs: { span: 10 },
    sm: { span:  8 },
  },
  wrapperCol: {
    xs: { span: 10 },
    sm: { span: 8 },
  },
};
 
Create= Form.create ({name:"register"})(Create)
export default Create
