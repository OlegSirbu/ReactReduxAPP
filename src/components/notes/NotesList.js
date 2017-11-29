import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const NodeRow = ({_id, title, text}, index, {isSelectedHandler, notesPage}) => {
  return(
    <TableRow key={_id} selected={isSelectedHandler(index)}>
      <TableRowColumn><Link to={`/note/${_id}/${notesPage}`}>{title}</Link></TableRowColumn>
      <TableRowColumn>{text}</TableRowColumn>
    </TableRow>
  )
};

const NoteList = ({ notes, handleRowSelection, ...props }) => {
  return (
    <div>
    <Table
      onRowSelection={handleRowSelection}
      selectable={true}
      multiSelectable={true}
    >
      <TableHeader
        enableSelectAll={true}
      >
        <TableRow>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Text</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        deselectOnClickaway={false}
      >
        {notes.map((note, index) => NodeRow(note, index, props))}
      </TableBody>
    </Table>
    </div>
  );
};

NoteList.propTypes =  {
  courses: PropTypes.array
};

export default NoteList;
