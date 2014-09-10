var MPill = require('mpill').MPill;
var Config = require('../config');
var model = new MPill('slides', Config.URL);

/**
  *Slides controller
  */
var Slides = function(){};

Slides.prototype.List = function(req, res){
  model.Find({}, function(err, results){
    res.json(results);
  });
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
  model.Count({}, function(err, count){
    if(count){
      return res.json({message:'Already with seed. Prevent override.'});
    }else{
      slides_seed =  require('../seed/slides');
      for (var idx in slides_seed){
        model.Insert(slides_seed[idx]);
      }
      res.json({message:'End Slides Seed'});
    }
  });
};

Slides.prototype.GetOne = function(req, res){
  if(!req.params.order){
    return res.send(400);
  }

  model.Find({order: parseInt(req.params.order)}, function(err, results){
    res.json(results);
  });
};

module.exports.Slides = Slides;
