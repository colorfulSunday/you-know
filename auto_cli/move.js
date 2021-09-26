#!/usr/bin/env node

const fs=require('fs-extra');
const path=require('path');

async function move(){
	const source=path.resolve(__dirname,'..')+'\\web-image-app-client\\dist';
	const target=path.resolve(__dirname,'..')+'\\web-image-app-server\\dist';
	
	await fs.copy(source,target)
	.then(()=>console.log('success'))
	.catch(err=>console.log(err));
}

module.exports=move;