import React, {Component} from 'react';
import {Layout, Row, Col, Card} from 'antd';
import Cards from './cards';
import './css/cardsection.css';

class CardSection extends Component{
    
    // _renderCards = () => {
    //     let cards = this.props.data.map(card =>
    //         <Card title={card.title} />
    //     )

    //     return cards;
    // }


    render(){
        return(
            <Layout>
            <div class="container" style={{marginTop:16}}>
                <Row gutter={16}>
                <Col span={6}>
                <Cards />
                </Col>
                <Col span={6}>
                <Cards />
                </Col>
                <Col span={6}>
                <Cards />
                </Col>
                <Col span={6}>
                <Cards />
                </Col>
        
                </Row>
                <Row>
                    <Card style={{padding: 0, width:1000, marginLeft:110, height:250, marginTop:16 ,marginBottom:16}}>
                        <Row>
                            <Col span={6}  style={{position:'absolute',marginLeft:'-140px'}}>
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height = "200px" />
                            </Col>
                            <Col span={18}>
                                this is ksdfkj
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </div>
            </Layout>  
        );
    }
}

export default CardSection;