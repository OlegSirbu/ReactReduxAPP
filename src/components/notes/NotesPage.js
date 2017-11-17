import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import '../App.css';
import {fetchNotes, deleteNote} from '../../actions/notesActions';
import NotesList from './NotesList';
import Button from '../common/Button';
import toastr from 'toastr';

class NotesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      selected: []
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.getNotes = this.getNotes.bind(this);
  }

  componentDidMount() {
    this.getNotes()
  }

  getNotes(){
    setTimeout(()=>{
      return this.props.fetchNotes();
    }, 1000);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/note')
  }

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    });
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  deleteNoteHandler = () => {
    const {state: {selected}} = this;
    const deleteNotesID = selected.map((selectIndex)=>{
      return this.props.notes[selectIndex]._id;
    });

    return this.props.deleteNote(deleteNotesID).then(()=>{
      toastr.success('Success delete note');
      this.setState({selected: []});
      this.getNotes();
    }).catch(err=>{
      toastr.error('Error delete note',err);
    });
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
            <Button
              disabled={this.state.selected.length < 1}
              label="Delete"
              onClick={this.deleteNoteHandler}
            />
            <NotesList
              isSelectedHandler={this.isSelected}
              notes={this.props.notes}
              handleRowSelection={this.handleRowSelection}
             />
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
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: (ids) => dispatch(deleteNote(ids))
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesPage);
