import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import Edit from './Edit';


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state={
      visible:false,item:'',
      showedit:false
    };
}
componentDidMount() {
 this.setState({item:this.props.obj})
 console.log(this.state.item,"item in cmp of tabe")
}

delete() {
    axios.delete('http://localhost:4000/business/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}
showModal = () => {
  this.setState({
    visible:true,
    showedit:true
  });
};
closeModal = () => {
  this.setState({
    visible:false ,
    showedit:false
  });
};

  render() {



    console.log(this.props.obj,"hi")
    return (
      
        <tr>
        {this.state.showedit?
         <Edit item={this.props.obj} /> 
        :<div style={{display:'none'}}></div>}
          
          <td>
            {this.props.obj.Name}
          </td>
          <td>
            {this.props.obj.Age}
          </td>
          <td>
            {this.props.obj.Gender}
          </td>
          <td>
            {this.props.obj.PhoneNumber}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          
          <td>
          <Button type="primary" onClick={this.showModal} visible={this.state.visible} cancelfun={this.closeModal}>Edit</Button> 
          
          </td>
          <td>
          <Button type="danger" onClick={this.delete}>Delete</Button>
          </td>
        </tr>
    );
  }
}

export default TableRow;