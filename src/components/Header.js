import React, { Component } from 'react';


export class Header extends Component {
	handleClick = (e) => {
		this.props.changeCategory(e.target.className)
	}
	render () {
		const favoriteToggle = this.props.favorite ? false : true
		return (
			<div className='header'>
				<h1>STARWARS API</h1>
				<button className='people' onClick={this.handleClick}>PEOPLE</button>
				<button className='planets' onClick={this.handleClick}>PLANET</button>
				<button className='vehicles' onClick={this.handleClick}>VEHICLES</button>
				<button onClick={() => this.props.favoriteHandle(favoriteToggle)}>FAVORITES {this.props.favoriteCount}</button>
			</div>
		)
	}
}