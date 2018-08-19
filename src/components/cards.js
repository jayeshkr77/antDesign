import React,{Component} from 'react';
import {Card} from 'antd';

const { Meta } = Card;

class Cards extends Component{
    render(){
        return(
            <Card
                className='card-shadow'
                hoverable
                style={{width:'!00%'}}
                cover={<img alt={this.props.alt} src={this.props.image} />}
            >
            <Meta
                style={{padding:'20px'}}
                title={this.props.title}
                description={this.props.description}
            />
            <a className="read-button">READ</a>
            </Card>
        );
    }
}
export default Cards;