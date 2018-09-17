import React, { Component } from 'react';
import { Card } from 'antd';
import Ribbon from './ribbon';

const { Meta } = Card;

// let count = 1;
// let top = 2;

class Cards extends Component {
  render() {
    
    return (
      <Card
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height="240px" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
        <div style = {ribbon1}>
          <Ribbon genre="electrical" />
        </div>

        <div style = {ribbon2} >
          <Ribbon genre="mechanical" />
        </div>
          
      </Card>
    );
  }
}
export default Cards;

const ribbon1 = {
  position:'absolute',
  top: 2,
  left:-10,
}

const ribbon2 = {
  position:'absolute',
  top:28,
  left:-10,
}