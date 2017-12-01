import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../ItemTypes'

const style = {
	'font-size': '126px', 
	'cursor': 'move',	
}

const boxTarget = {
	drop() {
		return { name: '🔒' }
	},
}

// @DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver(),
// 	canDrop: monitor.canDrop(),
// }))
class Box extends Component {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
	}

	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = ''
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive ? '🔒' : '🔒'}
			</div>,
		)
	}
}
export default DropTarget(ItemTypes.BOX, boxTarget, (connect , monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}
})(Box)