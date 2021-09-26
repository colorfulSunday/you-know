#!/usr/bin/env node

const prog=require('commander');
const init=require('./init.js');
prog.version(require('../package.json').version);

prog.command('init')
	.description('build起服务一条龙')
	.action(init);

prog.parse(process.argv);