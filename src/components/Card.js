import React, { Component } from 'react'
import {CardInfo} from './CardInfo'

export class Card extends Component {
	constructor (props) {
		super(props);
	}
	displayCards = (card) => {
				return Object.keys(card).map((elem, i)=>
					<CardInfo key={i} title={elem} info={card[elem]}/>
					)
	}
	render () {
		const info = this.displayCards(this.props.card)
	return (
		<div>
			{info}
			</div>

	)}
}