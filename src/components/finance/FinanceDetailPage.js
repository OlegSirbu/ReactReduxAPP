import React from 'react';
import {connect} from 'react-redux';
import { fetchFinance } from '../../actions/financeActions';

class FinanceDetailPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      bank: Object.assign({}, this.props.finance.bank)
    };
  }

  componentDidMount() {
    if(!this.props.finance.organizations.length) this.props.fetchFinance();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.finance.organizations.length !== nextProps.finance.organizations.length) {
      this.setState({bank:
        Object.assign({},
          nextProps.finance.bank,
          {city: nextProps.finance.cities[nextProps.finance.bank.cityId]}
        )
      });
    }
  }
  
  render() {
    const {bank: {title, city, address, phone, currencies}} = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <div className="tableDetail row">
          <div><span>City - </span>{city}</div>
          <div><span>Address - </span>{address}</div>
          <div><span>Phone - </span>{phone}</div>
          <div><span>USD - </span>sale {currencies['EUR'].ask}  purchase {currencies['EUR'].bid}</div>
          <div><span>EUR - </span>sale {currencies['EUR'].ask}  purchase {currencies['EUR'].bid}</div>
        </div>
      </div>
    )
  }
}

function getBankById(finance, id){
  const {organizations: banks, cities} = finance;
  const banksFiltered = banks.filter(bank => bank.id === id);
  banksFiltered[0].city = cities[banksFiltered[0].cityId];
  if(banksFiltered) return banksFiltered[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let {finance: {organizations: orgs}} = state;
  let bankId = ownProps.params.id;
  let res = { finance: state.finance };
  if(bankId && orgs.length > 0) {
    res = { finance: {...state.finance, bank: getBankById(state.finance, bankId)}};
  }
  return res;
}

const mapDispatchToProps = (dispatch) => ({
  fetchFinance: (params) => dispatch(fetchFinance(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FinanceDetailPage);
