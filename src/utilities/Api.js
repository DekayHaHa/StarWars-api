const fetchByKey = (key) => {
	const url = `https://swapi.co/api/${key}`
	return fetch(url)
		.then(response => response.json())
}
	
const peoplePull = (values) => {
	const cleanedPeeps = values.map(elem => { 
		const { name, homeworld, species } = elem
		let peep = { name, favorite: false}
		return fetch(homeworld)
			.then(response => response.json())
			.then(data => ({ ...peep, 
											 homeworld: data.name,
											 population: data.population}))
			.then(dataTwo => fetchSingle(species[0], 'name', dataTwo))
	})
	return Promise.all(cleanedPeeps)
}

const planetsPull = (values) => {
	console.log(values)
	const cleanedPlanets = values.map(elem => {
		const { name, terrain, population, climate, residents } = elem
		const peeps = fetchValues(residents)
		return { name, terrain, population, climate, favorite: false, peeps }
	})
	return Promise.all(cleanedPlanets)
	
	// Name
	// Terrain
	// Population
	// Climate
	// Residents
	// A button to “Favorite” the planet
}

const fetchValues = (values) => {
	const cleanedValues = values.map(val => {
		
	})
	return fetch(values)
		.then(response => response.json())
		.then(data => data.name)
		.then(name => name)
}
const vehiclesPull = (values) => {
	console.log(values)
}

const fetchSingle = (url, key, data) => {
	return fetch(url)
		.then(response => response.json())
		.then(data => data[key])
		.then(result => ({ ...data, extra: result }))
}

export { fetchByKey, peoplePull, planetsPull, vehiclesPull }