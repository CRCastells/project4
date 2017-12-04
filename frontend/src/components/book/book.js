import React, { Component } from 'react'
import './book.css'
import { Paper, Grid } from 'material-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from '../page/page'

export default class Book extends Component {

	constructor(props){
		super(props)
		this.state= {
			page2: 'page2',
			links2: ['worst','murst','turst']
		}
	}

	componentDidMount(){
		// call backend for the book 
	}
	render() {
		

		return (
			<div>
				<Grid container justify='center' spacing={0}>
					<Router> Router
						<Route path={`${match.url}/:page`} component={Page}/>
					</Router>
				</Grid>
			</div>
		)
	}
}