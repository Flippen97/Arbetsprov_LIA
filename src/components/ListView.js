import React from 'react';
import ListSalongs from './ListSalongs';
import FilterMenu from './FilterMenu';

class ListView extends React.Component {
  state = {
    togglefFilter: false,
    priceFilter: 0,
  };
  toggleFilter = () => {
    if (this.state.togglefFilter) {
      this.setState({ togglefFilter: false });
    } else {
      this.setState({ togglefFilter: true });
    }
  };
  filterList = (event) => {
    this.setState({ priceFilter: event.target.value });
  };
  render() {
    return (
      <div className="listView-container">
        <header>
          <span className="chevronBack">
            <i className="fa fa-chevron-left" />
          </span>
          <h1 className="headerTitle">Hår</h1>
          <span className="filterIcon">
            <i
              className="fa fa-sliders fa-rotate-90"
              onClick={this.toggleFilter}
            />
          </span>
        </header>
        <FilterMenu
          toggleFilter={this.state.togglefFilter}
          filterList={this.filterList}
        />
        <ul>
          <ListSalongs
            salongs={this.props.salongs}
            priceFilter={this.state.priceFilter}
            singleView={this.props.singleView}
          />
        </ul>
      </div>
    );
  }
}
export default ListView;
