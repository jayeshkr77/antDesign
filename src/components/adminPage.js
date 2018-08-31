import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './css/admin.css'
import axios from 'axios';
import Example from './blogform';

const FormItem = Form.Item;

class AdminLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: false
        }

    }

    componentDidMount() {
        if (localStorage.getItem('adminToken')) {
            this.setState({
                authUser: true
            });
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            console.log(err);
            if (!err) {
                const msg = message.loading('Signing in', 0);
                axios({
                    method: 'post',
                    url: 'https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/login1',
                    data: {
                        email: values.email,
                        password: values.password
                    }
                }).then((res) => {
                    var userToken = res.data.Token;
                    localStorage.setItem('adminToken', userToken);
                    this.setState({
                        authUser: !this.authUser,
                    });

                    setTimeout(msg)
                }).catch((error) => {
                    console.log(error)
                    setTimeout(msg);
                    message.error('Not Found');
                })
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        if (!this.state.authUser) {
            return (
                <div >
                    <div className="container admin-form" style={{ width: '300px', padding: '30px', margin: '200px auto', border: '1px solid black' }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>

                            </FormItem>
                        </Form>
                    </div>
                </div>
            );

        } else {
            return <Redirect to='/admin/dashboard'  />;
        }
    }
}

const WrappedNormalLoginForm = Form.create()(AdminLoginForm);

export default WrappedNormalLoginForm;