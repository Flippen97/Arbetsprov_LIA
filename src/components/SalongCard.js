import React from 'react';
import StarRating from './StarRating';

function SalongCard(props) {
  return (
    <li key={props.salong.id} onClick={() => props.singleView(props.salong.id)}>
      <div>
        <span className="salongCardTime">{props.salong.time}</span>
      </div>
      <div>
        <h2 className="salongCardName">{props.salong.name}</h2>
        <StarRating rating={props.salong.rating} itemclass="salongCardStars" />
        <span className="salongCardAmountRating">
          {`(${props.salong.amountRating})`}
        </span>
        <span className="salongCardAddress">{props.salong.address}</span>
      </div>
      <div>
        <span className="salongCardPrice"> {`${props.salong.price}kr`} </span>
        <span className="salongCardDuration">
          {`${props.salong.duration}min`}
        </span>
      </div>
      <div>
        <span className="chevronForward">
          <i className="fa fa-chevron-right" />
        </span>
      </div>
    </li>
  );
}
export default SalongCard;
