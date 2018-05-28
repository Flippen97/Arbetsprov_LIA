import React from 'react';

function StarRating(props) {
  return (
    <span className={props.itemclass}>
      <i
        className={props.rating >= 1 ? 'fa fa-star' : 'fa fa-star-o'}
        aria-hidden="true"
      />
      <i
        className={props.rating >= 2 ? 'fa fa-star' : 'fa fa-star-o'}
        aria-hidden="true"
      />
      <i
        className={props.rating >= 3 ? 'fa fa-star' : 'fa fa-star-o'}
        aria-hidden="true"
      />
      <i
        className={props.rating >= 4 ? 'fa fa-star' : 'fa fa-star-o'}
        aria-hidden="true"
      />
      <i
        className={props.rating >= 5 ? 'fa fa-star' : 'fa fa-star-o'}
        aria-hidden="true"
      />
    </span>
  );
}
export default StarRating;
