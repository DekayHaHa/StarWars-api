import React from 'react';
import { shallow, mount } from 'enzyme';
import Api, { fetchByKey } from '../utilities/Api';

describe('Api', () => {
	let mockData;

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

	it("if response not ok show error", () => {
		// setup
		const key = 'dinosuars';

		fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
			ok: false
		}));
		// execution
		fetchByKey(key)
			.catch(error => {
				// expectation
				// console.log(error.message)
				expect(error.message).toBe('Response not ok');
			})

	});

})