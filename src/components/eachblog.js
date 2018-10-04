import React, { Component } from 'react';
import Cform from './contactform.js';
import Clap from '../assets/clap.png';
import axios from 'axios';
import { Modal, Button,Icon, Divider } from 'antd';

const im = 'https://avatars1.githubusercontent.com/u/38111963?s=400&u=b9a9e9a29dd77e838b4c3fe7a0c0373dcaf27b02&v=4'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            url:parseInt(this.props.id),
            post:[],
            visible: false,
            count:0,
        }
        this.element = React.createRef()
    }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
    handleClick = (event) => {
        if(this.state.count < 5 )
            this.setState({
                counter: this.state.counter + 1,
                count:this.state.count+1,
            })

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log('width', this.element.offsetWidth);
        axios({
            method: 'get',
            url: `https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/get/${this.state.url}`,
        }).then((res) => {
            this.setState({
                post : res.data.Blog,
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    


    render() {
        var gen = {
            position: 'relative',
            top: '-20vh',
            left: '40%',
            color: '#333',
            fontWeight: '900',
            background: '#ffde00',
            width: '200px',
            padding: '5px 10px',
            borderRadius: '20px',
            marginLeft:'5px',
        };

        const blogger = this.state.post.map((b,index)=>
        <div key={index} style={{fontFamily:'-apple-system, system-ui, BlinkMacSystemFont',color:'black'}}>
        <div className="parallax2"></div>
        <div className="blogcontent">
            <div className="blog-genre">
                <div className="author-image"><img src={im} alt="img" width='200px' height="200px"/></div>
                <div style = {{position:'absolute',top:-50,left:0,fontSize:'40px',width:'97%',textAlign:'center',color:'white',fontWeight:"bold",textDecoration:'underline'}}>{b.title}</div>
                <div className="shadow"></div>
                {/*this.props.card.genre.map(genre => {<span className="genre" style={gen}>genre</span>}) */}
                <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,130px)',}}>Author:<span style={{fontWeight:"bold"}}> {b.author}</span></div>
                <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,155px)'}}>Published on: {b.date}</div>
            </div>
            <div className="mainimage"></div>
            <div>
                <div class="content" >
                    <p style={{fontFamily:'-apple-system, system-ui, BlinkMacSystemFont',color:'black'}} >{b.content}</p>
                    <Divider />
                    <p style={{marginLeft:'46%'}}>{this.state.counter} <Divider type="vertical"/><Icon onClick={this.handleClick} style={{color:'yellow'}} type="star" /></p>
                </div>
                {/* <button style={{}} onClick={this.handleSubs}>Subscribe</button> */}
                <div>
        <Button type="primary" onClick={this.showModal}>
          Subscribe
        </Button>
        <Modal
          title="Subscribe"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <Cform font='2'/>
        </Modal>
      </div>
            </div>
        </div>

    </div>);
        return (
            <div>
           {blogger}
           </div>
        )
    }
}
export default Blog;
