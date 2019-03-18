import React, { Component } from 'react';
import { Header } from './Header'
import { Container } from './Container'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      randomMovie: {},
      favorite: false,
      favoriteCount: 0,
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
        return { crawl: opening_crawl, title, date: release_date }
      })
      .then(randomMovie => this.setState({ randomMovie }))
      .catch(error => this.setState({ error: error.message}))
  }
  favoriteCount = (val) => {
    this.setState({ favoriteCount: val.length})
  }
  favoriteHandle = (favorite) => {
    this.setState({ favorite })
  }
  changeCategory = (category) => {
    this.setState({ category, favorite: false })
  }
  render() {
    const { randomMovie, category, favorite, favoriteCount } = this.state
    return (
      <div>
        <Header changeCategory={this.changeCategory} favoriteHandle={this.favoriteHandle} favoriteCount={favoriteCount}/>
        <Container movie={randomMovie} category={category} favorite={favorite} favoriteCount={this.favoriteCount}/>
      </div>
    );
  }
}
