import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import './App.css';
import {fetchNotes} from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
    <div>
      <MuiThemeProvider>
        <div className="App">
          <Header
            loading={this.props.loading}
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
    loading: false
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

