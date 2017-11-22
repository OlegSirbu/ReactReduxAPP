import React from 'react';
import {connect} from 'react-redux';
import { fetchFinance } from '../../actions/financeActions';
import FinanceTable from './FinanceTable';

class FinancePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      selected: []
    };

    this.isSelected = this.isSelected.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  componentDidMount() {
    this.props.fetchFinance();
  }

  handleRowSelection(selectedRows) {
    this.setState({
      selected: selectedRows
    });
  }

  isSelected(index) {
    return this.state.selected.indexOf(index) !== -1;
  }

  render() {
    const {finance} = this.props;
    if(finance.organizations){
      return (
        <div>
          <FinanceTable
              organization={finance.organizations}
              isSelectedHandler={this.isSelected}
              handleRowSelection={this.handleRowSelection}
          />
        </div>
      )
    } else {
      return (<div>Finance page</div>)
    }
  }
}

FinancePage.propTypes = {};

function mapStateToProps(state) {
  return {
    finance: state.finance
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchFinance: (params) => dispatch(fetchFinance(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FinancePage);
