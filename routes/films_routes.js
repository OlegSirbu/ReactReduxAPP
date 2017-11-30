const {api_key} = require('../config');
const {doRequest} = require('./common');
let sub_url = 'https://api.themoviedb.org/3';

module.exports = function (app){
  app.get('/films',  (req, res) => {
    const url = `${sub_url}/movie/popular?${api_key}&language=en-US&page=1`;
    const errorText = 'Failed call in get Films';
    doRequest(url, res, errorText);
  });

  app.get('/search-films',  (req, res) => {
    const search = req.query.query;
    const url = `${sub_url}/search/movie?${api_key}&query=${search}&page=1&include_adult=false`;
    const errorText = 'Failed call in search films';
    doRequest(url, res, errorText);
  });

  app.get('/film/:id',  (req, res) => {
    const id = req.params.id;
    const url = `${sub_url}/movie/${id}?${api_key}&language=en-US`;
    const errorText = `Failed call in get data for film with Id: ${id}`;
    doRequest(url, res, errorText);
  });

};
