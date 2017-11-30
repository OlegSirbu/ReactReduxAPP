import React from 'react';
import {connect} from 'react-redux';
import { fetchFilmById } from '../../actions/filmsActions';
import Button from '../common/Button';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PlFilmsImg from '../../Images/pl-films.jpeg';
const patchToImg = `https://image.tmdb.org/t/p/original`;

class FilmsDetailPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchFilmById(this.props.id);
  }

  render() {
    const {film: {id, overview, original_title, backdrop_path, status, release_date, budget, genres, production_companies: prod_com, err}} = this.props;
    return (
      <div>
        {(id) ?
            <Card>
              <CardMedia
                  overlay={<CardTitle title={`Status: ${status}`} subtitle={`Release: ${release_date}`} />}
              >
                {backdrop_path
                  ? <img src={patchToImg+backdrop_path} width="" />
                  : <img src={PlFilmsImg} />
                }
              </CardMedia>

              <div className='row'>
                <h2 className='col s12'>{original_title}</h2>
              </div>

              <CardText>
                <div className="row" >
                  <h4 className='col s12'>Description</h4>
                  <div className='col s12'>{overview}</div>
                  <div className='col s12'>Budget: ${budget}</div>
                  <div className='col s12'>
                    Genres:
                    {genres.map((genre, index) => <Button key={index+genre.name} label={genre.name} ></Button>)}
                  </div>
                  <div className='col s12'>
                    Production companies:
                    {prod_com.map((com, index) => <Button key={index+com.name} label={com.name} ></Button>)}
                  </div>
                </div>
              </CardText>
            </Card>
            : <h2>{err}</h2>
        }
      </div>
    )
  }
}

FilmsDetailPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    film: state.film,
    id: ownProps.params.id
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchFilmById: (params) => dispatch(fetchFilmById(params))
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmsDetailPage);
