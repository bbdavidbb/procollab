import React from 'react'
import { Card } from 'react-bootstrap'
import './css/Timeline.scss'
import ViewModal from './modals/ViewModal'
import JoinModal from './modals/JoinModal'

let dummyProjects = [
	{
		title: "Tim's hardware website",
		description: 'Website design',
		participants: ['George'],
		date: 'a day ago',
	},
	{
		title: 'Polka tunk band',
		description: 'Need a singer for band',
		participants: ['Alice', 'Patricia'],
		date: '8/31/20',
	},
	{
		title: 'Francois Quebecois',
		description: 'Daily French practice',
		participants: ['Felix', 'Manette'],
		date: '8/20/20',
	},
	{
		title: 'Project 4',
		description: 'Project details',
		participants: ['Alice', 'Patricia'],
		date: '7/4/20',
	},
]

export default class Projects extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyProjects.map((p) => (
					<div key={p}>
						<Card className='projects'>
							<Card.Body className='projcards'>
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
								<Card.Text>Posted: {p.date}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ViewModal
									mainbut='view'
									fbut='message'
									sbut='apply'
									title={p.title}
									description={p.description}
									participants={p.participants}
								/>
								<JoinModal
									mainbut='join'
									title={p.title}
									description={p.description}
									fbut='send'
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
