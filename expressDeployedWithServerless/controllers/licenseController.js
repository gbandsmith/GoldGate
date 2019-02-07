const request = require('request');
var result; 
exports.getLicense = function(req, res, next) {
    request('https://my-json-server.typicode.com/gbandsmith/GoldGate/licenses', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        this.result = body;
        res.send(body);
    });
}