import React,{Component} from 'react';
import {Card} from 'antd';

const {Meta} = Card;

class Mission extends Component{
    render(){
        return(
            <Card
                className='card-shadow'
                style={{width:'100%', backgroundColor:'#001529',color:'white',textAlign:'left',marginTop:'10px'}}
            >
            <Meta
                style={{padding:'20px'}}
            />
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.description}
                </div>
            </Card>

        );
    }
}
export default Mission;


// const cardcss
// const heading = {
//     display:'flex',
//     width:'100px',
// }
// const vertbar = {
//     flex :'1',
//     borderRight:'5px solid pink',
// }
// const titlestyle = {
//     flex :'9999',
//     fontSize:'30px',
//     fontWeight:'bold',
// }
// const title={
//     fontSize:'20px',
//     textAlign:'center',
//     padding:'10px',
// }