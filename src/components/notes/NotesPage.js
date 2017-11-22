import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Pagination} from 'react-materialize'

import '../App.css';
import {fetchNotes, deleteNote, fetchNotesCount} from '../../actions/notesActions';
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
    this.handlerSelectPage = this.handlerSelectPage.bind(this);
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    setTimeout(()=> {
      this.props.fetchNotes();
      this.props.fetchNotesCount();
    }, 1000);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/note')
  }

  handleRowSelection(selectedRows) {
    this.setState({
      selected: selectedRows
    });
  }

  isSelected(index) {
    return this.state.selected.indexOf(index) !== -1;
  }

  deleteNoteHandler(){
    const {state: {selected}} = this;
    const deleteNotesID = selected.map((selectIndex)=>{
      return this.props.notes[selectIndex]._id;
    });

    return this.props.deleteNote(deleteNotesID).then(()=> {
      toastr.success('Success delete note');
      this.setState({ selected: [] });
      this.getNotes();
    }).catch(err=> {
      toastr.error('Error delete note', err);
    });
  }

  handlerSelectPage(selectedPage) {
    this.props.fetchNotes({page: selectedPage});
  }

  render() {
    const {notesCount, notes, limitPerPage, notesPage} = this.props;
    const itemsPage = Math.ceil(notesCount / limitPerPage);

    return (
      <div>
        <div>
          <div>
            <h1>Notes page</h1>
          </div>
          <div className="row-flex">
            <Button
              label="Create new Note"
              onClick={this.redirectToAddCoursePage}
            />
            <Button
              disabled={this.state.selected.length < 1}
              label="Delete"
              onClick={this.deleteNoteHandler}
            />

            {notes.length > 0 && <Pagination items={itemsPage} activePage={notesPage} maxButtons={5} onSelect={this.handlerSelectPage}/>}
          </div>
          <NotesList
            isSelectedHandler={this.isSelected}
            notes={notes}
            handleRowSelection={this.handleRowSelection}
          />
        </div>
      </div>
    );
  }
}

NotesPage.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const {notesState: { notes, notesCount },pagination: { limit, notesPage }} = state;
  
  return {
    notes: notes,
    notesCount: notesCount,
    limitPerPage: limit,
    notesPage: notesPage
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (params) => dispatch(fetchNotes(params)),
  fetchNotesCount: () => dispatch(fetchNotesCount()),
  deleteNote: (ids) => dispatch(deleteNote(ids))
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesPage);
