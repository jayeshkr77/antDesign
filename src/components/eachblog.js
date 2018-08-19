import React, { Component } from 'react';


class Blog extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Blog;

