import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router';
import PlFilmsImg from '../../Images/pl-films.jpeg';
const patchToImg = `https://image.tmdb.org/t/p/w780`;

const FilmRow = ({film : { id, title, overview, backdrop_path : imgPath } }) => {
  return(
    <GridTile
      key={imgPath}
      title={title}
      subtitle={<span>by <b>{overview}</b></span>}
    >
      {imgPath
          ? <Link to={`/film/${id}`} >
              <img src={patchToImg+imgPath} />
            </Link>
          : <img src={PlFilmsImg} />
      }
    </GridTile>
  )
};

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
