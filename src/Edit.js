import React, { Component } from 'react';
import Index1 from './Index1';
import axios from 'axios';
import { Form, Input,Radio,Button,Modal } from 'antd';

const { TextArea } = Input;
export default class Edit extends Component {
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
          Address:'',
          visible:true
        }
      }
      

      componentDidMount=async()=> {
        console.log(this.props.item,"this")
        const {Name,Age,Gender,PhoneNumber,Address} = this.props.item
        await this.setState({Name,Age,Gender,PhoneNumber,Address})
      
        // axios.get('http://localhost:4000/business/edit:id/'+this.props.match.params.id)
        // .then(response => {
        //     this.setState({ 
        //       person_name: response.data.person_name, 
        //       business_name: response.data.business_name,
        //       business_gst_number: response.data.business_gst_number });
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
                
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
            Phone_Number:e.target.value    
          });
        }
        onChangeAddress =e =>{
          console.log('Address',e.target.value);
          this.setState({
            Address:e.target.value
          });
        }
        
        cancelfun=async(data)=>{
          console.log('cancalfunc in app',data)
          await this.setState({visible:data})
        }
        handleOk = e => {
          console.log(e);
          this.setState({
            visible: false,
          });
        };
      
        handleCancel = e => {
          console.log(e);
          this.cancelfun(false)
          this.setState({
            visible: false,
          }); 
        }
        onSubmit=e =>{
            e.preventDefault();
            console.log(`the ${this.state.Name},${this.state.Age},
            ${this.state.Gender},
            ${this.state.PhoneNumber},and ${this.state.Address}`)
            const obj={
              name:this.state.Name,
              age:this.state.Age,
              gender:this.state.Gender,
              mobile_no:this.state.PhoneNumber,
              address:this.state.Address,
              id:this.props.item.id
            };
            console.log(this.props.item._id,'id')
            // console.log(this.props.obj,'obj')
            axios.put('http://localhost:4000/business/update/'+this.props.item._id,{obj})
             .then(res => console.log(res.data,"update res"));
             console.log(obj,'obj')
             this.cancelfun(false)
              }

 
  render() {
    // console.log(this.state)
    return (
      <Modal title="" footer={null}  visible={this.state.visible}onOk={this.handleOk} onCancel={this.handleCancel}  >
                   
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Contact List</h3>
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
        <Form.Item wrapperCol={{ span: 15, offset: 8 }} >
    <Button type="primary"  style={{ width: '30%',marginRight:'60px'}} onClick={this.onSubmit}>Update</Button>
           {/* <Button style={{ width: '30%', textAlign:"center" }} >Cancel</Button>  */}
          </Form.Item>
            </div>
            </div>
            </Modal> 
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
         
    
        