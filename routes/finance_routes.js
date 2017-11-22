var request = require("request");

module.exports = function (app){
  app.get('/finance',  (req, res) => {
    var url = 'http://resources.finance.ua/ru/public/currency-cash.json';
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
