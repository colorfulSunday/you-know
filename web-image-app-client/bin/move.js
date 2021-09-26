#!/usr/bin/env node

const fs=require('fs-extra');

const move=(async()=>{
	const src='../dist'
	const target='../../web-image-server'
	fs.copySync(src,target,(err=>{
		if(err)
			console.log(err);
		console.log(src+'success');
	});
});

module.exports=move;