var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SnippetSchema = new mongoose.Schema({

    _users: [{type: Schema.Types.ObjectId, ref:'User'}],
    _stories: [{type: Schema.Types.ObjectId, ref:'Story'}],
    content: String
}, {timestamps: true});

mongoose.model('Snippet', SnippetSchema);
// Validations
// SnippetSchema.path('content').required(true, 'Content cannot be blank');
