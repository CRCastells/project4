import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing-page/landing-page';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Container from './components/container';

 export default class App extends Component {
  render() {
    return (
      <div>
	      <Grid container justify='center'>
		      <Grid item xs={12} md={9}>
		      	<AppBar> <h1 className='bar-title'>StoryBookr</h1>
		      	</AppBar>
		      	<Paper className='landing-info spacey'>
		       		<LandingPage />
		       	</Paper>
		      </Grid>
		    </Grid>
			  <Grid container>
			    <Container />
			  </Grid>
      </div>
    );
  }
}

