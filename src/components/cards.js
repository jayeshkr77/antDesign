import React, { Component } from 'react';
import { Card } from 'antd';
import Ribbon from './ribbon';

const { Meta } = Card;

class Cards extends Component {
  
  render() {
    let count = 0;
    let top = 4;

    return (
      <Card
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height="240px" padding="10px"/>}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
        {this.props.genre && this.props.genre.map(gen=> <div style = {{position:'absolute',top:(top+(count++)*28),left:-10,}}><Ribbon genre={gen} /></div>)}

      </Card>
    );
  }
}
export default Cards;