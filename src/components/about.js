import React, { Component } from 'react';
import { Layout } from 'antd';
import Nav from './header.js';
import Foot from './footer.js';
import './css/about.css'
import Aboutus from './aboutaboutus.js';
import Weare from './weare.js';
import Fromthedesk from './fromthedesk.js';
import OurWork from './ourwork.js';

const { Content } = Layout;

class About extends Component {
    render() {
        return (
            <Layout>
                <Nav />
                <div>
                    <Aboutus />
                </div>
                <div className="container">
                    <Weare />
                </div>
                <div>
                    <Content style={contentcss}>
                        <Fromthedesk />
                    </Content>
                </div>
                <div className="container">
                    <OurWork />
                </div>
                <Foot />
            </Layout>
        );
    }
}

export default About;

const contentcss = {
    width: '90%',
    margin: '0px auto',
    marginTop: '30px',

}