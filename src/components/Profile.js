import React from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap'
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
						<Card.Title>Student Name</Card.Title>
						<Card.Text>School:</Card.Text>
						<Card.Text>My Skills:</Card.Text>
						<Card.Text>Current Projects:</Card.Text>
						<Button variant='primary'>See your connections' profiles</Button>
					</Card.Body>
				</Card>
				<div class='projects-list'>
					<Projects />
				</div>

				<div class='people-list'>
					<Connections />
				</div>
			</div>
		</div>
	)
}
