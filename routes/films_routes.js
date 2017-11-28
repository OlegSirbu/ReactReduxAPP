var request = require("request");

function cb(error, response, body, res) {
  if (!error && response.statusCode === 200) {
    res.send(body);
  }
}

function doRequest(url, res) {
  return request({
    url: url,
    json: true
  }, function (error, response, body) {
    cb(error, response, body, res)
  });
}

module.exports = function (app){
  app.get('/films',  (req, res) => {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=40743477a16321a131807d650462c5bf&language=en-US&page=1';
    doRequest(url, res);
  });

  app.get('/search-films',  (req, res) => {
    const search = req.query.query;
    var url = `https://api.themoviedb.org/3/search/movie?api_key=40743477a16321a131807d650462c5bf&query=${search}&page=1&include_adult=false`;
    doRequest(url, res);
  });


  app.get('/film/:id',  (req, res) => {
    const id = req.params.id;
    var url = `https://api.themoviedb.org/3/movie/${id}?api_key=40743477a16321a131807d650462c5bf&language=en-US`;
    doRequest(url, res);
  });

};
