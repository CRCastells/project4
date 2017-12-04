import React from 'react'
import { Route, IndexRoute } from 'react-router'
import LandingPage from '../components/landing-page/landing-page'
import Book from '../components/book/book'
import App from '../App'

export default (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={LandingPage}/>
			<Route path='/book' component={Book}>
			</Route>
		</Route>
  </div>
)