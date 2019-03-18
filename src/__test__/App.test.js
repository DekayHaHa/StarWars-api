import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App'
import testUtililty, { mockPeopleValues } from './testUtililty'

describe('App', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<App
			/>
		);
	});
	it.skip('should get random number from 1 to 7', () => {
		// figure out how to test component did mount
	})
	it('should have default state', () => {
		// expectation
		expect(wrapper.state('favorite')).toEqual(false)
		expect(wrapper.state('favoriteCount')).toEqual(0)
		expect(wrapper.state('error')).toEqual('')
		expect(wrapper.state('category')).toEqual('')
		expect(wrapper.state('randomMovie')).toBeLessThan(8)
	})
	it('should match snapshot', () => {
		// expectation
		expect(wrapper).toMatchSnapshot();
	})
	it.skip('should fetch with getMovie', () => {
		// test async fetch
	})
	it('should update favoriteCount state', () => {
		// setup
		expect(wrapper.state('favoriteCount')).toEqual(0)
		// execution
		wrapper.instance().favoriteCount(mockPeopleValues)
		// expectation
		expect(wrapper.state('favoriteCount')).toEqual(3)
	})
	it('should update favorite state', () => {
		// setup
		expect(wrapper.state('favorite')).toEqual(false)
		// execution
		wrapper.instance().favoriteHandle(true)
		// expectation
		expect(wrapper.state('favorite')).toEqual(true)
	})
	it('should update category and reset favorite state', () => {
		// setup
		expect(wrapper.state('category')).toEqual('')
		wrapper.instance().favoriteHandle(true)
		// execution
		wrapper.instance().changeCategory('people')
		// expectation
		expect(wrapper.state('category')).toEqual('people')
		expect(wrapper.state('favorite')).toEqual(false)
	})
})
