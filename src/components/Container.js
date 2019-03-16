import React, { Component } from 'react'
import { MovieScroll } from './MovieScroll'
import { Card } from './Card'
import { fetchByKey, peoplePull, planetsPull, vehiclesPull } from '../utilities/Api'

export class Container extends Component {
	constructor (props) {
		super(props);
		this.state = {
			people: [],
			planets: [],
			vehicles: [],
			error: ''
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.category !== prevProps.category) {
			this.setData(this.props.category)
		}
	}

	setData = (cat) => {
		const actions = {
			people: (param) => peoplePull(param),
			planets: (param) => planetsPull(param),
			vehicles: (param) => vehiclesPull(param)
		}
		fetchByKey(cat)
			.then(data => actions[cat](data.results))
			.then(finalForm => this.setState({ [cat]: finalForm }))
			.catch(error => this.setState({ error: error.message }))
	}

	render () {
		const { movie, category } = this.props
		
		return (
			<div>
				{!category && <MovieScroll {...movie}/>}
				{category && <Card toDisplay={this.state[category]}/>}
			</div>
		)
	}
}