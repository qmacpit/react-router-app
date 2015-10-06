import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Page from "./page";

var DataProvider =  require('./dataProvider');

class App extends React.Component {
  render () {    
    const { children } = this.props
    return (
      <div>
        <div className="Main">
          {children ? children.main : <Categories />}
        </div>
        <div className="Sidebar">
          {children ? children.sidebar : <AdminMenu />}
        </div>
      </div>
    )
  }
}


var AdminMenu = React.createClass({  
  render() {
    return (
      <div>
        <h3>AdminMenu</h3>
        <Link to="/categories" >categries</Link>
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
         <Route path="admin/categories" components={{main: Categories, sidebar:AdminMenu}}/>                         
         <Route path="categories" components={{main: Categories, sidebar: UserMenu}}/>                         
        </Route>
    </Router>
), document.body);