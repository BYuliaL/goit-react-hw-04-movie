import { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import apiServices from '../services/api-services';

import MoviesDetails from '../component/MoviesDetails';
import Button from '../component/Button/Button';
import NavInf from '../component/NavInf/NavInf';
import routes from '../routes';

const Cast = lazy(() =>
  import('../component/Cast' /* webpackChunkName: "cast-page" */),
);

const Reviews = lazy(() =>
  import('../component/Reviews' /* webpackChunkName: "reviews-page" */),
);

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    apiServices
      .apiDetails(movieId)
      .then(genres => this.setState({ ...genres }))
      .catch(error => this.setState(error));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.movies);
  };

  render() {
    const { poster_path, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Button onClick={this.handleGoBack} />
        {poster_path && <MoviesDetails {...this.state} />}
        <NavInf />
        {/* <div>
          <h2 className="titleInf">Additional information</h2>
          <ul className="inform">
            <li className="informItem">
              <NavLink
                className="detailsInform"
                activeClassName="active"
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location?.state?.from },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="detailsInform"
                activeClassName="active"
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: location?.state?.from },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div> */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Suspense>{' '}
      </>
    );
  }
}

export default MovieDetailsPage;
