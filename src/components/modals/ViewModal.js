import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class BootModal extends React.Component {
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
						Description: {this.props.description}
						<br></br>
						Participants:
						{this.props.participants.map((p) => (
							<li>{p}</li>
						))}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={() => this.setState({ show: false })}>
							{this.props.fbut}
						</Button>
						<Button
							style={{ background: '#449955' }}
							onClick={() => this.setState({ show: false })}>
							{this.props.sbut}
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
