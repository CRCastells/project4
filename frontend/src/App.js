import React, { Component } from 'react';

import { Link } from 'react-router'

import './App.css';
import { AppBar, Grid } from 'material-ui'

 export default class App extends Component {
  render() {
    return (
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
				{this.props.children}
			</div>
    );
  }
}

