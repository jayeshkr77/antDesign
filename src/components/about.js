import React, {Component} from 'react';
import {Layout,Row,Col} from 'antd';
import Nav from './header.js';
import Foot from './footer.js';
import Mission from './missionvisioncard.js';
import AboutCards from './aboutSection.js';

const {Content} = Layout;

const mission = "Become the largest online platform for innersive learning parctical experiments, simulations and emmersive learning through VR across channels";

class About extends Component{
    render(){
        return(
            <Layout>
                <Nav />
                <Content style={contentcss}>
                        <Row>
                            <Col span={17}>
                                <AboutCards title='' description='I am a simple card. I am good at containing small bits of information'/>
                            </Col>
                            <Col span={7}>
                                <Mission title="Mission" description={mission} />
                                <Mission title="Vision" description={mission} />
                            </Col>
                        </Row>
                </Content>
                <Foot />
            </Layout>
        );      
    }
}

export default About;

const contentcss = {
    width:'90%',
    margin:'0px auto',
    marginTop:'100px',
    border:'1px solid blue',
    
}