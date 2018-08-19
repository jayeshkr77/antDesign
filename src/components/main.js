import React , {Component} from 'react';
import {Layout} from 'antd';
import { Nav } from './header';
import Section from './section.js'
import CardSection from './cardsection';
import Foot from './footer';
import SocialTab from './socialmedia';

const number = 4;

export default class Main extends Component{
    render(){
        return(
            <Layout>
                <Nav />
                <Section />
                <CardSection number={number}/>
                <SocialTab />
                <CardSection number={number}/>
                <Foot />
            </Layout>
        );
    }
}
