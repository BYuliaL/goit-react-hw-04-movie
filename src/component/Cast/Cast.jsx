import React, { Component } from 'react';

import Spiner from '../Spinner';
import CastList from '../CastList';
import apiServices from '../../services/api-services';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    apiServices
      .apiCast(movieId)
      .then(cast => this.setState({ cast: cast }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { cast, error, isLoading } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Spiner />}
        <CastList cast={cast} />
      </>
    );
  }
}

export default Cast;
