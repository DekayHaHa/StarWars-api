import React from 'react'

export const MovieScroll = ({title, date, crawl}) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{crawl}</p>
			<p>{title}</p>
			<p>{date}</p>
		</div>
	)
}