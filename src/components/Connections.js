import React from 'react'
import { Card } from 'react-bootstrap'
import ConnectionModal from './modals/ConnectionModal'

let dummyPeople = [
	{ name: 'Mary Louise', school: 'Monroe Community College', skills:'Hair Design', projects: "Hair Design", id: 10 }, // id is just for rendering purposes
	{ name: 'Elon Musk', school: 'Stanford University', skills:'Chief Executive officer tasks', projects: "SpaceX", id: 11 },
	{
		name: 'Michelle Obama',
		school: 'Harvard Law school',
		skills: 'Speech writing and Law',
		projects: "School Lunch",
		id: 12,
	},
	{ name: 'Tom Hanks', school: 'CSU Sacremento', skills: 'acting', projects: "Toy Story 4", id: 13 },
	{ name: 'Jeff Bezos', school: 'Princeton University', skills: 'Management', projects: "Amazon", id: 14 },
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
