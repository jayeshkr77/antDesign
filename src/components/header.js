import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;

class Nav extends Component {
    render() {
        return (

            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                >
                    <div className="container">
                        <a href="/"><img style={{ float: 'left', marginTop: 12 }} src="https://s3.amazonaws.com/thinkific-import/114168/lRGDunfcQlGiplOHgrog_Final Big Logo.png " height="40px" /></a>
                        <div style={{ float: 'right', paddingTop: 8 }} >
                            <a className="social-button" style={link}>GET STARTED WITH VROOK <i class="fas fa-graduation-cap" style={{ paddingLeft: "5px" }}></i></a>
                            <a href="/about" className="social-button" style={socialLink2}>ABOUT US <Icon type="global" style={{ paddingLeft: '5px' }} /></a>
                        </div>
                    </div>
                </Menu>
            </Header >

        );
    }
}

export default Nav;

const socialLink2 = {

    color: 'black',
    textDecoration: 'none',
};

const link = {
    marginRight: 40,
    color: 'black',
    textDecoration: 'none',
}