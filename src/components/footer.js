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
                <div className="">
                    <Row>
                        <Col span={18} offset={1}>
                            <ul style={{ listStyle: 'none', textAlign: 'left', float: 'left' }}>
                                <li><h3 style={{ color: 'white' }}>Vrook Blog</h3></li>
                                <li><p>Blogging Made Easy By Vrook</p></li>
                                <div>
                                    {/* <h2 style={{ color: 'white' }}>Connect</h2> */}
                                    {/* <br /> */}
                                    <a href="#" ><Icon style={{ fontSize: 26, color: 'white', paddingRight: 10 }} type="facebook" /></a>
                                    <a href="#" ><Icon style={{ fontSize: 26, color: '#55ACEE', paddingRight: 10 }} type="twitter" /></a>
                                    <a href="#" ><Icon style={{ fontSize: 26, color: '#007BB5', paddingRight: 10 }} type="linkedin" /></a>
                                    <a href="#" ><Icon style={{ fontSize: 26, color: '#BB0000', paddingRight: 10 }} type="youtube" /></a>
                                    <a href="#" ><Icon style={{ fontSize: 26, color: '#125688', paddingRight: 10 }} type="instagram" /></a>
                                </div>
                            </ul>

                        </Col>
                        <Col style={{ position: 'relative' }} span={4}>
                            <Row style={{
                                // border: '2px solid ',
                                position: 'absolute',
                                bottom: -120,
                                right: 10,
                            }}>
                                &copy;2018@Vrook
                            </Row>
                        </Col>
                    </Row>

                </div>
            </Footer>
        );
    }
}
export default Foot;

