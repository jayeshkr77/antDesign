import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {Row,Col, Skeleton, Switch, Card, Icon, Avatar ,Divider} from 'antd';
import { Button } from 'antd';
import axios from 'axios';

const { Meta } = Card;

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            post:[],
        }
    }
    
    
      onChange = (checked) => {
        this.setState({ loading: !checked });
      }

      componentDidMount() {
		axios({
			method: 'get',
			url: 'https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/get',
		}).then((res) => {
			this.setState({
                post : res.data.Blog.reverse(),
                loading: false,
			})
		}).catch((error) => {
			console.log(error);
        })
    }

  render() {

    const bloglist = this.state.post.map((blog, index)=>    
        <Col key={index} md={{span:12}} lg={{span:8}}  style={{marginTop:'20px', wordWrap: 'break-word'}}>
        <Link to={'/blog/' + blog.id} >
        <Card loading={loading} className="admin-card" style={{height:'200px',overflow:'hidden'}}>
            <Divider orientation="right">{blog.title}</Divider>
            <div style={{textAlign:'justify',paddingTop:'10px'}}>
                {blog.content.slice(0,200)} ...
            </div>
            
        </Card>
        </Link>
        </Col>
    );
    const { loading } = this.state;

    return (
    <div>
        <div style={{width:'100%',padding:'10px 20px',margin:'10px auto',background: 'repeating-linear-gradient(45deg,#fbfbfb,#fbfbfb 10px,#fff 10px,#fff 20px)'}}>
            <h1 style={{color:'rgba(100,100,100,1)'}}>Blogs by you ...</h1>
            <Row gutter={20} align="center">
                {bloglist}
            </Row>
                
        </div>

        <Link to='/admin/add'> 
            <Button type="primary">Write a blog</Button>
        </Link>
        
      </div>
    )
  }
}
