import React, { Component } from 'react';
import Cform from './contactform.js';
import Clap from '../assets/clap.png';
import axios from 'axios';
import { Modal, Button,Icon, Divider } from 'antd';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            // url:parseInt(props.match.params.id,10),
            post:[],
            visible: false
        }
    }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    handleClick = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios({
            method: 'get',
            url: 'https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/get/314',
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
                <div className="author-image"></div>
                <div style = {{position:'absolute',top:0,left:0,fontSize:'40px',transform:'translate(80%,-50px)',color:'white',fontWeight:"bold",textDecoration:'underline'}}>{b.title}</div>
                <div className="shadow"></div>
                {/*this.props.card.genre.map(genre => {<span className="genre" style={gen}>genre</span>}) */}

                <div className="author-description"></div>
                <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,130px)',}}>Author:<span style={{fontWeight:"bold"}}> {b.author}</span></div>
                <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,155px)'}}>Published on: {b.date}</div>
            </div>
            <div className="mainimage"></div>
            <div>
                <div class="content" >
                    <p style={{fontFamily:'-apple-system, system-ui, BlinkMacSystemFont',color:'black'}} >{b.content}</p>
                    <Divider />
                    <p style={{marginLeft:'46%'}}>{this.state.counter} <Divider type="vertical"/><Icon onClick={this.handleClick} type="star" /></p>
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
