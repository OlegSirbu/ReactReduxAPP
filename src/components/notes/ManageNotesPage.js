import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notesActions from '../../actions/notesActions';

import NotesForm from './NotesForm';

class ManageNotesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: Object.assign({}, this.props.note),
      error: {},
      saving: false
    };

    console.log('STATE',this.state.note);
    this.updateNoteState = this.updateNoteState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  updateNoteState(event) {
    const field = event.target.name;
    debugger;
    let note = this.state.note;
    note[field] = event.target.value;
    return this.setState({note: note});
  }

  onSave(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveNotes(this.state.note)
      .then(() => this.redirect())
      .catch(err => {
        this.setState({saving: false});
      })
  }

  redirect(){
    this.setState({saving: false});
    this.context.router.push('/notes')
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
  const note = notes.filter(note => note._id == id );
  if(note) return note[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let noteId = ownProps.params.id;
  let note = {_id: '', title: '', text: ''};

  if(noteId && state.notes.length > 0){
    note = getCourseById(state.notes, noteId);
  }
  console.log('NOTES',note);///need send new note to state!!!!
  return {
    note: note
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageNotesPage);
