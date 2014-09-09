var MPill = require('mpill').MPill;
var Config = require('../config');
var model = new MPill('slides', Config.URL);

/**
  *Slides controller
  */
var Slides = function(){};

Slides.prototype.List = function(req, res){
  res.json(model.Find({}));
};

Slides.prototype.Create = function(req, res){
  return model.Create({});
};

Slides.prototype.Update = function(req, res){
  return model.Update();
};

Slides.prototype.Get = function(req, res){
  return model.Find();
};

Slides.prototype.Remove = function(req, res){
  return model.Update();
};

Slides.prototype.Seed = function(req, res){
  return model.Update();
};

module.exports.Slides = Slides;
