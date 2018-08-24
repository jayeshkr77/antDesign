import React, { Component } from 'react';
import { Icon } from 'antd';
import './css/form.css'

export default class Cform extends Component {
    render() {
        return (
            <div className="container" style={{ paddingBottom: '30px' }}>
                <div>
                    <h1>Looking For NewsLetter</h1>
                </div>
                <div>
                    <i style={{ paddingRight: '10px' }} class="fas fa-grin"></i><input style={{ marginBottom: '30px' }} className="form-input" type="text" placeholder="Full Name" /> <br />
                    <i style={{ paddingRight: '10px' }} class="fas fa-envelope"></i><input style={{ marginBottom: '30px' }} className="form-input" type="text" placeholder="Email Address" />
                </div>
                <div>
                    <a className="social-button" style={socialLink2}>SUBMIT <i style={{ paddingLeft: '5px' }} class="fas fa-hand-point-right"></i></a>
                </div>
            </div>
        );
    }
}

const socialLink2 = {

    color: 'black',
    textDecoration: 'none',
};

// const input = {
//     padding: 10px 0,
//     background: none,
//     border: none,
//     borderBottom: solid 2px grey,
// }