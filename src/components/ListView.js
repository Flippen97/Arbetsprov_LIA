import React from 'react';
import ListSalongs from './ListSalongs';
import FilterMenu from './FilterMenu';

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

    return (
        <div className="listView-container">
            <header>
                <span><i className="fa fa-chevron-left"></i></span>
                <span>HÅR</span>
                <span onClick={this.toggleFilter}><i className="fa fa-sliders fa-rotate-90"></i></span>
            </header>
        <FilterMenu toggleFilter={this.state.togglefFilter}
                    filterList={this.filterList}
        />
        <ListSalongs salongs={this.props.salongs}
                     priceFilter={this.state.priceFilter}
                     singleView={this.props.singleView} 
                    />
        </div>
    );
  }
}
export default ListView;