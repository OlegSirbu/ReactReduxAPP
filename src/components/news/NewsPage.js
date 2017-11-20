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
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  handleSelect(title) {
    const newsItem = this.props.news.filter((item)=>item.title === title);
    if(newsItem) return this.context.router.push(`/news/${newsItem[0].url.split("/").pop(-1)}`);
    return null;
  }

  render(){
    return (
      <div>
        <SearchInput
          dataSource={this.props.news.map((item) => item.title)}
          onSelect={this.handleSelect}
        />
        <h1>News page from BBC Sport</h1>
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
