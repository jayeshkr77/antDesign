import React,{Component} from 'react';
import {Layout,Card,Row,Col} from 'antd';

const { Meta } = Card;

class AboutCards extends Component{
    render(){
        return(
            <Card
                className='card-shadow'
                style={{width:'100%'}}
            >
            <Meta
                style={{marginTop:'10px'}}            
            />
                <Layout>
                    <Row>
                        <Col span={12}>
                            place for image
                        </Col>
                        <Col span={12}>
                            {this.props.title}
                            {this.props.description}
                            <br />
                            <a className="read-button">READ</a>
                        </Col>
                    </Row>
                </Layout>
            </Card>
        );
    }
}
export default AboutCards;