import React from 'react'
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'

export default class JoinModal extends React.Component {
	state = {
		show: false,
		message: '',
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
						Description: {this.props.description}
						<br></br>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>Message to Project manager </InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								as='textarea'
								aria-label='With textarea'
								value={this.state.message}
								onChange={(e) => this.setState({ message: e.target.value })}
							/>
						</InputGroup>
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
