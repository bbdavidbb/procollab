import React from 'react'
import { Modal, Button, Card } from 'react-bootstrap'

export default class ConnectionModal extends React.Component {
	state = {
		show: false,
	}

	render() {
		return (
			<>
				<Button variant='primary' onClick={() => this.setState({ show: true })}>
					{this.props.mainbut}
				</Button>

				<Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Card style={{ width: '20rem' }}>
							<Card.Img
								variant='profilepic'
								src='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
							/>
							<Card.Body>
								<Card.Title>{this.props.name} </Card.Title>
								<Card.Text>School: {this.props.school} </Card.Text>
								<Card.Text>My Skills: </Card.Text>
								<Card.Text>Current Projects: </Card.Text>
							</Card.Body>
						</Card>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={() => this.setState({ show: false })}>
							{this.props.fbut}
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
