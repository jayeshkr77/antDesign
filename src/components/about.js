import React, {Component} from 'react';
import {Layout} from 'antd';
import Nav from './header.js';
import Foot from './footer.js';

class About extends Component{
    render(){
        return(
            <Layout>
                <Nav />

                <Foot />
            </Layout>
        );      
    }
}

export default About;