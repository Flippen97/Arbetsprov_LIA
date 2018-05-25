import React from 'react';
import SalongCard from './SalongCard';

function ListSalongs(props){
  let list = ''
  if(props.priceFilter !== 0 && props.priceFilter !== "0"){
    const price = props.priceFilter.split('-')
    const lessThen = parseInt(price[0], 10);
    const moreThen = parseInt(price[1], 10);
    list = props.salongs.map((salong) => {
        if ((salong.price) >= lessThen && (salong.price) <= moreThen) {
          return (
            <SalongCard salong={salong}
                        key={salong.id}
                        singleView={props.singleView}
            />
          )
         }
         return null;
        });
  }
  else{
    list = props.salongs.map((salong) => {
      return (
        <SalongCard salong={salong}
                    key={salong.id}
                    singleView={props.singleView}
        />
      )
    })
  }
  return list;
}

export default ListSalongs;