import React from 'react';
import { shallow, mount } from 'enzyme';
import Api, { fetchByKey, peoplePull, planetsPull, vehiclesPull } from '../utilities/Api';

describe('Api', () => {
	let mockData;
	let mockValues;
	let mockFetchValues;
	describe('fetchByKey', () => {
		beforeEach(() => {
			mockData = {
				name: "Tatooine"
			}
			fetch = jest.fn().mockImplementation(() => Promise.resolve({
				ok: true,
				status: 200,
				json: () => Promise.resolve(mockData),
			}));
		});
	
		it("fetch call takes expected key", () => {
			// setup
			const key = 'dinosuars'
			// execution
			fetchByKey(key);
			// expectation
			expect(fetch).toHaveBeenCalledWith(`https://swapi.co/api/dinosuars`);
		});
	
		it("fetch call returns expected data", () => {
			// setup
			const key = 'dinosuars'
			// execution
			fetchByKey(key)
				.then(data => {
					// expectation
					expect(data).toEqual(mockData);
				})
		});
		// it("if response not ok show error", () => {
		// 	// setup
		// 	const key = 'dinosuars';
	
		// 	fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
		// 		ok: false
		// 	}));
		// 	// execution
		// 	fetchByKey(key)
		// 		.catch(error => {
		// 			// expectation
		// 			// console.log(error.message)
		// 			expect(error.message).toBe('Response not ok');
		// 		})
	
		// });
	})
	describe('peoplePull', () => {
		beforeEach(() => {
			mockValues = [
				{
					name: "David",
					homeworld: 'https://swapi.co/api/planet0',
					species: 'https://swapi.co/api/species0',
					forceMaster: true
				},
				{
					name: "Devin",
					homeworld: 'https://swapi.co/api/planet1',
					species: 'https://swapi.co/api/species1',
					forceMaster: true
				},
				{
					name: "Christie",
					homeworld: 'https://swapi.co/api/planet2',
					species: 'https://swapi.co/api/species2',
					forceMaster: false
				}
			]
			// mockPerson = {
			// 	name: "David",
			// 	homeworld: 'https://swapi.co/api/planet0',
			// 	species: 'https://swapi.co/api/species0'
			// }
			fetch = jest.fn().mockImplementation(() => Promise.resolve({
				ok: true,
				status: 200
			}));
			mockFetchValues = jest.fn()
		});
		it('should fetch by specific key for each value', () => {
			// setup
			// execution
			peoplePull(mockValues)
			// expectation
			mockValues.forEach((val, i) => {
				expect(fetch).toHaveBeenCalledWith(`https://swapi.co/api/planet${i}`)
			})
			// expect(fetch).toHaveBeenCalledWith('https://swapi.co/api/planet1')
			// expect(fetch).toHaveBeenCalledWith('https://swapi.co/api/planet2')
		})
		it('should call fetchValues with species', () => {
			// setup
			// execution
			peoplePull(mockValues)
			// expectation
			mockValues.forEach((val, i) => {
				expect(mockFetchValues).toHaveBeenCalledWith(`https://swapi.co/api/species${i}`)
			})
			
		})
	})
})