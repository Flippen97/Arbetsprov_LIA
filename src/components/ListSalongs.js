import React from 'react';
import SalongCard from './SalongCard';

function ListSalongs(props){
  let list = ''
  if(props.priceFilter !== 0){
    const thing = props.priceFilter.split('-')
    const lessThen = parseInt(thing[0], 10);
    const moreThen = parseInt(thing[1], 10);
    list = props.salongs.map((salong) => {
        if ((salong.price) >= lessThen && (salong.price) <= moreThen) {
          return (
            <SalongCard salong={salong}
                        key={salong.id}
                        singleView={props.singleView}
            />
          )
         }
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


