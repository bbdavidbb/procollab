import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './css/Projects.scss'

let dummyProjects = [
	{
		title: 'Project 1',
		description: 'Website design',
		date: 'a day ago',
	},
	{
		title: 'Project 2',
		description: 'Need a singer for band',
		date: '8/31/20',
	},
	{
		title: 'Project 3',
		description: 'Daily French practice',
		date: '8/20/20',
	},
	{ title: 'Project 4', description: 'Project details', date: '7/4/20' },
]

export default class Projects extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyProjects.map((p) => (
					<div key={p}>
						<Card className='projects'>
							{/* <Card.Header>{p.title}</Card.Header> */}
							<Card.Body className='projcards'>
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
								<Button variant='primary'>View</Button>
								<Button variant='primary'>Join</Button>
								<Card.Text>Posted: {p.date}</Card.Text>
							</Card.Body>
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
