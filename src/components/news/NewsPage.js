import React from 'react';
import PropTypes from 'prop-types';
import * as newsActions from '../../actions/newsActions';
import {connect} from 'react-redux';
import NewsList from './NewsList';
import SearchInput from '../common/SearchInput';
import SelectInput from '../common/SelectInput';

class NewsPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      country : ''
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.prepareDataForSearch = this.prepareDataForSearch.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchNews(this.state);
  }

  handleSelect(name) {
    const newsItem = this.props.news.filter((item)=>item.name === name);
    if(newsItem) return this.context.router.push(`/news/${newsItem[0].id}`);
    return null;
  }

  prepareDataForSearch(data) {
    return data.map((item) => item.name);
  }

  handleChangeSelect(newState) {
    this.setState(newState);
    this.props.fetchNews(newState);
  }

  render(){
    return (
      <div>
        <SelectInput
          nameSelect="Countries"
          value={this.state.country}
          options={this.props.Countries}
          handleChange={(e, ind, v)=>{this.handleChangeSelect({country: v})}}
        />

        <SearchInput
          dataSource={this.prepareDataForSearch(this.props.news)}
          onSelect={this.handleSelect}
        />
        <h1>News page from ${}</h1>
        <NewsList news={this.props.news} />
      </div>
    );
  }
}

NewsPage.contextTypes = {
  router: PropTypes.object
};

const dataCountries = [
  {
    value: '',
    name : 'Countries'
  },
  {
    value: 'ar',
    name : 'Argentina'
  },
  {
    value: 'de',
    name : 'Germany'
  },
  {
    value: 'ru',
    name : 'Russia'
  }
];


function mapStateToProps(state) {
  return {
    news: state.news,
    Countries : dataCountries
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (params) => dispatch(newsActions.fetchNews(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsPage);
