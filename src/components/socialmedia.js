import React, { Component } from 'react';
import './css/socialmedia.css'
class SocialTab extends Component {
    render() {
        return (
            <div className="social-media">
                <div className="social">
                    <h1 style={{ color: "white" }} >Social media, streamlined</h1>
                    <p className="social-para" style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non reprehenderit facilis voluptate saepe hic sequi consectetur! Veniam iste eaque reprehenderit sunt minima, laboriosam vel accusamus aliquid incidunt, nulla molestias.</p>
                    <a className="social-button" style={socialLink}>START YOUR FREE TRAIL NOW <i class="fas fa-graduation-cap" style={{paddingLeft:"5px"}}></i></a>
                </div>
            </div>
        );
    }
}
export default SocialTab;

const socialLink = {

    color:'black',
    textDecoration:'none',
};


