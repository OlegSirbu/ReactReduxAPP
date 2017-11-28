import React from 'react';
import {connect} from 'react-redux';
import { fetchFilms, searchFilms } from '../../actions/filmsActions';
import FilmItemPage from './FilmItemPage';
import SearchInput from '../common/SearchInput';

class FilmsPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      searchText: ''
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText
    });
    this.props.searchFilms({search: searchText});
  }

  handleNewRequest(targetValue) {
    this.props.onSelect(targetValue);
    this.setState({
      searchText: ''
    });
  }


  render() {
    const {films} = this.props;
    return (
      <div className="row">
        <div className='col s12'>
          <SearchInput
              searchText={this.state.searchText}
              handleUpdateInput={this.handleUpdateInput}
              handleNewRequest={this.handleNewRequest}
          />
        </div>

        <div className='col s12'>
          <FilmItemPage films={films}/>
        </div>
      </div>
    )
  }
}

FilmsPage.propTypes = {};

function mapStateToProps(state) {
  return {
    films: state.films
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: (params) => dispatch(fetchFilms(params)),
  searchFilms: (params) => dispatch(searchFilms(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmsPage);
