#!/usr/bin/env node

const execa=require('execa');
const path=require('path');

const stop=(async ()=>{
	await execa('npm stop --prefix '+path.resolve(__dirname,'..')+'\\web-image-app-server'
	,{stdio:[2,2,2]})
	.catch(err=>console.log(err));
});

module.exports=stop;