import React from 'react'
import { Modal, Button, Card } from 'react-bootstrap'

export default class ConnectionModal extends React.Component {
	state = {
		show: false,
	}

	render() {
		return (
			<>
				<Button
					style={{ background: '#449955' }}
					onClick={() => this.setState({ show: true })}>
					{this.props.mainbut}
				</Button>

				<Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Card style={{ width: '20rem' }}>
							<Card.Img variant='profilepic' src='https://picsum.photos/200' />
							<Card.Body>
								<Card.Title>{this.props.name} </Card.Title>
								<Card.Text>School: {this.props.school} </Card.Text>
								<Card.Text>My Skills: {this.props.skills}</Card.Text>
								<Card.Text>Current Projects:{this.props.projects} </Card.Text>
							</Card.Body>
						</Card>
					</Modal.Body>
					<Modal.Footer>
						<Button
							style={{ background: '#449955' }}
							onClick={() => this.setState({ show: false })}>
							{this.props.fbut}
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
