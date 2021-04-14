import React, { Component } from 'react';
import Axios from 'axios';

import MoviesList from '../component/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=bfc0b177c45bde411d6d53ddc48eee25',
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
    // console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}
