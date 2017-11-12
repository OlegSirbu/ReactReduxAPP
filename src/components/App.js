import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import {fetchNotes} from '../actions';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        {this.props.notes.map((note, index)=>{
          return <div key={index}>{note} </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

