import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      items:[],
      isLoaded:false
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => this.setState({items:json,isLoaded:true}))

    // axios.get('https://jsonplaceholder.typicode.com/todos/')
    // .then(response => response.data)
    // .then(json => this.setState({items:json,isLoaded:true}))
  }
  render(){
    var {isLoaded,items} = this.state;

    if(!isLoaded){
      return(<div>Loading ...</div>)
    }
    else{
  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Rest APIs</h1>
        <h2>Fetch Data using fetch</h2>
        <ul>
         {/* {items.map(item => (
           <li key={item.id}>{item.title}</li>
         ))} */}
         <UserList users={this.state.items}/>
        </ul>
      </header>
    </div>
  );
    }
  }
}

export default App;
