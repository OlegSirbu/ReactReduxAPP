const request = require("request");

const cb = (error, resp, body, res, errText) => {
  if (!error && resp.statusCode === 200) return res.send(body);
  if(error || resp.statusCode !== 200) return res.status(resp.statusCode).send({error: errText});
};

module.exports = {
  doRequest: (url, res, errText) => {
    return request({
      url: url,
      json: true
    }, (err, resp, body) => {
      cb(err, resp, body, res, errText);
    });
  }
};
