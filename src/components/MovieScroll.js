import React from 'react'

export const MovieScroll = ({title, date, crawl}) => {
	return (
		<section className='star-wars'>
		 <div className='crawl'>
			<h2 className='title'>{title}</h2>
			<p>{crawl}</p>
			<p>{title}</p>
			<p>{date}</p>
		 </div>
		</section>
	)
}