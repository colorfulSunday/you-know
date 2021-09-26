#!/usr/bin/env node

const execa=require('execa');
const clear=require('clear');
const fs=require('fs');
const path=require('path');
const move=require(get_path()+'\\move.js');
const conf=require(get_path()+'\\conf.js');
const chalk=require('chalk');
const log=(ctx=>console.log(chalk.white(ctx)));

function get_path(){
	return path.resolve(__dirname);
}

const init=(async ()=>{
	await clear();
	console.log(get_path());
	// build
	log('Frontend building...');
	await execa('npm run build');
	
	//
	log('Creating config...');
	const config=await conf();
	
	// console.log(config);
	fs.writeFileSync(get_path()+'\\..\\..\\web-image-server\\config\\config.js',config);
	
	//
	log('Moving ./dist to backend...');
	await move();
	
	//
	log('Starting serve...');
	await execa('cd ..\\web-image-server\\');
	await execa('npm i');
	await execa('npm start');
});

module.exports=init;