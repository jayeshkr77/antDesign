import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/blog.css';
import Editor from './quilltoolbar';


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ text: value })
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary">Logout</Button>
                </div>
                <div className="container" style={{ width: '90%', padding: '30px', margin: '100px auto' }}>
                    <Form>
                        <FormGroup style={{ float: 'right' }}>
                            <Button type="primary">Submit</Button>
                        </FormGroup>
                        <FormGroup row style={{ marginTop: '20px' }}>
                            <Col sm={12}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Admin Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input type="text" name="genere" id="exampleText" placeholder="genere" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <div id="editor-container">
                                <Editor placeholder={'Write something...'} />
                            </div>
                        </FormGroup>



                    </Form>
                </div >
            </div>
        );
    }
}
