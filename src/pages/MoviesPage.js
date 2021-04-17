import React, { Component } from 'react';
import queryString from 'query-string';

import ApiServices from '../services/api-services';
import SearchForm from '../component/SearchForm/SearchForm';
import MoviesList from '../component/MoviesList';
import Spinner from '../component/Spinner';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { search } = this.props.location;
    const queryParams = queryString.parse(search);

    if (queryParams?.query) {
      this.setState({ isLoading: true });
      ApiServices.apiSearchMovie(queryParams.query)
        .then(movies => this.setState({ movies: movies }))
        .catch(error => this.setState(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onChangeQuery = query => {
    this.setState({ isLoading: true });

    ApiServices.apiSearchMovie(query)
      .then(movies => this.setState({ movies: movies }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, error, isLoading } = this.state;
    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <SearchForm onSubmit={this.onChangeQuery} query={this.state.query} />
        {isLoading && <Spinner />}
        <MoviesList movies={movies} />
      </>
    );
  }
}
export default MoviesPage;
