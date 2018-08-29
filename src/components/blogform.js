import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/blog.css';


export default class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {text : ''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(value){
        this.setState({text:value})
      }
    render() {
        return (
            <div className="container" style={{ width: '600px', padding: '30px', margin: '200px auto', border: '1px solid black' }}>
                <Form>
                    <FormGroup row>
                        <Label for="exampleText" sm={3}>Name</Label>
                        <Col sm={9}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Admin Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={3}>Gener</Label>
                        <Col sm={9}>
                            <Input type="text" name="genere" id="exampleText" placeholder="genere" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={3}>Blog Content</Label>
                        <Col sm={9}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <div id="editor-container">
                        <ReactQuill value={this.state.text} onChange={this.handleChange}></ReactQuill>
                    </div>
                    <FormGroup check row>
                        <Col sm={{ size: 9, offset: 3 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
