import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import './App.css';
import {ProgressBar} from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
    <div>
      <MuiThemeProvider>
        <div className="App">
          <Header {...this.props} />
          {(this.props.loading) ? <ProgressBar/> : <div className="fakeProgress"></div>}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notesState.notes,
    news: state.news,
    loading : state.ajaxStatusReducer > 0
  }
};

export default connect(mapStateToProps)(App);

