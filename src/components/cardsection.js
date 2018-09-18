import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';
import Cards from './cards';
import './css/cardsection.css';
import Ribbon from './ribbon';

class CardSection extends Component {

	constructor(props){
		super(props);
		this.state = {
			post : []
		}
	}

	// _renderCards = () => {
	//     let cards = this.props.data.map(card =>
	//         <Card title={card.title} />
	//     )

	//     return cards;
	// }
	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/posts/1')
	// 		.then(response => response.json())
	// 		.then(json => {console.log(json);this.setState(post:json)})
	// }

	render() {
		var count = 0;
		var top = 2;
		var gen = ['mechanical','civil']
		return (
			<Layout>
				<div class="container" style={{ marginTop: 30 }}>
					<Row gutter={16}>
						{/* {this.state.posts.map(card => {${count<=3 && <Col span={6}><Link to='/blog/${card.id}'> <Card key={movie.id} card={posts} /></Link></Col>}${count++}})}*/}
						<Col span={6}>
							<Link to='/blog/123'>
								<Cards genre={gen}/>
							</Link>
						</Col>
						<Col span={6}>
							<Cards />
						</Col>
						<Col span={6}>
							<Cards />
						</Col>
						<Col span={6}>
							<Cards />
						</Col>

					</Row>
					<Row>
						<Card style={{ padding: 0, width: 1000, marginLeft: 110, height: 250, marginTop: 30, marginBottom: 30 }}>
							<Row>
								<Col span={6} style={{ position: 'absolute', marginLeft: '-140px' }}>
									<div>
										{gen && gen.map(gen=> <div style = {{position:'absolute',top:(top+(count++)*28),left:-10,}}><Ribbon genre={gen} /></div>)}
										<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height="200px" />
									</div>

								</Col>
								<Col span={20} style={{ position: 'absolute', marginLeft: '130px', textAlign: 'justify' }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Col>
							</Row>
						</Card>
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