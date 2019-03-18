const mockPeopleValues = [
	{
		name: "David",
		homeworld: 'https://swapi.co/api/planet0',
		species: ['https://swapi.co/api/species0'],
		forceMaster: true
	},
	{
		name: "Devin",
		homeworld: 'https://swapi.co/api/planet1',
		species: ['https://swapi.co/api/species1'],
		forceMaster: true
	},
	{
		name: "Christie",
		homeworld: 'https://swapi.co/api/planet2',
		species: ['https://swapi.co/api/species2'],
		forceMaster: false
	}
]
const mockPeopleFinal = [
	{
		name: "David",
		homeworld: 'Mars',
		population: 'David',
		species: 'Alien',
		favorite: false,
		type: 'people'
	},
	{
		name: "Devin",
		homeworld: 'Earth',
		population: '7.5B',
		species: 'Human',
		favorite: false,
		type: 'people'
	},
	{
		name: "Christie",
		homeworld: 'The Moon',
		population: 4,
		species: 'Earthling',
		favorite: false,
		type: 'people'
	}
]
const mockPlanetValues = [
	{
		name: "Moon",
		terrain: 'Barren',
		population: 1000,
		climate: 'Dry',
		residents: ['https://swapi.co/api/planet0']
	},
	{
		name: "Mars",
		terrain: 'Red',
		population: 100,
		climate: 'Dry',
		residents: ['https://swapi.co/api/planet1']
	},
	{
		name: "Venus",
		terrain: 'Mountain',
		population: 10,
		climate: 'Acid Rain',
		residents: ['https://swapi.co/api/planet2']
	}
]
const mockVehicleValues = [
	{
		name: 'Bike',
		model: 'Speedster',
		vehicle_class: 'Racer',
		passengers: 1,
		useless: true
	},
	{
		name: "Millienum",
		model: 'Falcon',
		vehicle_class: 'Frieghter',
		passengers: 10,
		useless: true
	},
	{
		name: "Death Star",
		model: 'Empire',
		vehicle_class: 'Planet Class',
		passengers: 100000,
		useless: true
	}
]

const mockVehicleFinal = [
	{
		name: 'Bike',
		model: 'Speedster',
		class: 'Racer',
		passengers: 1,
		favorite: false,
		type: 'vehicles'
	},
	{
		name: "Millienum",
		model: 'Falcon',
		class: 'Frieghter',
		passengers: 10,
		favorite: false,
		type: 'vehicles'
	},
	{
		name: "Death Star",
		model: 'Empire',
		class: 'Planet Class',
		passengers: 100000,
		favorite: false,
		type: 'vehicles'
	}
]
const mockFinalPlanets = [{
	name: 'Moon',
	terrain: 'Barren',
	population: 1000,
	climate: 'Dry',
	favorite: false,
	residents: 'PEOPLES',
	type: 'planets'
},
{
	name: 'Mars',
	terrain: 'Red',
	population: 100,
	climate: 'Dry',
	favorite: false,
	residents: 'PEOPLES',
	type: 'planets'
},
{
	name: 'Venus',
	terrain: 'Mountain',
	population: 10,
	climate: 'Acid Rain',
	favorite: false,
	residents: 'PEOPLES',
	type: 'planets'
}]
const mockFavorites = [{
	name: 'Moon',
	terrain: 'Barren',
	population: 1000,
	climate: 'Dry',
	favorite: true,
	residents: 'PEOPLES',
	type: 'planets'
},
{
	name: 'Mars',
	terrain: 'Red',
	population: 100,
	climate: 'Dry',
	favorite: false,
	residents: 'PEOPLES',
	type: 'planets'
},
{
	name: 'Venus',
	terrain: 'Mountain',
	population: 10,
	climate: 'Acid Rain',
	favorite: false,
	residents: 'PEOPLES',
	type: 'planets'
}]
const mockFavoritesFinal = [{
	name: 'Moon',
	terrain: 'Barren',
	population: 1000,
	climate: 'Dry',
	favorite: true,
	residents: 'PEOPLES',
	type: 'planets'
}]


export { mockPeopleValues, mockPeopleFinal, mockPlanetValues, mockVehicleValues, mockVehicleFinal, mockFinalPlanets, mockFavorites, mockFavoritesFinal }