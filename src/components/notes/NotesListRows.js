import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const NotesListRow = ({note, index}) => {
  return(
    <TableRow>
      <TableRowColumn>{index}</TableRowColumn>
      <TableRowColumn><Link to={'/note/'+note._id}>{note.title}</Link></TableRowColumn>
      <TableRowColumn>{note.text}</TableRowColumn>
    </TableRow>
  );
};

NotesListRow.propTypes = {
  notes: PropTypes.object
};

export default NotesListRow;
