import React from 'react';
import {connect} from 'react-redux';
import { fetchFilms } from '../../actions/filmsActions';
import FilmItemPage from './FilmItemPage';

class FilmsPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {
    const {films} = this.props;
    debugger;
    return (
      <div className="row">
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
  fetchFilms: (params) => dispatch(fetchFilms(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmsPage);
