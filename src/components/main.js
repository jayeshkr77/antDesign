import React, { Component } from 'react';
import { Layout } from 'antd';
import Nav from './header';
import Section from './section.js'
import CardSection from './cardsection';
import Foot from './footer';
import SocialTab from './socialmedia';
import Cform from './contactform';

const number = 3;

export default class Main extends Component {
    render() {
        return (
            <Layout>
                <Nav />
                <div>
                    <Section />
                </div>
                <div className="card">
                    <CardSection number={number} />
                </div>

                <SocialTab />
                <div className="card">
                    <CardSection number={number} />
                </div>
                <Cform />
                <Foot />
            </Layout>
        );
    }
}
