import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const CourseListRow = ({note}) => {
  return(
    <tr>
      <td><Link to={'/note/'+note._id}>{note.title}</Link></td>
      <td>{note.text}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  notes: PropTypes.object
};

export default CourseListRow;
