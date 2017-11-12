import React from 'react';
import PropTypes from 'prop-types';
import NotesListRows from './NotesListRows';

const CourseList = ({ notes }) => {
  return (
    <table className="table">
      <thead>
        <th>Title</th>
        <th>Text</th>
      </thead>

      <tbody>
        {notes.map((note)=>
          <NotesListRows key={note._id} note={note}/>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes =  {
  courses: PropTypes.array
};

export default CourseList;
