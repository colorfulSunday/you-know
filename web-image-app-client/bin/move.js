#!/usr/bin/env node

const fs=require('fs-extra');
const path=require('path');

async function move(){
	const source=path.resolve(__dirname,'..');+'\\dist';
	
	const target=path.resolve(__dirname,'../..')+'\\web-image-app-server';
	
	fs.copySync(source,target,function(err){
		if(err){
			fs.emptyDir(target+'\\dist',err=>{});
			fs.copySync(source,target,err=>{});
		}
		console.log('success');
	});
}

module.exports=move;