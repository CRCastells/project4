import React, { Component } from 'react'
import { Paper, Grid } from 'material-ui'
import { Link } from 'react-router-dom'
import * as $ from 'jquery'

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
		$.ajax({
			url: '/api/pages/' + link,
			type: 'GET'
		})
		.done((data) => {
			let path = JSON.parse(data)
			this.setState({
				page: {
					content: path.page.content,
					links: path.page.links
				}
			})
		});
	}

	componentDidMount(){
		
		this.setState({
			page: {
				content: 'Dont try to cheat!',
				links: [
				{
					id: 9,
					title:"Let's go!"
				}]
			}
		})
	}

	render () {
		let links = this.state.page.links.slice()
		links = links.map((link, i) => {
			return (
				<div key={i}>
					<Link to={'/book/'+link.id} onClick={event => this.grabNewPage(link.id)}>{link.title}</Link>
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