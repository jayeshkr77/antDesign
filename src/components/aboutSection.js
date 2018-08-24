import React, { Component } from 'react';
import { Layout, Card, Row, Col } from 'antd';

const { Meta } = Card;

class AboutCards extends Component {
	render() {
		return (
			<Card
				style={{ width: '100%', marginTop: '10px', marginRight: '5px' }}
			>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1, marginLeft: '-20px' }}>
						<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="240px" height="320px" />
					</div>
					<div style={{ flex: 2, textAlign: 'justify' }}>
						{this.props.title}
						{this.props.description}
						<br />
						<div className="read-button" style={{position:'absolute',bottom:25}}>
							<a>READ</a>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}
export default AboutCards;