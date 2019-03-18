import React, { Component } from 'react';


export class Header extends Component {
	constructor (props) {
		super(props);

	}
	handleClick = (e) => {
		this.props.changeCategory(e.target.className)
	}
	render () {
		return (
			<div>
				<button className='movie'>MOVIE</button>
				<button className='people' onClick={this.handleClick}>PEOPLE</button>
				<button className='planets' onClick={this.handleClick}>PLANET</button>
				<button className='vehicles' onClick={this.handleClick}>VEHICLES</button>
				<button className='vehicles'>FAVORITES</button>
			</div>
		)
	}
}