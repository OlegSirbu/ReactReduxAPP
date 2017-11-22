import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchNotes, saveNote} from '../../actions/notesActions';
import NotesForm from './NotesForm';
import toastr from 'toastr';

class ManageNotesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: Object.assign({}, this.props.note),
      saving: false
    };

    this.updateNoteState = this.updateNoteState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    if(this.props.params.id) this.props.fetchNotes();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.note._id !== nextProps.note._id) {
      this.setState({note: Object.assign({}, nextProps.note)});
    }
  }

  updateNoteState(event) {
    const field = event.target.name;
    let note = this.state.note;
    note[field] = event.target.value;
    return this.setState({note: note});
  }

  onSave(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.saveNote(this.state.note)
      .then(() => {
        toastr.success('Succes save note');
        this.redirect();
      })
      .catch(err => {
        toastr.error('Error in save note', err.response.data);
        this.setState({saving: false});
      })
  }

  redirect(){
    this.setState({saving: false});
    this.props.fetchNotes().then(()=>{
      this.context.router.push('/notes');
    });
  }

  render() {
    return (
      <div>
        <h1>Manage note</h1>
        <NotesForm
          onChange={this.updateNoteState}
          onSave={this.onSave}
          note={this.state.note}
        />
      </div>
    );
  }
}

ManageNotesPage.propTypes = {};

ManageNotesPage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(notes, id){
  const noteFiltered = notes.filter(note => note._id === id );
  if(noteFiltered) return noteFiltered[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let noteId = ownProps.params.id;
  let note = {_id: '', title: '', text: ''};
  const {notesState: { notes }} = state;

  if(noteId && notes.length > 0){
    note = getCourseById(notes, noteId);
  }

  return {
    note: note
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  saveNote: (params) => dispatch(saveNote(params))
});


export default connect(mapStateToProps, mapDispatchToProps)(ManageNotesPage);
