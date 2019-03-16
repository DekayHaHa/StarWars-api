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
			.then(dataTwo => {
				return fetchValues(species)
					.then(val => {
						const species = val.join('')
						return {...dataTwo, species}})
			})
	})
	return Promise.all(cleanedPeeps)
}

// const fetchSpecies = () => {

// }

const planetsPull = (values) => {
	const cleanedPlanets = values.map(elem => {
		const { name, terrain, population, climate, residents } = elem
		return fetchValues(residents)
			.then(data => {
				let residents = data.join(', ')
				return { name, terrain, population, climate, favorite: false, residents }})
	})
	return Promise.all(cleanedPlanets)
}

const fetchValues = (values) => {
	const cleanedValues = values.map(val => {
		return fetch(val)
			.then(response => response.json())
			.then(data => data.name)
	})
	return Promise.all(cleanedValues)

}
const vehiclesPull = (values) => {
	const cleanedVehicles = values.map(elem => {
		const { name, model, vehicle_class, passengers } = elem
		return { name, model, class: vehicle_class, passengers, favorite: false }
	})
	return Promise.all(cleanedVehicles)
}

// const fetchSingle = (url, key, data) => {
// 	return fetch(url)
// 		.then(response => response.json())
// 		.then(data => data[key])
// 		.then(result => ({ ...data, extra: result }))
// }

export { fetchByKey, peoplePull, planetsPull, vehiclesPull }