import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';
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

        var count = this.props.number;
        var cardrender=[];

        while(count){ 
            cardrender[this.props.number-count]=<Col span={6}><Cards title="jayesh ka photo" description="this  is a description of photo api se ayega" alt="jayesh ka photo lagega"/></Col>;
            count--;
        }

        return(
            <Layout className="cardsection">
                <Row gutter={16}>
                    {cardrender}            
                </Row>
                
            </Layout>  
        );
    }
}

export default CardSection;