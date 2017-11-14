import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
//import * as courseActions from '../../actions/notesActions';
import NotesList from './NotesList';
import Button from '../common/Button';

class NotesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      selected: []
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    });
  };

  redirectToAddCoursePage() {
    browserHistory.push('/note')
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Notes page</h2>
          </div>
          <div >
            <Button
              label="Create new Note"
              onClick={this.redirectToAddCoursePage}
            />
            <NotesList notes={this.props.notes} isSelected={this.isSelected} handleRowSelection={this.handleRowSelection}/>
          </div>
        </div>
      </div>
    );
  }
}

NotesPage.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

// function mapDispatchToProps(dispatch) {
  // return {
  //   actions: bindActionCreators(courseActions, dispatch)
  // };
// }

export default connect(mapStateToProps)(NotesPage);
