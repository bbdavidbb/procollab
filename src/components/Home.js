import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export const Home = () => {
	return (
		<div className='blank'>
			<h1>Home page </h1>
			<Container>
				<Row>
					<Col>1 of 3</Col>
					<Col>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
		</div>
	)
}
