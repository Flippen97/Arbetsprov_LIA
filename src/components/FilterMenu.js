import React from 'react';

function FilterMenu(props){
    let filter = '';
    if(props.toggleFilter){
        filter =  <select onChange={props.filterList}>
                    <option value={0}>Välj värde</option>
                    <option value="0-99">0-99</option>
                    <option value="100-199">100-199</option>
                    <option value="200-299 ">200-299</option>
                    <option value="300-399">300-399</option>
                    <option value="400-499">400-499</option>
                    <option value="500-599">500-599</option>
                  </select>;
    } 
    return filter;
  }
  export default FilterMenu;