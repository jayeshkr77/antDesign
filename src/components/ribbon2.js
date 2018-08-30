import React, { Component } from 'react';

class Ribbon2 extends Component {
    render() {
        return (
            <div class="ribbon2" style={ribbon}>
                {this.props.genre}
            </div>
        );
    }
}

const ribbon = {
    backgroundColor: 'yellow',
    paddingLeft: '0.3em',
}
export { Ribbon2 };