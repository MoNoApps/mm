/**
  *Common Pages Route
  */
var Pages = function(){};

Pages.prototype.Dash = function(req, res){
  res.render('index');
};

module.exports.Pages = Pages;
