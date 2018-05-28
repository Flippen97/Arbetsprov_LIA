import React from 'react';

function FilterMenu(props) {
  let filter = '';
  if (props.toggleFilter) {
    filter = (
      <select onChange={props.filterList}>
        <option value={0}>Filtrera på pris</option>
        <option value="0-199">Pris: 0 - 199 kr</option>
        <option value="200-399 ">Pris: 200 - 399 kr</option>
        <option value="400-599">Pris: 400 - 599 kr</option>
        <option value="500-10000">Pris: 600 kr -</option>
      </select>
    );
  }
  return filter;
}
export default FilterMenu;
