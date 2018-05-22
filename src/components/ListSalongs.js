import React from 'react';

function ListSalongs(props){
  return props.salongs.map((salong) => {
    if (salong.id === (props.salongId)) {
      return (
        <div key={salong.id}>
          <button onClick={props.listView}>back</button>
          <p> { salong.name } </p> 
        </div>
      );
    }
    return null;
  });
}

export default ListSalongs;
