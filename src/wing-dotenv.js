#!/usr/bin/env node
const program = require('commander');
const path = require('path');

const { version } = require('../package.json');
let argv = require('minimist')(process.argv.slice(2));

program.version(version);

program.option('-e, --env', 'load the environment file');
let envPaths = [];
if (argv.e) {
  if (typeof argv.e === 'string') {
    envPaths.push(argv.e);
  } else {
    envPaths.push(...argv.e);
  }
} else {
  envPaths.push('.env');
}

const dotenv = require('dotenv');
const variableExpansion = require('dotenv-expand');

envPaths.forEach(function (env) {
  variableExpansion(dotenv.config({ path: path.resolve(env) }));
});

program.parse(process.argv);
