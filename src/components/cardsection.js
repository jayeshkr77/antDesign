import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';
import Cards from './cards';
import './css/cardsection.css';
import Ribbon from './ribbon';
import axios from 'axios';

class CardSection extends Component {
	render() {
		var count = 0;
		var top = 2;
		const gen = [];
		console.log(this.props.high);
		const bloglist = this.props.low.map((blog, index)=>
		<Col key={index} sm={{span:12}} md={{span:8}} lg={{span:6}} >
		<Link to={'/blog/' + blog.id} >
			<Cards genre={gen} title={blog.title}/>
		</Link>
	</Col>

		);
		return (
			<Layout>
				<div class="container" style={{ marginTop: 30 }}>
					<Row gutter={16}>
					{bloglist}				
					</Row>
					<Row>
						<Link to={this.props.high ? '/blog/' + this.props.high.id : '/'} >
						<Card style={{ padding: 0, width: '90%', marginLeft: 110, height: 250, marginTop: 30, marginBottom: 30 }}>
							<Row>
								<Col span={6} style={{ position: 'absolute', marginLeft: '-140px' }}>
									<div>
										{gen && gen.map(gen=> <div style = {{position:'absolute',top:(top+(count++)*28),left:-10,}}><Ribbon genre={gen} /></div>)}
										<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height="200px" />
									</div>

								</Col>
								<Col span={20} style={{ position: 'absolute', marginLeft: '130px', textAlign: 'justify' }}>
								<div style={{width:'100%',textAlign:"center",textDecoration:"underline"}}><h3>{this.props.high && this.props.high.title}</h3></div>
									{this.props.high && this.props.high.content}					
								</Col>
								
							</Row>
						</Card>
						</Link>
					</Row>
				</div>
			</Layout>
		);
	}
}

export default CardSection;
const ribbon1 = {
	position: 'absolute',
	top: 2,
	left: -10,
}

const ribbon2 = {
	position: 'absolute',
	top: 28,
	left: -10,
}