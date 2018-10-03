import React, { Component } from 'react';
import { Card } from 'antd';
import Ribbon from './ribbon';

const { Meta } = Card;

class Cards extends Component {

  render() {
    let count = 0;
    let top = 4;

    return (
      <Card style={{marginBottom:'2px'}}>
        <div style={{ margin: '-15px', marginBottom: '1px' }}>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="100%" height="100%" />
        </div>
        <h2>{this.props.title}</h2>
        {this.props.genre && this.props.genre.map(gen => <div style={{ position: 'absolute', top: (top + (count++) * 28), left: -10, }}><Ribbon genre={gen} /></div>)}

      </Card>
    );
  }
}
export default Cards;