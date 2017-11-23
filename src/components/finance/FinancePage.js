import React from 'react';
import {connect} from 'react-redux';
import { fetchFinance } from '../../actions/financeActions';
import FinanceTable from './FinanceTable';

class FinancePage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchFinance();
  }

  render() {
    const {finance} = this.props;

    if(finance.organizations){
      return (
        <div>
          <FinanceTable
              organization={finance.organizations}
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
