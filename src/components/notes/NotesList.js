import React from 'react';
import PropTypes from 'prop-types';
import NotesListRows from './NotesListRows';

const NoteList = ({ notes }) => {
  return (
    <table className="table">
      <thead>
        <th>Title</th>
        <th>Text</th>
      </thead>

      <tbody>
        {notes.map((note)=>
          <NotesListRows key={note.title+ '_' +note._id} note={note}/>
        )}
      </tbody>
    </table>
  );
};

NoteList.propTypes =  {
  courses: PropTypes.array
};

export default NoteList;
