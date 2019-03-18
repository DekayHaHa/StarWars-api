import React from 'react'

export const CardInfo = ({ title, info }) => {
	const para = <p>{`${title}: ${info || 'N/A'}`}</p>
	let display = title === 'favorite' || title === 'type' ? null : para
	return (
		display
	)
}