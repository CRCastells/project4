import React, { Component } from 'react';
import Book from './components/book/book'
import LandingPage from './components/landing-page/landing-page'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import { AppBar, Grid } from 'material-ui'
import NotFound from './not-found'

 export default class App extends Component {
  render() {
    return (
    	<Router>
		  	<div>
				  <AppBar>
						<Grid container justify='space-between' alignItems='center'>
							<Grid item>
								<h1 className='title-bar'>StoryBookr</h1>
							</Grid>
							<Grid item className='nav'>
								<Link to='/' className='nav-item'>Home</Link>
								<Link to='/book' className='nav-item'>Book</Link>
								<a href='/admin/' className='nav-item'>Admin Portal</a>
							</Grid>
						</Grid>
					</AppBar>
					<Switch>
						<Route exact path='/' component={LandingPage}/>
						<Route path='/book' component={Book}/>
						<Route component={NotFound}/>
					</Switch>
				</div>		
			</Router>
    );
  }
}

