import React from "react";
import { Link } from 'react-router';

var DataProvider =  require('./dataProvider');

export default React.createClass({
  getInitialState: function(){
    console.log("get initial state")
    return {
      index: 0
    }
  },
  refreshState: function(state){
    var index = state.index;
    console.log('index:' + index)
    if (!index)
      index = 0; 
    else       
      index = parseInt(index)
    console.log(DataProvider.data[index]);
    this.setState(DataProvider.data[index]);    
  },
  componentDidMount() {
    this.refreshState(this.props.params);    
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("will receive props")
    console.log(nextProps)
    this.refreshState(nextProps.params);    
  },
  render: function() {  
    var prev, next;  
    return (
        <div>
            <h3>
                  this is page: {this.state.id}
            </h3>
            
               {(() => {
                  
                  var index = this.props.params.index
                  ? parseInt(this.props.params.index)
                  : 0;
                  
                  if (index - 1 >= 0 ) {
                    var to = "/" + (index - 1).toString();
                    console.log("prev nav: " + to)
                    prev = <Link to={to}>prev</Link>          
                  }
                  
                  if (index + 1 < DataProvider.data.length) {
                    var to = "/" + (index + 1).toString();
                    console.log("next nav: " + to)
                    next = <Link to={to}>next</Link>
                  }                                  
              })()}
              {prev}
              {next}                                          
        </div>      
    );
  },
});