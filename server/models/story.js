var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new mongoose.Schema({
    title: String,
    genre: String,
    _snippets: [{type:Schema.Types.ObjectId, ref:'Snippetdb'}]
}, {timestamps: true});

mongoose.model('Story', StorySchema);
// Validations
// StorySchema.path('title').required(true, 'Title cannot be blank');
// StorySchema.path('genre').required(true, 'Genre cannot be blank');
