import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ConnectionModal from './modals/ConnectionModal'

let dummyPeople = [
	{ name: 'Mary Louise', school: 'a project the does something', id: 10 }, // id is just for rendering purposes
	{ name: 'Elon Musk', school: 'a project the does something better', id: 11 },
	{
		name: 'Michelle Obama',
		school: 'a project the does something worst',
		id: 12,
	},
	{ name: 'Tom Hanks', school: 'a project the does something aassd', id: 13 },
]

export default class Connections extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyPeople.map((p) => (
					<div key={p.id}>
						<Card>
							{/* <Card.Header>{p.name}</Card.Header> */}
							<Card.Body>
								<Card.Title>{p.name}</Card.Title>
								<Card.Text>{p.school}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ConnectionModal
									mainbut='view profile'
									fbut='message'
									sbut='add connection'
									name={p.name}
									school={p.school}
									skills={p.skills}
									projects={p.projects}
								/>
							</Card.Footer>
						</Card>
					</div>
				))}
			</React.Fragment>
		)
	}

	render() {
		return <React.Fragment>{this.dummyRender()}</React.Fragment>
	}
}
