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

const Row = (org, index, {isSelectedHandler}) => {
  return(
    <TableRow key={org.id} selected={isSelectedHandler(index)}>
      <TableRowColumn><Link to={'/bank/'+org.id}>{org.title}</Link></TableRowColumn>
      <TableRowColumn>
        {org.currencies['USD'].ask}
      </TableRowColumn>
      <TableRowColumn>{org.address}</TableRowColumn>
      <TableRowColumn>{org.phone}</TableRowColumn>
    </TableRow>
  )
};

const FinanceTable = ({ organization, handleRowSelection, ...props }) => {
  return (
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
          <TableHeaderColumn>Currency USD</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        deselectOnClickaway={false}
      >
        {organization.map((org, index) => org.currencies['USD'] && Row(org, index, props))}
      </TableBody>
    </Table>
  );
};

FinanceTable.propTypes =  {
  courses: PropTypes.array
};

export default FinanceTable;
