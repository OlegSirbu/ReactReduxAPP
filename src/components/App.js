import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
    <div>
      <MuiThemeProvider>
        <div className="App">
          <Header
            {...this.props}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    notes: state.notes,
    news: state.news,
    loading: false
  }
};

export default connect(mapStateToProps)(App);

