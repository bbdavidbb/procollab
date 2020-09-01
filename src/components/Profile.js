import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './css/Profile.scss'

export const Profile = () => {
	return (
		<div class='profile-contents'>
			<div class='blank'></div>
			<Card style={{ width: '20rem' }}>
				<Card.Img variant='profilepic' src='holder.js/100px180' />
				<Card.Body>
					<Card.Title>Student Name</Card.Title>
					<Card.Text>School:</Card.Text>
					<Card.Text>My Skills:</Card.Text>
					<Card.Text>Current Project:</Card.Text>
					<Button variant='primary'>See your connections' profiles</Button>
				</Card.Body>
			</Card>
		</div>
	)
}
