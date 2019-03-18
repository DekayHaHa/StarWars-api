import React, { Component } from 'react'
import {CardInfo} from './CardInfo'

export class Card extends Component {
	displayInfo = (card) => {
				return Object.keys(card).map((elem, i)=>
					<CardInfo key={i}  title={elem} info={card[elem]}/>
					)
	}
	render () {
		const { card, findCard } = this.props
		const info = this.displayInfo(card)
	return (
		<div className='card'>
			{info}
			<button onClick={() => findCard(card.name, card.type)} className={`favorite-${card.favorite}`}>FAVORITE</button>
		</div>
	)}
}