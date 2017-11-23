import React from 'react';
import {connect} from 'react-redux';
import { fetchFinance } from '../../actions/financeActions';
import FinanceTable from './FinanceTable';
import SelectInput from '../common/SelectInput';

class FinancePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      selectedCity: 'all',
      organizations: Object.assign([], this.props.organizations),
      cities: Object.assign({}, this.props.cities)
    };

    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  componentDidMount() {
    this.props.fetchFinance();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.organizations.length !== nextProps.organizations.length) {
      this.setState({
        organizations: nextProps.organizations,
        cities: nextProps.cities
      });
    }
  }

  handleChangeCity(e, number, cityId){
    if(number !== 0)  {
      const filteredOrg = this.props.organizations.filter((org)=> org.cityId === cityId);
      this.setState({
        organizations: filteredOrg,
        selectedCity: cityId
      });
    } else {
      this.setState({
        organizations: this.props.organizations,
        selectedCity: cityId
      });
    }
  }

  render() {
    const {organizations} = this.state;
    return (
      <div className="row">
        <div className='col s12'>
          <SelectInput
              nameSelect='City'
              value={this.state.selectedCity}
              handleChange={this.handleChangeCity}
              options={Object.assign({}, {'all':'All'}, this.props.cities)}
          />
        </div>
        <div className='col s12'>
          <FinanceTable
              organization={organizations}
          />
        </div>
      </div>
    )
  }
}

FinancePage.propTypes = {};

function mapStateToProps(state) {
  return {
    organizations: state.finance.organizations,
    cities: state.finance.cities
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchFinance: (params) => dispatch(fetchFinance(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FinancePage);
