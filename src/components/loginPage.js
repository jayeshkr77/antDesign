import React, { Component } from 'react';



export default class Login extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="container">
                <h1>Create New Blog</h1>
                <a href="/blogpost">Add new Blog</a>
            </div>
        );
    }
}