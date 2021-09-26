#!/usr/bin/env node

const fs=require('fs-extra');
const path=require('path');

function get_path(){
	return path.resolve(__dirname);
}

const move=(async()=>{
	const src=get_path()+'\\..\\dist'
	const target=get_path()+'\\..\\..\\web-image-server'
	fs.copySync(src,target,(err=>{
		if(err)
			console.log(err);
		console.log('success');
	}));
});

module.exports=move;