import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './css/Projects.scss'
import ViewModal from './modals/ViewModal'
import JoinModal from './modals/JoinModal'
import ProfileModal from './modals/ProfileModal'

let dummyProjects = [
	{
		title: 'Music Collab',
		description: 'Need a guitarist and a singer for a short term project',
		participants: ['Gotrek', 'Felix'],
	},
	{
		title: 'Gaming Reviews',
		description: 'Project details',
		participants: ['Gotrek', 'Felix', 'Thanqol'],
	},
	{
		title: 'Developers needed',
		description: 'Large scale project',
		participants: ['Gotrek', 'Felix', 'Kislev'],
	},
	{
		title: 'Project 4',
		description: 'Project details',
		participants: ['Gotrek', 'Felix', 'Moulder'],
	},
]

export default class Projects extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyProjects.map((p) => (
					<div key={p}>
						<Card>
							<Card.Header>{p.title}</Card.Header>
							<Card.Body>
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
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
