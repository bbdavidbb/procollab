import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './css/Home.scss'
import Timeline from './Timeline'
import Users from './Users'

export const Home = () => {
	return (
		<div className='blank'>
			<h1> Connect with students in the US</h1>

			<Container>
				<Row>
					<Col>Profile</Col>
					<Col xs={5}>
						Project List
						<div class='projects-list'>
							<Timeline />
						</div>
					</Col>
					<Col xs={4}>
						Potential Collaborators
						<Users />
					</Col>
				</Row>
			</Container>

			<div class='downArrow bounce'>
				<img
					width='40'
					height='40'
					alt=''
					src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4='
				/>
			</div>
			{/* <div class='ico animated'>
				<div class='circle circle-top'></div>
				<div class='circle circle-main'></div>
				<div class='circle circle-bottom'></div>

				<svg
					class='svg'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					x='0px'
					y='0px'
					viewBox='0 0 612 612'
					style='enable-background:new 0 0 612 612;'
					xmlSpace='preserve'>
					<defs>
						<clipPath id='cut-off-arrow'>
							<circle cx='306' cy='306' r='287' />
						</clipPath>

						<filter id='goo'>
							<feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
							<feColorMatrix
								in='blur'
								mode='matrix'
								values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
								result='goo'
							/>
							<feBlend in='SourceGraphic' in2='goo' />
						</filter>
					</defs>
					<path
						class='st-arrow'
						d='M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
          l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
          c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
          c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z'
					/>
				</svg>
			</div> */}
		</div>
	)
}
