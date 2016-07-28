var snippets = require('mongoose');
var snippetsDb = snippets.model('Snippet');

module.exports = (function() {
  return {
    create: function(req, res){
      console.log('passed server routes');
      var snippet = new snippetsDb({content: req.body.content});
      snippet.save(function(err, snippet){
        if(err){
          console.log('create SNIPPET server error',err);
        }else{
          console.log('this is new SNIPPET', snippet);
          res.json(snippet);
        }
      })
    },
    getAll: function(req, res){
      console.log('passed server routes');
      snippetsDb.find({})
        .populate('_snippets')
        .exec(function(err, data){
          if(err){
            console.log('there is an error in retreiving', err);
          } else{
            console.log('success in retrieval');
            res.json(data);
          }
        })
    }
  }
})();
