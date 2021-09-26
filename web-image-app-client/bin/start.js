#!/usr/bin/env node

const execa=require('execa');
const clear=require('clear');
const fs=require('fs');
const path=require('path');
const move=require(get_path()+'\\move.js');
const conf=require(get_path()+'\\conf.js');
const log=(ctx=>console.log(ctx));

function get_path(){
	// console.log(get_path());
	return path.resolve(__dirname);
}

const start=(async ()=>{
	await clear();
	
	// build
	log('Frontend building...');
	await execa('npm run build --prefix '+path.resolve(__dirname,'..')
	,{stdio:[2,2,2]})
	.catch(err=>return console.error(err));
	
	//
	log('Creating config...');
	const config=await conf();
	// console.log(config);
	fs.writeFileSync(path.resolve(__dirname,'../..')+'\\web-image-app-server\\config\\config.js',config,'utf-8')
	.then(()=>log('success'));
	//
	log('Moving ./dist to backend...');
	await move();
	
	//
	log('Starting serve...');
	await execa('npm start --prefix '+path.resolve(__dirname,'../..')+'\\web-image-app-server'
	,{stdio:[2,2,2]})
	.catch(err=>return console.error(err));
});

module.exports=start;