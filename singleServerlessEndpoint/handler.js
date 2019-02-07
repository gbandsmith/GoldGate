'use strict';
const request = require('request');

module.exports.endpoint = (event, context, callback) => {

request("https://my-json-server.typicode.com/gbandsmith/GoldGate/licenses", function(error, response, data) {
  var response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  };
  callback(null, response);
});

};