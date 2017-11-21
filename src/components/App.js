import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import './App.css';
import {ProgressBar} from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    console.log('this.props.loading',this.props.loading);
    return (
    <div>
      <MuiThemeProvider>
        <div className="App">
          <Header {...this.props} />
          {this.props.loading && <ProgressBar/>}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    notes: state.notes,
    news: state.news,
    loading : state.ajaxStatusReducer > 0
  }
};

export default connect(mapStateToProps)(App);

