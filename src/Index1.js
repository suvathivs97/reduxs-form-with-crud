import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import Edit from './Edit';
import TableRow from './TableRow';
import {connect} from 'react-redux';
import {DisplayData} from './action/data_act';
import { DeleteAction} from './action/data_act'


 class Index1 extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      this.props.DisplayData()
      // axios.get('http://localhost:4000/business')
      //   .then(response => {
      //     this.setState({ business: response.data });
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
    }
    delete() {
      this.props.DeleteAction()
    }
    // tabRow(){
    //   return this.state.business.map(function(object, i)
    //   {
    //       return <TableRow obj={object} key={i}
    //        />;
    //   });
     
    // }

    render() {
      console.log(this.props)
      return (
        <div>
          <h3 align="center">Contact List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>PhoneNumber</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            {/* <tbody> */}
              {/* { this.tabRow() } */}
              <TableRow />
            {/* </tbody> */}
          </table>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    sales: state.name.alldata,
  
  })


  export default connect(mapStateToProps,{DisplayData},) (Index1);