import React, { Component } from 'react';
import ListView from './ListView';
import logo from '../logo.svg';
import list from './list.json';
import '../App.css';
import SingleView from './SingleView';


class App extends Component {
  
  state = {
    salongs: [],
    singleView: false,
    singleViewId: ''
  }

  componentDidMount(){
    /** 
     * When Component is "ready", call the function 
     * that will fetch the data and store it in state
     */

    this.setState({ salongs: list.data });
  }
  
  singleView = (salongId) => {
    this.setState({ singleView: true, singleViewId: salongId});
  }

  listView = () =>{
    this.setState({ singleView:false, singleViewId: '' });
  }

  render() {
    console.log(this.state)
    let view = <ListView salongs={this.state.salongs} 
                         singleView={this.singleView}
                />;
    if(this.state.singleView){
      view = <SingleView salongs={this.state.salongs} 
                         salongId={this.state.singleViewId}
                         listView={this.listView}
             />;
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
