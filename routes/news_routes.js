const {doRequest} = require('./common');
const {news_api_key} = require('../config');

module.exports = function (app){
  app.get('/news',  (req, res) => {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${news_api_key}`;
    doRequest(url, res);
  });
};
