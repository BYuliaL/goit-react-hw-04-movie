import { Component } from 'react';
import apiServices from '../../services/api-services';
import Spinner from '../Spinner';
import ReviewsList from '../ReviewsList';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    apiServices
      .apiReviews(movieId)
      .then(reviews => this.setState({ reviews: reviews }))
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { reviews, error, isLoading } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Spinner />}
        {reviews.length === 0 ? (
          <p className={styles.warning}>
            We don`t have any reviews for this movie =(
          </p>
        ) : (
          <ReviewsList reviews={reviews} />
        )}
      </>
    );
  }
}

export default Reviews;
