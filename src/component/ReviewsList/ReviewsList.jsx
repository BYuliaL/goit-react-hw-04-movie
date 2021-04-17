import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.protoType = {
  reviews: PropTypes.array,
};

export default ReviewsList;
