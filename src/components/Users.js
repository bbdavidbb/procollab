import React from 'react'
import { Card } from 'react-bootstrap'
import ProfileModal from './modals/ProfileModal'

export default function Users() {
	let dummyUsers = [
		{
			name: 'Ruby Larson',
			university: 'University of California: Los Angeles',
			skills: 'Electrical engineering',
			projects: 'semiconducter research group',
		},
		{
			name: 'Julie Zabel',
			university: 'Georgia Tech',
			skills: 'Scuba Diving',
			projects: 'Coral Reef Conservation',
		},
		{
			name: 'Charles McCarty',
			university: 'Case Western Reserve University',
			skills: 'Scuba Diving',
			projects: 'Coral Reef Conservation',
		},
		{
			name: 'Rob Mariano',
			university: 'University of Florida',
			skills: 'Scuba Diving',
			projects: 'Coral Reef Conservation',
		},
		{
			name: 'Hillary Wilde',
			university: 'Amherst College',
			skills: 'Scuba Diving',
			projects: 'Coral Reef Conservation',
		},
	]

	return (
		<React.Fragment>
			{dummyUsers.map((p) => (
				<div>
					<div key={p.id}>
						<Card style={{ margin: '0 0 30px 0' }}>
							<Card.Body>
								<Card.Title>{p.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									{p.university}
								</Card.Subtitle>
							</Card.Body>
							<Card.Footer>
								<ProfileModal
									style={{ background: '#449955' }}
									mainbut='view profile'
									fbut='message'
									sbut='add connection'
									name={p.name}
									school={p.university}
									skills={p.skills}
									projects={p.projects}
								/>
							</Card.Footer>
						</Card>
					</div>
					<div></div>
				</div>
			))}

			{/* {setShow ? modelInfo : <div></div>} */}
		</React.Fragment>
	)
}
