import React, { Component } from 'react';
import apiServices from '../services/api-services';

import MoviesList from '../component/MoviesList';
import Spinner from '../component/Spinner';

export default class HomePage extends Component {
  state = {
    movies: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    apiServices
      .apiTrendMovies()
      .then(movies => this.setState({ movies: movies }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, error, isLoading } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <h1 className="mainTitle">Trending today</h1>
        {isLoading && <Spinner />}
        <MoviesList movies={movies} />
      </>
    );
  }
}
