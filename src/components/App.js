import React, { Component } from 'react';
// import './App.css';
import { Header } from './Header'
import { Container } from './Container'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      randomMovie: {},
      error: '',
      category: ''
    }
  }
  componentDidMount () {
    const randomMovie = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    const url = `https://swapi.co/api/films/${randomMovie}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { opening_crawl, title, release_date } = data
        return { crawl: opening_crawl, title: title, date: release_date}
      })
      .then(randomMovie => this.setState({ randomMovie }))
      .catch(error => this.setState({ error: error.message}))
  }
  
  changeCategory = (category) => {
    this.setState({ category: category })
  }
  render() {
    const { randomMovie, category } = this.state
    return (
      <div>
        <Header changeCategory={this.changeCategory}/>
        <Container movie={randomMovie} category={category}/>
      </div>
    );
  }
}