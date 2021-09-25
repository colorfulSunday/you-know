#!/usr/bin/env node

const Execa=require('execa');
const clear=require('clear');
const fs=require('fs');
const path=require('path');
const move=require('./move.js');
const chalk=require('chalk');
const log=(ctx=>console.log(chalk.white(ctx)));

// 仿写
const execa=await (args)=>{
	return new Promise((resolve,reject)=>{
		const child=Execa(args);
		child.stdout.pipe(precess.stdout);
		child.stderr.pipe(precess.stderr);
		pron.on('close',()=>{
			resolve();
		});
		pron.on('error',()=>{
			reject();
		});
	});
}

const init=(async ()=>{
	clear();
	// build
	log('Frontend building...');
	await execa('npm run build');
	
	log('Moving ./dist to backend...');
	await move();
	
	log('Starting serve...');
	await execa();
});

module.exports=init;