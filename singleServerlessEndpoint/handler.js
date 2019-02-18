'use strict';
const request = require('request');

module.exports.endpoint = (event, context, callback) => {

request("http://my-json-server:3000/", function(error, response, data) {
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