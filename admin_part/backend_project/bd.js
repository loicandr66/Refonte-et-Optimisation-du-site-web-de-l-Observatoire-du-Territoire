const {Pool} = require('pg');
const bdconf = require('./bd_config/bd_config');

const bd = new Pool(bdconf);
module.exports = bd;