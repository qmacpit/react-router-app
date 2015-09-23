import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Page from "./page";

var DataProvider =  require('./dataProvider');

const User = React.createClass({
  render() {
    var { query } = this.props.location;
    var age = query && query.showAge ? '33' : '';
    var { userID } = this.props.params;
    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    );
  }
});

var App = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      pages: data
    })
  },  
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user/bob">Bob</Link></li>
          <li><Link to="/user/bob" query={{showAge: true}}>Bob With Query Params</Link></li>
          <li><Link to="/user/sally">Sally</Link></li>
        </ul>        
      </div>
    );
  }
});

React.render((
    <Router>    
        <Route path="/:index" component={Page}/>  
        <Redirect from="/" to="/0" />              
    </Router>
), document.body);