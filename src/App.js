import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';



class App extends Component {

  onSubmit(data){
  console.log(data);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form onSubmit={(data)=>{console.log(data)}}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
