import React from 'react';
import {connect} from 'react-redux';
import { fetchFilms } from '../../actions/filmsActions';
import {GridList, GridTile} from 'material-ui/GridList';

const FilmRow = ({film : {title, release_date, overview, backdrop_path, vote_average}}) => {

  debugger;
  return(
    <GridTile
      key={backdrop_path}
      title={title}
      subtitle={<span>by <b>{overview}</b></span>}
    >
     <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
    </GridTile>
  )
}

const FilmItemPage = ({ films }) => {
  return (
    <GridList
      cellHeight={280}
    >
    {films.map((film) => {
      return <FilmRow film={film} key={film.id} />
    })}
  </GridList>
  )
};

export default FilmItemPage;
