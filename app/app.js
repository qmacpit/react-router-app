import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Page from "./page";

var DataProvider =  require('./dataProvider');

class App extends React.Component {
  render () {    
    const { children } = this.props
    return (
      <div>
        <div className="Sidebar">
          {children ? children.sidebar : <AdminMenu />}
        </div>        
        <div className="Main">
          {children ? children.main : <Admin />}
        </div>        
      </div>
    )
  }
}

class Admin extends React.Component {
  render () {        
    return (
      <h3>
        AdminDashoard
      </h3>
    )
  }
}

class Users extends React.Component {
  render () {        
    return (
      <h3>
        users  
        <Link to="/admin/users/1/categories">user context</Link>       
      </h3>
    )
  }
}

var AdminMenu = React.createClass({  
  render() {
    return (
      <div>
        <h3>AdminMenu</h3>
        <Link to="/admin" >dashoard</Link>
        <Link to="/admin/users">users</Link>
      </div>
    );
  }
});

var UserMenu = React.createClass({  
  render() {
    return (
      <div>
        <h3>UserMenu</h3>      
      </div>
    );
  }
});

var Categories = React.createClass({  
  render() {
    return (
      <div>
        <h3>categories</h3>
        {this.props.children}
      </div>
    );
  }
});

React.render((
    <Router>    
        <Route path="/" component={App}>         
         <Route path="admin" components={{main: Admin, sidebar:AdminMenu}}/>                                  
         <Route path="admin/users" components={{main: Users, sidebar:AdminMenu}}/>                         
         <Route path="admin/users/:id/categories" components={{main: Categories, sidebar:UserMenu}}/>                                  
         <Route path="categories" components={{main: Categories, sidebar: UserMenu}}/>                         
        </Route>
    </Router>
), document.body);