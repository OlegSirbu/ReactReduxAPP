const {doRequest} = require('./common');

module.exports = function (app){
  app.get('/finance',  (req, res) => {
    var url = 'http://resources.finance.ua/ru/public/currency-cash.json';
    doRequest(url, res);
  });
};
