#!/usr/bin/env node

const program = require('commander');
const { version } = require('../package.json');
program.version(version);
program.option('-e, --env', 'load the environment file');

const argv = require('minimist')(process.argv.slice(2));
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
const path = require('path');
const variableExpansion = require('dotenv-expand');
envPaths.forEach(function (env) {
  variableExpansion(dotenv.config({ path: path.resolve(env) }));
});

const spawn = require('cross-spawn');
spawn(argv._[0], argv._.slice(1), { stdio: 'inherit' }).on(
  'exit',
  function (code) {
    process.exit(code);
  }
);
