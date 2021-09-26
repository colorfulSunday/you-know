#!/usr/bin/env node

const fs=require('fs-extra');
const path=require('path');

async function move(){
	const source=path.resolve(__dirname,'..')+'\\dist';
	const target=path.resolve(__dirname,'../..')+'\\web-image-app-server\\dist';
	
	console.log(source);
	console.log(target);
	
	await fs.copy(source,target)
	.then(()=>console.log('success'))
	.catch(err=>console.log(err));
}

move();

module.exports=move;