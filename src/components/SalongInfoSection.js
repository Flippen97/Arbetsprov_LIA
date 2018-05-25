import React from 'react';
import arrowDown from '../select-arrow.svg'

function SalongInfoSection(props){
    const workingHoursArray = props.salong.workingHours.split('-')
    return(
        <section key={props.salong.id} className="singleViewInfoSection">
            <div>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="singleViewAddress">
                    {props.salong.address+", "+props.salong.zip+" "+props.salong.city}
                </span>
            </div>
            <div>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span className="singleViewWorkingHours">
                    {"Öppet till "+workingHoursArray[1]+" idag"}<img src={arrowDown} alt="arrow down" />
                </span>
            </div>
            <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span className="singleViewPhone">
                    {props.salong.phone}
                </span>
            </div>
            <div>
                <i className="fa fa-globe" aria-hidden="true"></i>
                <span className="singleViewWebAddress">
                    {props.salong.webAddress}
                </span>
            </div>
            <div>
                <p> { props.salong.info } </p> 
            </div>
        </section>
      )
  }
  export default SalongInfoSection;

  /*
  onClick={() => props.singleView(props.salong.id)}
  
  <div>
                <h2 className="salongCardName">{ props.salong.name }</h2>
                <StarRating rating={props.salong.rating}
                            itemclass="salongCardStars"
                />
                <span className="salongCardAmountRating">{"(" + props.salong.amountRating + ")"}</span>
                <span className="salongCardAddress">{props.salong.address}</span>
            </div>
            <div>
                <span className="salongCardPrice"> { props.salong.price + "kr"} </span>
                <span className="salongCardDuration">{props.salong.duration + "min" }</span>
            </div>
            <div>
                <span className="chevronForward"><i className="fa fa-chevron-right"></i></span>
            </div>
  
  */