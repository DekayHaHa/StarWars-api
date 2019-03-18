import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import {Container} from '../components/Container'
import testUtililty, { mockFavorites, mockFavoritesFinal } from './testUtililty'

describe('Container', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Container />);
	});
	it('should have default state', () => {
		// expectation
		expect(wrapper.state()).toEqual({
			people: [],
			planets: [],
			vehicles: [],
			error: ''
		})
	})
	it('should match snapshot', () => {
		// expectation
		expect(wrapper).toMatchSnapshot();
	})
	it('should filterFavorite', () => {
		// setup
		wrapper.setState({ people: mockFavorites })
		// execution 
		// const wrapper.instance().filterFavorites()
	})
	it('should setData via fetch', () => {
		// write async test
	})
	it('should toggle favorite on specific card', () => {

	})
})