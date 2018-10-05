import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message, Form , Input ,Divider,Icon,Upload,Checkbox } from 'antd';
import 'react-quill/dist/quill.snow.css';
import './css/blog.css';
import Editor from './quilltoolbar';
import axios from 'axios';
import AdminForm from './adminform.js';
const FormItem = Form.Item;
const {TextArea} = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' ,rerender:false,loading: false,};
    }
    
    logout = (event) => {
        localStorage.removeItem('adminToken');
        this.setState({ rerender:!this.state.rerender });
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }
    
    

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values);
            if(!err){

                var userToken = 'Bearer '.concat(localStorage.getItem('adminToken'));
                axios({
                    method: 'post',
                    url: 'https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/new',
                    data: values,
                    headers:{
                        'Authorization': userToken
                    }
                }).then((res) => {
                    message.success("ADDED");
                }).catch((error) => {
                    
                    message.error('Not Found');
                }) 
            }
        });

        
    }

    render() {
        if (localStorage.getItem('adminToken')){
            const {getFieldDecorator} = this.props.form;
            const uploadButton = (
                <div>
                  <Icon type={this.state.loading ? 'loading' : 'camera'} />
                  <div className="ant-upload-text">Upload</div>
                </div>
              );
              const imageUrl = this.state.imageUrl;

              const props = {
                name: 'file',
                action: '//jsonplaceholder.typicode.com/posts/',
                headers: {
                  authorization: 'authorization-text',
                },
                onChange(info) {
                  if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                  }
                  if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                  } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                  }
                },
              };
            return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <div  style={{fontFamily:'-apple-system, system-ui, BlinkMacSystemFont',color:'black'}}>
                    <div className="parallax2">
                        <Upload {...props}>
                          <Button>
                            <Icon type="upload" /> Click to Upload
                          </Button>
                        </Upload>
        </div>
        <div className="blogcontent">
            <div className="blog-genre">
                {/* <div className="author-image"> */}
                <Upload
                style={{background:'transparent'}}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img height='50px' width='50px' src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
        <div style = {{position:'absolute',top:-50,left:0,fontSize:'40px',width:'97%',textAlign:'center',color:'white',fontWeight:"bold",textDecoration:'underline'}}>
                <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Required' }],
          })(
            <Input type='text' style={{width:'30%'}} placeholder="Blog Title" />
          )}
        </FormItem>
        </div>
                <div  style={{marginTop:'50px'}}>
                <FormItem>
                {/* <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,130px)',}}> */}
                Author:
                
          {getFieldDecorator('author', {
            rules: [{ required: true, message: 'Required' }],
          })(
            <Input style={{width:'30%'}} placeholder="Author Name" />
          )}
                 {/* </div> */}
        </FormItem>
        <FormItem>
          {getFieldDecorator('high', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>Highlight</Checkbox>
          )}
        </FormItem>
        </div>
                {/* <div style = {{position:'absolute',top:0,left:0,transform:'translate(190px,175px)'}}>Published on:  </div> */}
            </div>
            <div className="mainimage"></div>
            <div>
                <div class="content" >
                    <p style={{fontFamily:'-apple-system, system-ui, BlinkMacSystemFont',color:'black'}} >Content</p>
                    <FormItem>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Required' }],
          })(
                <TextArea rows={4} />
          )}
        </FormItem>
                </div>
                <Button type="primary" htmlType="submit">Publish</Button>
                <div>
      </div>
            </div>
        </div>

    </div>
    </Form>
            </div>
        );
    }
    else{
        return <Redirect to='/admin' />;
    }
    }
}

export default Form.create()(Example);
