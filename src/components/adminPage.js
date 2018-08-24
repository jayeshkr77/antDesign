import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './css/admin.css'
import axios from 'axios';
import AdminPage from './admin';
import { Redirect, Link } from 'react-router-dom'
const FormItem = Form.Item;


class AdminLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const msg = message.loading('Signing in', 0);


                axios.post('https://56y1lomy27.execute-api.ap-south-1.amazonaws.com/v1/login1', values)
                    .then((res) => {
                        var userToken = res.data.Token;

                        localStorage.setItem('adminToken', userToken);



                        setTimeout(msg)
                    })
                    .catch((error) => {
                        console.log(error)
                        setTimeout(msg);
                        message.error('Not Found');
                    })

            }
        });
    }





    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <div className="container admin-form" style={{ width: '300px', padding: '30px', margin: '200px auto', border: '1px solid black' }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
                            )}
                            {/* <Link to={'/adminpage'}> */}
                                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                            {/* </Link> */}
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(AdminLoginForm);

export default WrappedNormalLoginForm;