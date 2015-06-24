"use strict";

var $ = $ || require('jquery'),
    _ = _ || require('lodash');

function api(){
	this.server = 'http://localhost';
	
	this.settings = {
		xhrFields: {
	      	withCredentials: true
	   }
	};
}

api.prototype.config = function(args){
	this.settings = $.extend(this.settings, args);
};
api.prototype.get = function(path, data, callback){
	var url = this.server + '/' + path;
	
	var settings = _.clone(this.settings);
	settings.method = 'GET';
	settings.data = data || {};

	return $.ajax(url, settings);
};
api.prototype.post = function(path, data, callback){
	var url = this.server + '/' + path;
	
	var settings = _.clone(this.settings);
	settings.method = 'POST';
	settings.data = data || {};

	return $.ajax(url, settings);
};
api.prototype.put = function(path, data, callback){
	var url = this.server + '/' + path;
	
	var settings = _.clone(this.settings);
	settings.method = 'PUT';
	settings.data = data || {};

	return $.ajax(url, settings);
};
api.prototype.delete = function(path, data, callback){
	var url = this.server + '/' + path;
	
	var settings = _.clone(this.settings);
	settings.method = 'DELETE';
	settings.data = data || {};

	return $.ajax(url, settings);
};

module.exports = new api();
