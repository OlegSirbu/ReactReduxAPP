import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import '../App.css';
import {fetchNotes} from '../../actions/notesActions';
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

  componentDidMount() {
    this.props.fetchNotes();
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
            <h1>Notes page</h1>
          </div>
          <div>
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

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesPage);
