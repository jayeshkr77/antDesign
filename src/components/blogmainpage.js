import React, { Component } from 'react';
import { Layout } from 'antd';
import  Nav from './header.js';
import Blog from './eachblog';
import Foot from './footer';

export default class BlogPage extends Component {
    render() {
        return (
            <Layout>
                <Nav />
                <Blog />
                <Foot />
            </Layout>
        );
    }
}