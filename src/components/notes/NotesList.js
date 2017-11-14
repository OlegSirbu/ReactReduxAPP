import React from 'react';
import PropTypes from 'prop-types';
import NotesListRows from './NotesListRows';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';


const NoteList = ({ notes, isSelected }) => {
  return (
    <Table
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Text</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
      >
        {notes.map((note,index)=>
          <NotesListRows key={note.title+ '_' +note._id} note={note} index={index} isSelected={isSelected}/>
        )}
      </TableBody>
    </Table>
  );
};

NoteList.propTypes =  {
  courses: PropTypes.array
};

export default NoteList;
