import React from 'react'
import { Card} from 'react-bootstrap'
import './css/Projects.scss'
import ViewModal from './modals/ViewModal'
import JoinModal from './modals/JoinModal'

let dummyProjects = [
	{
		title: 'Music Collab',
		description: 'Need a guitarist and a singer for a short term project',
		participants: ['Gork', 'Mork'],
	},
	{
		title: 'Gaming Reviews',
		description: 'Editing short articles',
		participants: ['Mike Phe'],
	},
	{
		title: 'Developers needed',
		description: 'Large scale project',
		participants: ['Gotrek', 'Felix', 'Kislev'],
	},
	{
		title: 'Babysitter',
		description: '2 year old',
		participants: ['none'],
	},
	{
		title: 'Pool Cleaner',
		description: 'Minimum wage',
		participants: ['Jack Pandya'],
	},
]

export default class Projects extends React.Component {
	dummyRender() {
		return (
			<React.Fragment>
				{dummyProjects.map((p) => (
					<div key={p}>
						<Card>
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
									&nbsp;
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
