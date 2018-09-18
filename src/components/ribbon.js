import React, { Component } from 'react';

class Ribbon extends Component {
  render() {
    return (
      <div className="ribbon" style={ribbon}>
        {this.props.genre}
      </div>
    );
  }
}
export default Ribbon;
const ribbon = {
  backgroundColor:'yellow',
  paddingLeft:'0.5em',
  paddingRight:'0.5em',
}