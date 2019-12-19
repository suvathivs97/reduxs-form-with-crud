import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import Edit from './Edit';
import {connect} from 'react-redux';
import {loginAction,DeleteAction} from './action/data_act';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state={
      visible:false,
      item:'',
      showedit:false
    };
}
// componentDidMount() {
//   console.log("hai")
//  this.setState({item:this.props.obj})//display existing values inside fields in the edit modal
//  console.log(this.state.item,"item in cmp of tabe")
//  this.props.DisplayData()
// }

delete=(id)=> {
    // axios.delete('http://localhost:4000/business/delete/'+this.props.obj._id)
    //     .then(console.log('Deleted'))
    //     .catch(err => console.log(err))
        this.props.DeleteAction({_id:id})
        window.location.reload();
    
}
showModal=(p)=>{
  console.log('inside showmod',p)
   this.setState({
    visible:true,
    showedit:true,
    item:p })
};

closeModal = () => {
  this.setState({
    visible:false ,
    showedit:false
  });
};

  render() {
    console.log('value',this.state.item)
    return (
      
      <tbody>
          <tr>
      {this.state.showedit?
      <Edit item={this.state.item} /> 
      :<div style={{display:'none'}}></div>}
      </tr>
        {this.props.sales.map(p=>{return(
          <tr>
             <td>
             {p.Name}
           </td>
           <td>
            {p.Age}
          </td>
          <td>
            {p.Gender}
          </td>
          <td>
            {p. PhoneNumber}
          </td>
          <td>
          {p.Address}
          </td>
          <td>
            <Button type="primary" onClick={e=>this.showModal(p)} visible={this.state.visible} cancelfun={this.closeModal}>Edit</Button> 
          </td>
          <td>
         <Button type="danger" onClick={e=>this.delete(p._id)}>Delete</Button>
         </td>
          </tr>
        )})
        }
        </tbody>
        // <tr>
        // {this.props.loadingdata?
        //  <Edit item={this.props.obj} /> 
        // :<div style={{display:'none'}}></div>}
          
        //   <td>
        //     {this.props.obj.Name}
        //   </td>
        //   <td>
        //     {this.props.obj.Age}
        //   </td>
        //   <td>
        //     {this.props.obj.Gender}
        //   </td>
        //   <td>
        //     {this.props.obj.PhoneNumber}
        //   </td>
        //   <td>
        //     {this.props.obj.Address}
        //   </td>
          
        //   <td>
        //   <Button type="primary" onClick={this.showModal} visible={this.state.visible} cancelfun={this.closeModal}>Edit</Button> 
          
        //   </td>
        //   <td>
        //   <Button type="danger" onClick={this.delete}>Delete</Button>
        //   </td>
        // </tr>
    )
  }
}


const mapStateToProps = (state) => ({
  sales: state.name.alldata,

})

export default connect(mapStateToProps,{loginAction,DeleteAction}) (TableRow);