import React, { Component } from 'react'
import { Paper, Grid } from 'material-ui'
import { Link } from 'react-router-dom'

export default class Page extends Component {

	constructor(props){
		super(props)
		this.state = {
			page: {
				content: '',
				links: ['']
			}
		}
	}

	grabNewPage(link){
		this.setState({
			page: {
				content: 'New Content',
				links: ['link1', 'link2']
			}
		})
	console.log(link)
	}

	componentDidMount(){
		
		this.setState({
			page: {
				content: 'test',
				links: ['testlink']
			}
		})
	}

	render () {
		let links = this.state.page.links.slice()
		links = links.map((link, i) => {
			return (
				<div key={i}>
					<Link to={'/book/'+link} onClick={event => this.grabNewPage(link)}>{link}</Link>
				</div>
				)
		})
		return (
					<Grid item>
						<Paper className='book'>
							<div>
								{this.state.page.content}
							</div>
							<div className='links'>
									{links}
							</div>
						</Paper>
					</Grid>
					)
	}
}