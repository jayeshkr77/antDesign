import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Mission from './missionvisioncard.js';
import AboutCards from './aboutSection.js';

const mission = "Become the largest online platform for innersive learning parctical experiments, simulations and emmersive learning through VR across channels";

class Fromthedesk extends Component {
    render() {
        return (
            <div>
                <div style={{ paddingTop: '20px' }}>
                    <h1><u>From The Desk</u></h1>
                    <div className="Logo" style={{marginTop:'-10px'}}>
                        <img src="https://s3.amazonaws.com/thinkific-import/114168/96yAH4aMTCGRNKcyqztJ_iCON_logo1.png" width="30px" height="30px" />
                    </div>
                </div>
                <Row gutter={16}>
                    <Col span={17}>
                        <AboutCards title='' description='I am a simple card. I am good at containing small bits of information' />
                    </Col>
                    <Col span={7}>
                        <Mission title="Mission" description={mission} />
                        <Mission title="Vision" description={mission} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Fromthedesk;