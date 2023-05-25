'use strict';

module.exports = (error, request, response, next) => {
  let err = { error: error.message || error };
  response.statusCode = err.status || 500;
  response.statusMessage = err.statusMessage || 'Server Error';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(error));
  response.end();
};
