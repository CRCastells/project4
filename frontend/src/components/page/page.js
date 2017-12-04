import React, { Component } from 'react'
import { Paper, Grid } from 'material-ui'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default class Page extends Component {

	constructor(props){
		super(props)
		this.state = {
			content: 'test',
			links: ['testlink']
		}
	}

	componentDidMount(){
		console.log(this.props);
	}

	render () {
		let links = this.state.links.slice()
		links = links.map(link => {
			return (
				<div>
					<Link to={'/book/'+link}>{link}</Link>
				</div>
				)
		})
		return (
					<Grid item>
						<Paper className='book'>
							<div>
								{this.state.content}
							</div>
							{this.state.links}
						</Paper>
					</Grid>
					)
	}
}