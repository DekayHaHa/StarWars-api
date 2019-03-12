import React, { Component } from 'react'

export class Container extends Component {
	constructor (props) {
		super(props);
		this.state = {

		}
	}

	render () {
		const { movie } = this.props
		return (
			<div>
				<h2>{movie.title}</h2>
				<p>{movie.crawl}</p>
				<p>{movie.title}</p>
				<p>{movie.date}</p>
			</div>
		)
	}
}