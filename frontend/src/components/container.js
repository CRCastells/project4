import React, { Component } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Key from './key'
import Box from './box'
import Grid from 'material-ui/Grid'

export default class Container extends Component {
	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<Grid container justify='space-around'>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Key name='🔑'/>
						</div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Box />
						</div>
				</Grid>
			</DragDropContextProvider>
		)
	}
}