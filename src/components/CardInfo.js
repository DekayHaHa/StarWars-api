import React from 'react'

export const CardInfo = ({title, info}) => {
	let display;
	if (title === 'favorite') {
		display = <button className={`favorite-${info}`}>FAVORITE</button>
	} else {
		display = <p>{`${title}: ${info || 'N/A'}`}</p>
	}
	return (
		display
	)
}