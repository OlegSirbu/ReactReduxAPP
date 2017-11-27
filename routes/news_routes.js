var request = require("request");

module.exports = function (app){
  app.get('/news',  (req, res) => {
    var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=9f55d974fffd4796a278408ae223ab54';
    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body);
      }
    })

  });
};
