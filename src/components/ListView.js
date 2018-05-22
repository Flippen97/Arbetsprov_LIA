import React from 'react';
import ListSalongs from './ListSalongs';

class ListView extends React.Component {
  state = {
    togglefFilter: false,
    priceFilter: 0
  }
  toggleFilter = () =>{
    if(this.state.togglefFilter){
      this.setState({ togglefFilter: false });
    }else{
      this.setState({ togglefFilter: true });
    }
  }
  filterList = (event) => {
    this.setState({ priceFilter: event.target.value });
  }
  render(){
    console.log(this.state)
    
    let list = this.props.salongs.map((salong) => {
      //  if (salong.price === (this.state.PriceFilter)) {
          return (<div key={salong.id}>
              <div key={salong.id} onClick={() => this.props.singleView(salong.id)}>
                <p> { salong.name } </p>
                <p>{ salong.rating}</p>
                <span> { salong.price + "kr"} </span>
              </div>
            </div>
          )
        })
    if(this.state.priceFilter != 0){
      const thing = this.state.priceFilter.split('-')
      console.log(list)
      const lessThen = parseInt(thing[0], 10);
      const moreThen = parseInt(thing[1], 10);
      list = this.props.salongs.map((salong) => {
          if ((salong.price) >= lessThen && (salong.price) <= moreThen) {
            return (<div key={salong.id}>
                <div key={salong.id} onClick={() => this.props.singleView(salong.id)}>
                  <p> { salong.name } </p>
                  <p>{ salong.rating}</p>
                  <span> { salong.price + "kr"} </span>
                </div>
              </div>
            )
           }
          });
    }

    let filter = '';
    if(this.state.togglefFilter){
      filter = <select onChange={this.filterList}>
      <option value={0}>Välj värde</option>
      <option value="0-99">0-99</option>
      <option value="100-199">100-199</option>
      <option value="200-299 ">200-299</option>
      <option value="300-399">300-399</option>
      <option value="400-499">400-499</option>
      <option value="500-599">500-599</option>
    </select>;
    } 
    return (
    <div>
      <header>
      <button onClick={this.toggleFilter} >show</button>
    </header>
      {filter}
      { list }
    </div>);
  }
}
export default ListView;