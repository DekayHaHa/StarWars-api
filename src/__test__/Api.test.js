import React from 'react';
import Api, { fetchByKey, peoplePull, planetsPull, vehiclesPull, fetchValues } from '../utilities/Api';
import testUtililty, { mockPeopleValues, mockPeopleFinal, mockPlanetValues, mockVehicleValues, mockVehicleFinal, mockFinalPlanets } from './testUtililty'

describe('Api', () => {
	let mockData;
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
			fetchByKey(key).then(data => {
				// expectation
				expect(data).toEqual(mockData);
			})

		});
		it("if response not ok show error", () => {
			// setup
			const key = 'dinosuars';
	
			fetch = jest.fn().mockImplementationOnce(() => Promise.reject({
				ok: false,
				message: 'Response not ok'
			}));
			// execution
			fetchByKey(key)
				.catch(error => {
					// expectation
					expect(error.message).toBe('Response not ok');
				})
	
		});
	})
	describe('peoplePull', () => {
		beforeEach(() => {
			fetch = jest.fn().mockImplementation(() => Promise.resolve({
				ok: true,
				status: 200,
				json: () => Promise.resolve({name: 'Joe', population: 1})
			}));
		});
		it('should fetch by specific key for each value', () => {
			// setup
			// execution
			peoplePull(mockPeopleValues)
			mockPeopleValues.forEach((val, i) => {
				// expectation
				expect(fetch).toHaveBeenCalledWith(`https://swapi.co/api/planet${i}`)
			})
		})
		it.skip('Should call fetchValues with correct URL', () => {
			// setup
			// execution
			// expectation
			expect(1).toEqual(2)
		})
		it.skip('should return expected data', () => {
			// setup
			// fetchValues.mockImplementationOnce(() => Promise.resolve({name: 'Mark'}))
			// execution
			peoplePull(mockPeopleValues).then(data => {
				expect(data).toEqual(mockPeopleFinal)
			})
			// expectation
		})
		it("if response not ok show error", () => {
			// setup
			fetch = jest.fn().mockImplementation(() => Promise.reject({
				ok: true,
				status: 200,
				message: 'Response not ok',
				json: () => 12
			}));
			// execution
			peoplePull(mockPeopleValues).catch(error => {
				// expectation
				expect(error.message).toBe('Response not ok');
			})
		});
	})
	describe('planetsPull', () => {
		beforeEach(() => {
			fetch = jest.fn().mockImplementation(() => Promise.resolve({
				ok: true,
				status: 200,
				json: () => Promise.resolve({name: 'PEOPLES'})
			}));
		});
		it.skip('should call fetchValues with correct URL', () => {
			// setup
			// execution
			// expectation
			expect(1).toEqual(2)
		})
		it('should return expected data', () => {
			// setup
			// execution
			planetsPull(mockPlanetValues).then(data => {
				// expectation
				expect(data).toEqual(mockFinalPlanets)
			})
			// expect(fecthVaules).toHaveBeenCalledWith('https://swapi.co/api/planet12')
		})
		it("if response not ok show error", () => {
			// setup
			fetch = jest.fn().mockImplementation(() => Promise.reject({
				ok: true,
				status: 200,
				message: 'Response not ok',
				json: () => 12
			}));
			// execution
			planetsPull(mockPlanetValues).catch(error => {
				// expectation
				expect(error.message).toBe('Response not ok');
			})
		});
	})
	describe('vehiclesPull', () => {
		it('should return expected data', () => {
			// setup
			// execution
			vehiclesPull(mockVehicleValues).then((data) => {
				// expectation
				expect(data).toEqual(mockVehicleFinal)
			})
		})
	})
	describe('fetchValues', () => {
		let mockFetchValues;
		let mockValuesFinal;
		beforeEach(() => {
			mockFetchValues = [
				0, 1, 2
			]
			mockValuesFinal = [
				'final', 'final', 'final'
			]
			fetch = jest.fn().mockImplementation(() => Promise.resolve({
				ok: true,
				status: 200,
				json: () => Promise.resolve({name: 'final'})
			}));
		});
		it('should call fetch with correct URL', () => {
			// setup
			// execution
			fetchValues(mockFetchValues).then(() => {
				mockFetchValues.forEach(val => {
					// expectation
					expect(fetch).toHaveBeenCalledWith(val)
				})
			})
		})
		it('should return expected data', () => {
			// setup
			// execution
			fetchValues(mockFetchValues).then(data => {
					// expectation
				expect(data).toEqual(mockValuesFinal)
			})
		})
		it("if response not ok show error", () => {
			// setup
			fetch = jest.fn().mockImplementation(() => Promise.reject({
				ok: true,
				status: 200,
				message: 'Response not ok',
				json: () => 12
			}));
			// execution
			fetchValues(mockFetchValues).catch(error => {
					// expectation
					expect(error.message).toBe('Response not ok');
			})
		});
	})
})