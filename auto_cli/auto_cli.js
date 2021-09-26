#!/usr/bin/env node

const prog=require('commander');
const start=require('./start.js');
const stop=require('./stop.js');
prog.version(require('../package.json').version);

prog.command('start')
	.description('build起服务一条龙')
	.action(start);

prog.command('stop')
	.description('停掉后端')
	.action(stop);

prog.parse(process.argv);