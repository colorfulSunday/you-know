#!/usr/bin/env node

const inquirer=require('inquirer');
const ejs=require('ejs');

const conf=(async()=>{
	const config=await inquirer.propmt([
		{
			type:'input',
			message:'dialect: ',
			name:'dialect',
			default:'mysql'
		},
		{
			type:'input',
			message:'host: ',
			name:'host',
			default:'118.31.62.229'
		},
		{
			type:'number',
			message:'port: ',
			name:'port',
			default:3306
		},
		{
			type:'input',
			message:'database: ',
			name:'database',
			default:'test'
		},
		{
			type:'input',
			message:'username: ',
			name:'username',
			default:'root'
		},
		{
			type:'input',
			message:'password: ',
			name:'password',
			default:'Sanlink_123'
		},
	]);
	
	const code=ejs.render(temp,{
		dialect: config.dialect,
		host: config.host,
		port: config.port,
		database: config.database,
		username: config.username,
		password: config.password,
	});
	
	return code;
});

module.exports=conf;