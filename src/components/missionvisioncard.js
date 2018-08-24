import React,{Component} from 'react';
import {Card} from 'antd';

const {Meta} = Card;

class Mission extends Component{
    render(){
        return(
            <div style={{backgroundColor:'#001529',color:'white',textAlign:'left',padding:'15px',marginTop:'11px',marginBottom:'20px'}}>
                <div style={{fontSize:'24px',paddingTop:'10px' ,borderBottom:'1px solid  #ffde00'}}>
                    <div style={{display:'flex',paddingBottom:'1px'}}>
                        <div style={{flex:1,paddingTop:'5px'}}><div style={{width:'2px',height:'25px' ,backgroundColor:'pink'}}></div></div>
                        <div style={{flex:30}}>
                            {this.props.title}
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'10px'}}>
                    {this.props.description}
                </div>
            </div>
            // <Card
            //     className='card-shadow'
            //     style={{backgroundColor:'#001529',color:'white',textAlign:'left'}}
            // >
            // <Meta
            //     style={{padding:'15px'}}
            // />
            //     <div style={{fontSize:'34px'}}>
            //         {this.props.title}
            //     </div>
            //     <div>
            //         {this.props.description}
            //     </div>
            // </Card>

        );
    }
}
export default Mission;