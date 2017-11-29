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

const Row = ({id, title, currencies }) => {
  return(
    <TableRow key={id}>
      <TableRowColumn><Link to={`/bank/${id}`}>{title}</Link></TableRowColumn>
      <TableRowColumn>
        {currencies['USD'].ask}
      </TableRowColumn>
      <TableRowColumn>
        {currencies['USD'].bid}
      </TableRowColumn>
    </TableRow>
  )
};

const FinanceTable = ({ organization }) => {
  return (
    <Table>
      <TableHeader
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Currency USD sale</TableHeaderColumn>
          <TableHeaderColumn>Currency USD purchase</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
          displayRowCheckbox={false}
      >
        {organization.map((org) => org.currencies['USD'] && org.currencies['EUR'] && Row(org))}
      </TableBody>
    </Table>
  );
};

FinanceTable.propTypes =  {
  courses: PropTypes.array
};

export default FinanceTable;
