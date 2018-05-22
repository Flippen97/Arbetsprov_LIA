import React from 'react';

function SalonCard(props){
    return(
        <div key={props.salong.id} onClick={() => props.singleView(props.salong.id)}>
            <p>{ props.salong.name }</p>
            <p>{ props.salong.rating}
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
            </p>
            <span> { props.salong.price + "kr"} </span>
            <span><i className="fa fa-chevron-right"></i></span>
        </div>
    )
  }
  export default SalonCard;