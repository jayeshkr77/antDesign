import React, { Component } from 'react';
import Cform from './contactform.js';
import Clap from '../assets/clap.png';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        var gen = {
            position: 'relative',
            top: '-20vh',
            left: '40%',
            color: '#333',
            fontWeight: '900',
            background: '#ffde00',
            width: '200px',
            padding: '5px 10px',
            borderRadius: '20px',
            marginLeft:'5px',
        };

        return (
            <div className="blog">
                <div className="parallax2"></div>
                <div className="blogcontent">
                    <div className="blog-genre">
                        <div className="author-image">{/*this.props.card.image*/}</div>
                        <div className="shadow"></div>
                        {/*this.props.card.genre.map(genre => {<span className="genre" style={gen}>genre</span>}) */}
                        <span className="genre" style={gen}>electrical</span>
                        <span className="genre" style={gen}>mech</span>
                        <span className="genre" style={gen}>cse</span>

                        <div className="author-description"></div>
                    </div>
                    <div className="mainimage"></div>
                    <div>
                        <div class="content">
                            {/*this.props.card.content*/}
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?
</p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?
</p>
                            <div style={{ width: "400px", height: "300px", margin: '20px auto', backgroundColor: '#eee' }}>
                                <img src="" alt="blog photo" width="200px" height="300px" />
                            </div>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it?
</p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                        </div>
                        <div style={{width:'50%',margin:'0px auto'}}>
                            <Cform font='2'/>
                        </div>
                        
                        <button className="clap" onClick={this.handleClick}><div style={{}}>{this.state.counter}</div><img src={Clap} alt="clap" height="60px" width="60px" /></button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Blog;
