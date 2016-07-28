
var mongoose = require('mongoose');
var users = require('./../controllers/users');
var stories = require('./../controllers/stories.js');
var sessions = require('./../controllers/sessions');
var snippets = require('./../controllers/snippets.js');


module.exports = function(app){
	app.post('/users', users.create);
	app.post('/sessions', sessions.create);
	app.post('/stories', stories.create);
	app.get('/stories', stories.getStories);
	app.post('/snippets', snippets.create);
	app.get('/story/:id', stories.getStory);
	app.get('/snippet', snippets.getAll)
	// app.get('/story/:id', snippets.getAll);
}
