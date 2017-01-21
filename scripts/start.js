/* eslint-disable no-var, vars-on-top, no-console, prefer-template */
process.env.NODE_ENV = 'development';

// load env variables
require('dotenv').config({ silent: true });

var catchErr = require('./logger').catchErr;
var runDevServer = require('./startDevServer.js');

runDevServer()
  .catch(catchErr);
