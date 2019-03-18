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
	checkData = (cat) => {
		if(this.state[cat].length) {
			return this.sendDownCards(this.state[cat])
		} else {
			this.setData(cat)
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
	sendDownCards = (values) => {
		return values.map(val => {
			return <Card key={val.name} {...val.favorite} card={val} />
		})
	}
	render () {
		const { movie, category } = this.props
		if (category) {``
			this.setData(category)
		}
		const display = this.state[category] ? this.sendDownCards(this.state[category]): <MovieScroll {...movie} />
		return (
			<div>
				{display}
			</div>
		)
	}
}