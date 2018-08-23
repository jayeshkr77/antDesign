import React, {Component} from 'react';
// import { Row, Col } from "antd";
import './css/quote.css';

const quote = "If we're trying to build a world-class News Feed and a world- class messaging product and a world-class search product and a world-class ad system, and invent virtual reality and build drones, I can't write every line of code. I can't write any lines of code";
const speaker="MarkZ"
class Quotes extends Component{
    
    render(){
        return(
            <div className="quote-wrap">
                <div className="vert-bar"></div>
                <div className="quote">{quote}<br /><div className="speaker">{speaker}</div></div>
            </div>
        );
    }
}
export default Quotes;

{/* <Row className="quote">
                    <Col span={4} className="vert-bar"></Col>
                    <Col span={1}></Col>
                    <Col span={19}>{quote}<br /><div className="speaker">{speaker}</div></Col>
                </Row>  */}