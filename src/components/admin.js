import React, { Component } from 'react';
import WrappedNormalLoginForm from './adminPage'
import Login from './loginPage';


export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('adminToken')) {
            this.setState({
                loggedIn: true,
            });
        }
    }
    isLoggedIn() {
        this.setState({
            loggedIn: !this.loggedIn,
        });
    }

    isLoggedout() {
        this.setState({
            loggedIn: !this.loggedIn,
        });
    }
    render() {
        return (
            <div>
                {(this.state.loggedIn) ? <Login /> : <WrappedNormalLoginForm isLoggedIn={this.isLoggedIn} />}
            </div>
        );
    }
}