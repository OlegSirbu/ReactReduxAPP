import React from 'react';
import * as newsActions from '../../actions/newsActions';
import {connect} from 'react-redux';
import NewsList from './NewsList';

class NewsPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  render(){
    return (
      <div>
        <h1>News page</h1>
        <NewsList news={this.props.news} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    news: state.news
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchNews: (params) => dispatch(newsActions.fetchNews(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewsPage);