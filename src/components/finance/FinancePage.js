import React from 'react';
import {connect} from 'react-redux';
import { fetchFinance } from '../../actions/financeActions';
import FinanceTable from './FinanceTable';
import SelectInput from '../common/SelectInput';

class FinancePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      selectedCity: 0,
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

  handleChangeCity(e, number){
    if(number !== 0)  {
      const cityId = Object.keys(this.props.cities)[number-1];
      const filteredOrg = this.state.organizations.filter((org)=> org.cityId === cityId);
      this.setState({
        organizations: filteredOrg,
        selectedCity: number
      });
    } else {
      this.setState({
        organizations: this.props.organizations,
        selectedCity: number
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
              options={['All'].concat(Object.values(this.props.cities))}
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
