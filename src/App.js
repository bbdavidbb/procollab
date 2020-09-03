import React from 'react'
import './App.css'
import './index.css'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import Login from './components/Login'
import SignUp from './components/Signup'

import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Route path='/' exact component={Home} />
			<Route path='/Signup' exact component={SignUp} />
			<Route path='/Profile' exact component={Profile} />
			<Route path='/Login' exact component={Login} />
		</div>
	)
}

export default App
