import React from 'react';
import PropTypes from 'prop-types';
import * as newsActions from '../../actions/newsActions';
import {connect} from 'react-redux';
import NewsList from './NewsList';
import SearchInput from '../common/SearchInput';

class NewsPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.prepareDataForSearch = this.prepareDataForSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  handleSelect(name) {
    const newsItem = this.props.news.filter((item)=>item.name === name);
    if(newsItem){
      return this.context.router.push(`/news/${newsItem[0].id}`);
    }
    return null;
  }

  prepareDataForSearch(data) {
    return data.map((item) => item.name);
  }

  render(){
    return (
      <div>
        <SearchInput
          dataSource={this.prepareDataForSearch(this.props.news)}
          onSelect={this.handleSelect}
        />
        <h1>News page</h1>
        <NewsList news={this.props.news} />
      </div>
    );
  }
}

NewsPage.contextTypes = {
  router: PropTypes.object
};
function mapStateToProps(state) {
  return {
    news: state.news
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (params) => dispatch(newsActions.fetchNews(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsPage);
