var request = require("request");

module.exports = function (app){
  app.get('/films',  (req, res) => {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=40743477a16321a131807d650462c5bf&language=en-US&page=1';
    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body);
      }
    });
  });

  app.get('/search-films',  (req, res) => {
    const search = req.query.query;
    var url = `https://api.themoviedb.org/3/search/movie?api_key=40743477a16321a131807d650462c5bf&query=${search}&page=1&include_adult=false`;
    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body);
      }
    });
  });
};
