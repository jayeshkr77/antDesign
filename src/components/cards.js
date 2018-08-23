import React,{Component} from 'react';
import {Card} from 'antd';

const { Meta } = Card;

class Cards extends Component{
    render(){
        return(
            <Card
    hoverable
    // style={{ width: '240px' }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height = "240px" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
    {/* <div className="bookmark">Elecrtrical</div> */}
     <div id="ribbon" style={{position:'absolute',backgroundColor:'#bb3a34'}}>
        <div>elecrtrical</div>
    </div>
    <div id="ribbon2" style={{position:'absolute',backgroundColor:'#bb3a34'}}>
        <div>mechanical</div>
    </div>
  </Card>
        );
    }
}
export default Cards;