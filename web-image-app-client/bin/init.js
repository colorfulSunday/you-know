#!/usr/bin/env node

const Execa=require('execa');
const clear=require('clear');
const fs=require('fs');
const path=require('path');
const move=require('./move.js');
const conf=require('./conf.js');
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
	
	//
	log('Creating config...');
	const config=await conf();
	fs.writeFileSync('../../web-image-server/config/config.js',config);
	
	//
	log('Moving ./dist to backend...');
	await move();
	
	//
	log('Starting serve...');
	await execa('cd ../web-image-server/');
	await execa('npm i');
	await execa('npm start');
});

module.exports=init;