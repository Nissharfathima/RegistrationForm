import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDetails from './UserDetails';
import GetUserInfo from './GetUserInfo';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory as history } from 'history';

ReactDOM.render(
  <Router history = {history}>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/userlist/:id" component={UserDetails}></Route>
      <Route path="/getUserInfo" component={GetUserInfo}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
