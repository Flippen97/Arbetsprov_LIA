import React from 'react';
import arrowDown from '../select-arrow.svg';

function SalongInfoSection(props) {
  const workingHoursArray = props.salong.workingHours.split('-');
  return (
    <section key={props.salong.id} className="singleViewInfoSection">
      <ul>
        <li className="singleViewAddress">
          <i className="fa fa-map-marker" aria-hidden="true" />
          {`${props.salong.address}, ${props.salong.zip} ${props.salong.city}`}
        </li>
        <li className="singleViewWorkingHours">
          <i className="fa fa-clock-o" aria-hidden="true" />
          {`Öppet till ${workingHoursArray[1]} idag`}
          <img src={arrowDown} alt="arrow down" />
        </li>
        <li className="singleViewPhone">
          <i className="fa fa-phone" aria-hidden="true" />
          {props.salong.phone}
        </li>
        <li className="singleViewWebAddress">
          <i className="fa fa-globe" aria-hidden="true" />
          {props.salong.webAddress}
        </li>
        <li>
          <p> {props.salong.info} </p>
        </li>
      </ul>
    </section>
  );
}
export default SalongInfoSection;
