import React, { Component } from 'react';
import { Card } from 'antd';
import Ribbon from './ribbon';

const { Meta } = Card;

class Cards extends Component {

  render() {
    let count = 0;
    let top = 4;

    return (
      <Card style={{ marginBottom: '2px' }}>
        <div style={{ margin: '-15px', marginBottom: '1px'}}>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="100%" height="100%" />
        </div>
        <div style={{height:'60px',position:"relative"}}>
        <h4 style={{textAlign:"center",width:'100%',position:"absolute",top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>{this.props.title}</h4>
        </div>
        {this.props.genre && this.props.genre.map(gen => <div style={{ position: 'absolute', top: (top + (count++) * 28), left: -10, }}><Ribbon genre={gen} /></div>)}

      </Card>
    );
  }
}
export default Cards;