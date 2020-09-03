import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Projects from './Projects'
import Connections from './Connections'
import './css/Profile.scss'

export const Profile = (props) => {
	return (
		<div class='profile-contents'>
			<div class='grid'>
				<Card style={{ width: '20rem' }}>
					<Card.Img
						variant='profilepic'
						src='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
					/>
					<Card.Body>
						<Card.Title>Michael</Card.Title>
						<Card.Text>Seize the day</Card.Text>
						<Card.Text>School: Harvard</Card.Text>
						<Card.Text>My Skills: Java, Python</Card.Text>
						<Card.Text>Current Projects: None</Card.Text>
						<Button variant='primary'>Post a project</Button>
					</Card.Body>
				</Card>

				<div class='projects-list'>
					<h2>Current Projects</h2>
					<Projects />
				</div>

				<div class='people-list'>
					<h2>My Connections</h2>
					<Connections />
				</div>
			</div>
		</div>
	)
}
