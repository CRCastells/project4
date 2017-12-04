import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from '../ItemTypes'
import { browserHistory } from 'react-router'
const style = {
	fontSize: '126px', 
	'cursor': 'move',	
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor) {
		// const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
			// window.location.href += 'http://localhost/book/'
			browserHistory.push('book')
		}
	},
}


class Key extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	}

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1

		return connectDragSource(<div style={{ ...style, opacity }}>{name}</div>)
	}
}

// @DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
// 	connectDragSource: connect.dragSource(),
// 	isDragging: monitor.isDragging(),
// }))

export default DragSource(ItemTypes.BOX, boxSource, (connect , monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
})(Key)