import React, { Component } from 'react'
import './book.css'
import { Grid, Paper } from 'material-ui'
import Page from '../page/page'
import { Route, Link } from 'react-router-dom'


export default class Book extends Component {

	constructor(props){
		super(props)
		this.state= {
		
		}
	}
	
	render() {
		let match = this.props.match
		return (
			<div>
				<Grid container justify='center' spacing={0}>
					<Route path={`${match.url}/:pageId`} component={Page}/>
					<Route exact path={match.url} render={()=>(
						<Paper className='book'>
							<h1>Ready to begin? <Link to='/book/1'>Start</Link></h1>
						</Paper>
					)}/>
				</Grid>
			</div>
		)
	}
}