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
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  handleUpdateInput(searchText) {
    this.setState({searchText: searchText});
    if(searchText !== '') this.props.searchFilms({search: searchText});
    if(searchText === '') this.props.fetchFilms();
  }

  render() {
    const {films, loading} = this.props;
    return (
      <div className="row">
        <div className='col s12'>
          <SearchInput
              searchText={this.state.searchText}
              handleUpdateInput={this.handleUpdateInput}
          />
        </div>
        <div className='col s12'>
        {(films.err)
            ? <h2>{films.err}</h2>
            : (films.length > 0 || loading)
              ? <div>
                  <h2>The most popular films</h2>
                  <FilmItemPage films={films}/>
                </div>
              : <h2>Can`t find films</h2>
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.films,
    loading : state.ajaxStatusReducer > 0
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: (params) => dispatch(fetchFilms(params)),
  searchFilms: (params) => dispatch(searchFilms(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmsPage);
