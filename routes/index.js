
/*
 * GET home page.
 */
var feed = require('feed');

exports.index = function(req, res){
// Retrieve feed for current site, located in the root of the "public" directory  
  feed.retrieve(req.headers.host, function(feedArray) {
    res.render('index', {
      title: 'Bitters',
      feedItems: feedArray
    });
  });
};


exports.about = function(req, res){
	res.render('index', { title: 'About Bitters'});
};
