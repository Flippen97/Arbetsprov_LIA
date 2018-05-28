import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ListView from './ListView';
import list from './list.json';
import '../App.css';
import SingleView from './SingleView';

class App extends Component {
  state = {
    salongs: [],
    singleView: false,
    singleViewId: '',
  };

  componentDidMount() {
    /**
     * When Component is "ready", call the function
     * that will get the list of the data and store it in state
     */
    this.getSalongs();
  }
  getSalongs = () => {
    this.setState({ salongs: list.data });
  };

  singleView = (salongId) => {
    this.setState({ singleView: true, singleViewId: salongId });
  };

  listView = () => {
    this.setState({ singleView: false, singleViewId: '' });
  };

  render() {
    let view = (
      <ListView salongs={this.state.salongs} singleView={this.singleView} />
    );
    if (this.state.singleView) {
      view = (
        <SingleView
          salongs={this.state.salongs}
          salongId={this.state.singleViewId}
          listView={this.listView}
        />
      );
    }
    return <main className="main-container">{view}</main>;
  }
}

export default App;
