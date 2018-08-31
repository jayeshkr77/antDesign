import React, { Component } from 'react';
import { Ribbon2 } from './ribbon2.js';



class Blog extends Component {

    render() {
        return (
            <div className="blog">
                <div className="parallax2"></div>
                <div className="blogcontent">
                    <div className="blog-genre">
                        <div className="author-image"></div>
                        <div className="shadow"></div>
                        <span className="genre">electrical</span>
                        <div className="author-description"></div>
                    </div>
                    <div className="mainimage"></div>
                    <div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Blog;
