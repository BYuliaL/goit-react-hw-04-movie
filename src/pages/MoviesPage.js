import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';

import SearchForm from '../component/SearchForm/SearchForm';
import MoviesList from '../component/MoviesList';

const apiKey = 'bfc0b177c45bde411d6d53ddc48eee25';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams?.query) {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${queryParams.query}`,
      ).then(response => this.setState({ movies: response.data.results }));
    }
  }

  onChangeQuery = query => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
    ).then(response => {
      this.setState({ movies: response.data.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} query={this.state.query} />
        <MoviesList movies={movies} />
      </>
    );
  }
}
export default MoviesPage;
