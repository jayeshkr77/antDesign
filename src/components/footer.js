import React, { Component } from 'react';
import { Layout, Row, Col, Icon } from 'antd';



const { Footer } = Layout;
const styleLinks = {
    color: 'white',
    textDecoration: 'none',
};
class Foot extends Component {
    render() {
        return (
            <Footer style={{ background: '#001529', color: 'white' }}>
            <div className="container">
                <Row>
                    <Col span={8}>
                        <ul style={{ listStyle: 'none', textAlign: 'left', float: 'left' }}>
                            <li><h1 style={{ color: 'white' }}>Vrook Blog</h1></li>
                            <li><p>Blogging Made Easy By Vrook</p></li>
                        </ul>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={4}>
                        {/* <h2 style={{ color: 'white' }}>Connect</h2> */}
                        <ul style={{ listStyle: 'none', textAlign: 'left', float: 'left' }}>
                            <li><h2 style={{ color: 'white' }}>Connect</h2></li>
                            <li><a href="#" style={styleLinks}><Icon type="facebook" style={{color:'blue'}}/>  Facebook</a></li>
                            <li><a href="#" style={styleLinks}><Icon type="instagram" />  Instagram</a></li>
                            <li><a href="#" style={styleLinks}><Icon type="twitter" />  Twitter</a></li>
                            <li><a href="#" style={styleLinks}><Icon type="linkedin" />  Linkedin</a></li>
                            <li><a href="#" style={styleLinks}><Icon type="youtube" />  YouTube</a></li>
                            <li><a href="#" style={styleLinks}><Icon type="medium" />  Medium</a></li>
                        </ul>

                    </Col>
                </Row>
                <Row>
                    &copy;2018@Vrook
                </Row>
            </div>
            </Footer>
        );
    }
}
export default Foot;

