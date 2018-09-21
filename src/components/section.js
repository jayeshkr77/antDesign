import React, { Component } from 'react';
// import {Layout} from 'antd';
// const { content } = Layout;
import Particles from 'react-particles-js';
import './css/section.css'
import Quote from './quote';

const PartcleOpt = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class Section extends Component {
    render() {
        return (
            <div style={{paddingBottom:'1px'}}>
                <div className="particle" style={{ height: '100%'}}>
                    <Particles params={PartcleOpt} />
                    <Quote />
                </div>
            </div>
        );
    }
}

export default Section;