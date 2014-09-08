var MPill = require('mpill').MPill;
var Config = require('../config');

/**
  *Slides controller
  */
var Slides = function(){
  this.model = new MPill('slides', Config.URL);
};

Slides.prototype.List = function(req, res){
  return this.model.Find();
};

Slides.prototype.Create = function(req, res){
  return this.model.Create();
};

Slides.prototype.Update = function(req, res){
  return this.model.Update();
};

Slides.prototype.Get = function(req, res){
  return this.model.Find();
};

Slides.prototype.Remove = function(req, res){
  return this.model.Update();
};

module.exports.Slides = Slides;
