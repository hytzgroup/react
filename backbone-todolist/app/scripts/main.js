require.config({
	baseUrl:'../',
	paths:{
		jquery:'app/scripts/utils/jquery',
		underscore:'app/scripts/utils/underscore',
		InterfaceUtil:'app/scripts/utils/interfaceutil',
		Backbone:'app/scripts/utils/backbone',
		todoapp:'app/scripts/todoapp',
		localStorage:'app/scripts/utils/localStorage'
	},
	shim:{
		Backbone:{
			exports:'Backbone',
			deps:['underscore']
		},
		underscore:{
			exports:'-'
		},
		localStorage:{
			exports:'Store',
			deps:['Backbone']
		},
		InterfaceUtil:{
			exports:'Interface'
		},
		todoapp:['localStorage']
	},
	map:{}
});

define([
	'module',
	'exports',
	'jquery',
	'underscore',
	'InterfaceUtil',
	'todoapp'
],function(module, exports, $, underscore, InterfaceUtil, todoapp){
	var todoapp = new todoapp();
});