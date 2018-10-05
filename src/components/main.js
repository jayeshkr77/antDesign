import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Nav from './header';
import Section from './section.js'
import CardSection from './cardsection';
import Foot from './footer';
import SocialTab from './socialmedia';
import Cform from './contactform';

export default class Main extends Component {
    constructor(props){
		super(props);
		this.state = {
			post : []
		}
    }
    componentDidMount() {
		axios({
			method: 'get',
			url: 'https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/get',
		}).then((res) => {
			this.setState({
				post : res.data.Blog.reverse(),
			})
		}).catch((error) => {
			console.log(error);
        })
    }
    
    render() {
        const lowlight = [];
        const highlight = [];
        this.state.post.map((val,index) => {
            if(val.high)
                highlight.push(val);
            else
                lowlight.push(val);
        });

        console.log(highlight[0]);
        return (
            <Layout>
                <Nav />
                <div>
                    <Section />
                </div>
                <div className="card">
                    <CardSection low={lowlight.slice(0,4)} high={highlight[0]}/>
                </div>

                <SocialTab />
                <div className="card">
                    <CardSection low={lowlight.slice(4,lowlight.length)} high={highlight[1]}/>
                </div>
                <Cform />
                <Foot />
            </Layout>
        );
    }
}
