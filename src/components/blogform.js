import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message, Form , Input } from 'antd';
import 'react-quill/dist/quill.snow.css';
import './css/blog.css';
import Editor from './quilltoolbar';
import axios from 'axios';
const FormItem = Form.Item;
const {TextArea} = Input;


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' ,rerender:false};
        this.handleChange = this.handleChange.bind(this);
    }
    
    logout = (event) => {
        localStorage.removeItem('adminToken');
        this.setState({ rerender:!this.state.rerender });
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
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
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" onClick={this.logout}>Logout</Button>
                </div>
                <div className="container" style={{ width: '90%', padding: '30px', margin: '100px auto' }}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem row style={{ marginTop: '20px' }}>
                            {
                                getFieldDecorator('title',{
                                    rules:[{required:true,message:'Required'}]
                                })(
                                    <Input type="text" placeholder="Title" />
                                )
                            }

                            
                           
                        </FormItem>
                        <FormItem row>
                        {
                                getFieldDecorator('author',{
                                    rules:[{required:true,message:'Required'}]
                                })(
                                    <Input type="text" placeholder="Author" />
                                )
                            }
                
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('content',{
                                    rules:[{required:true,message:'Requirecfd'}]
                                })(
                                    // <Editor type="text" placeholder={'Write something...'} />
                                    <TextArea rows={4} />
                                )
                            }
                        </FormItem>
                        <FormItem style={{ float: 'right' }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </FormItem>


                    </Form>
                </div >
            </div>
        );
    }
    else{
        return <Redirect to='/admin' />;
    }
    }
}

export default Form.create()(Example);
