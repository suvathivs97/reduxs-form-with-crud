import React from 'react';
import Home from './Home';

//import Fields from './Fields';
import 'antd/dist/antd.css';
import './App.css';


class App extends React.Component { 
  render(){
  return (
    <div className="App">
      <header >
      <div>
        <Home />
      
        </div>
      </header>
    </div>
  );
}
}


export default App;
