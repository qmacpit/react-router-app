import React from "react";

export default React.createClass({
  render: function() {
    return (
      <h1 className="greeting">
        Hello, {this.props.name}!!!!
      </h1>
    );
  },
});