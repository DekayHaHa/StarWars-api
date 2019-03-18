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
	filterFavorites = () => {
		const { people, vehicles, planets } = this.state
		const allValues = [...people, ...vehicles, ...planets];
		return allValues.filter(val => val.favorite)
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
	findCard = (name, type) => {
		const toChange = this.state[type]
		const newData = toChange.map(val => {
			if (val.name === name) {
				val.favorite = val.favorite ? false : true
			} 
			return val
		})
		this.setState({ [type]: newData }, () => {
			const favorites = this.filterFavorites()
			this.props.favoriteCount(favorites)
		})
	}

	sendDownCards = (values) => {
		return values.map(val => {
			return <Card key={val.name} card={val} findCard={this.findCard}/>
		})
	}
	render () {
		const { movie, category, favorite } = this.props
		if (category && this.state[category].length === 0) {
			this.setData(category)
		}
		const display = this.state[category] ? this.sendDownCards(this.state[category]): <MovieScroll {...movie} />
		let favorites;
		if (favorite) {
			const justFavs = this.filterFavorites()
			favorites = this.sendDownCards(justFavs)
		}
		return (
			<div className='container'>
				{favorites || display}
			</div>
		)
	}
}