import React from 'react';
import SalongCard from './SalongCard';

function splitPrice(priceFilter) {
  const price = priceFilter.split('-');
  const lessThen = parseInt(price[0], 10);
  const moreThen = parseInt(price[1], 10);
  return { lessThen, moreThen };
}

function ListSalongs(props) {
  let list = '';
  if (props.priceFilter !== 0 && props.priceFilter !== '0') {
    const priceObj = splitPrice(props.priceFilter);
    list = props.salongs.map((salong) => {
      if (
        salong.price >= priceObj.lessThen &&
        salong.price <= priceObj.moreThen
      ) {
        return (
          <SalongCard
            salong={salong}
            key={salong.id}
            singleView={props.singleView}
          />
        );
      }
      return null;
    });
  } else {
    list = props.salongs.map((salong) => (
      <SalongCard
        salong={salong}
        key={salong.id}
        singleView={props.singleView}
      />
    ));
  }
  return list;
}

export default ListSalongs;
