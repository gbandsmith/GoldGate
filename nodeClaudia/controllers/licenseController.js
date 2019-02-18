const request = require('request');
var result; 
exports.getLicense = function(req, res, next) {
    request('http://my-json-server:3000/', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        this.result = body;
        res.send(body);
    });
}