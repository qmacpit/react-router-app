import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router';

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
      <div>
        <h3>
          users          
        </h3>
        <Link to="/admin/users/1/categories" >user context</Link>       
      </div>
    )
  }
}

var AdminMenu = React.createClass({  
  selected: function(a) {
    console.log(a)
  },
  render() {
    return (
      <div>
        <h3>AdminMenu</h3>
        <Link to="/admin" onClick={this.selected}>dashoard</Link>
        <Link to="/admin/users" onClick={this.selected}>users</Link>
      </div>
    );
  }
});

var UserMenu = React.createClass({  
  render() {
    console.log("usermenu render")
    console.log(this.props.location)
    console.log(this.props.routeParams)

    return (
      <div>
        <h3>UserMenu</h3>  
        {
          this.props.routeParams.id
          ? (
            <div>
              <Link to="/admin">back</Link>
              <Link to="/admin/users/1/categories">categories</Link>
              <Link to="/admin/users/1/items">items</Link>    
            </div>
          )  
          : (
            <div>
              <Link to="/categories">categories</Link>
              <Link to="/items">items</Link>    
            </div>
          )
        }        
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

var Items = React.createClass({  
  render() {
    return (
      <div>
        <h3>items</h3>
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
         <Route path="admin/users/:id/items" components={{main: Items, sidebar:UserMenu}}/>                                  
         <Route path="categories" components={{main: Categories, sidebar: UserMenu}}/>                         
         <Route path="items" components={{main: Items, sidebar: UserMenu}}/>
        </Route>
    </Router>
), document.body);