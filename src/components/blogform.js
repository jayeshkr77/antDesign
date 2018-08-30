import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
            <div className="container" style={{ width: '90%', padding: '30px', margin: '100px auto' }}>
                <Form className="container">
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
                    {/* <FormGroup check row style={{ marginRight: '0px', float: 'right' }}>
                        <Col>
                            
                        </Col>
                    </FormGroup> */}
                    <div style={{ marginBottom: '20px' }}>
                        <FormGroup>
                            <div id="editor-container">
                                {/* <ReactQuill value={this.state.text} onChange={this.handleChange}></ReactQuill> */}
                                <Editor placeholder={'Write something...'} />
                            </div>
                        </FormGroup>
                    </div>
                    <div style={{ float: 'right', marginTop: 20 }}>
                        <Button>Submit</Button>
                    </div>

                </Form>
            </div >
        );
    }
}
