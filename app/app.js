import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

import Page from "./page";

var DataProvider =  require('./dataProvider');

var App = React.createClass({  
  render() {
    return (
      <div>
       <Link to="/replace/0">replace</Link>             
      </div>
    );
  }
});

var ReplaceApp = React.createClass({  
  render() {
    return (
      <div>
        {this.props.children}
        </div>
    );
  }
});

React.render((
    <Router>    
        <Route path="/" component={App}/>         
         <Route path="replace" component={ReplaceApp}>     
            <Route path=":index" component={Page}/>     
          </Route>        
    </Router>
), document.body);