import React , { Component } from 'react';

import './landing-page.css'
import { Paper, Grid } from 'material-ui'

import Key from '../key'
import Box from '../box'
import Container from '../container'
	

export default class LandingPage extends Component {
	render() {
		return (
			<Grid container justify='space-around'>
				<Grid item xs={12} md={9}>
					<Paper className='landing-info spacey'> 
						<h1>Storybookr</h1>
						<h2>A choose your own adventure book site</h2>
						<h5>Built with <a href='https://reactjs.org/'>React</a> and <a href='https://www.djangoproject.com/'>Django</a></h5>
						<p>Storybookr is a site that allows anyone to experience a unique adventure throught the medium of text. Storybookr will provide the user with a prepared story that will allow them to choose the path they follow. Join in the journey yourself!</p>
					</Paper>
				</Grid>
				<Container>
					<Grid item>
						<Key name='key'/>
					</Grid>
					<Grid>
						<Box/>
					</Grid>
				</Container>
			</Grid>
		)
	}
}