import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

export default function Users() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = (p) => {
		setShow(true)
	}
	// let modelInfo = (p) => {
	// 		return (
	// 			<div>
	// 				<Modal show={show} onHide={handleClose}>
	// 					<Modal.Header closeButton>
	// 						<Modal.Title>{p.name}</Modal.Title>
	// 					</Modal.Header>

	// 					<Modal.Body>
	// 						<p>University: {p.university}</p>
	// 						<p>Skills: {p.skills}</p>
	// 					</Modal.Body>

	// 					<Modal.Footer>
	// 						<Button variant='secondary' onClick={handleClose}>
	// 							Close
	// 						</Button>
	// 						<Button variant='primary' onClick={handleClose}>
	// 							Message
	// 						</	Button>
	// 					</Modal.Footer>
	// 				</Modal>
	// 			</div>
	// 		)
	// 	}
	let dummyUsers = [
		{
			name: 'Ruby Larson',
			university: 'UCLA',
		},
		{
			name: 'Julie Zabel',
			university: 'Georgia Tech',
		},
		{
			name: 'Charles McCarty',
			university: 'Case Western Reserve University',
		},
		{ name: 'Rob Mariano', university: 'University of Florida' },
	]

	return (
		<React.Fragment>
			{dummyUsers.map((p) => (
				<div>
					<div key={p.id}>
						<Card>
							<Card.Body>
								<Card.Title>{p.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									{p.university}
								</Card.Subtitle>
								<Button onClick={() => handleShow(p)}>View Profile</Button>
								<Button>Msg</Button>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>{p.name}</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<p>University: {p.university}</p>
								<p>Skills: {p.skills}</p>
							</Modal.Body>

							<Modal.Footer>
								<Button variant='secondary' onClick={handleClose}>
									Close
								</Button>
								<Button variant='primary' onClick={handleClose}>
									Message
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
			))}

			{/* {setShow ? modelInfo : <div></div>} */}
		</React.Fragment>
	)
}
