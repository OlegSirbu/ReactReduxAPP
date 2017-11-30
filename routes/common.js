const request = require("request");

const cb = (error, resp, body, res) => {
  if (!error && resp.statusCode === 200) res.send(body);
};

module.exports = {
  doRequest: (url, res) => {
    return request({
      url: url,
      json: true
    }, (error, response, body) => {
      cb(error, response, body, res)
    });
  }
};
