const request = require('request');
exports.getLicense = function(req, res, next) {
    request('http://my-json-server:3000/', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        res.send(body);
    });
}