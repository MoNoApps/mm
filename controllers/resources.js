var MPill = require('mpill').MPill;
var Config = require('../config');
var model = new MPill('resources', Config.URL);

/**
  *Resources controller
  */
var Resources = function(){};

Resources.prototype.List = function(req, res){
  model.Find({}, function(err, results){
    res.json(results);
  });
};

Resources.prototype.Create = function(req, res){
  return model.Create({});
};

Resources.prototype.Update = function(req, res){
  return model.Update();
};

Resources.prototype.Get = function(req, res){
  return model.Find();
};

Resources.prototype.Remove = function(req, res){
  return model.Update();
};

Resources.prototype.Seed = function(req, res){
  model.Count({}, function(err, count){
    if(count){
      return res.json({message:'Already with seed. Prevent override.'});
    }else{
      resources_seed = require('../seed/resources');
      for (var idx in resources_seed){
        model.Insert(resources_seed[idx]);
      }
      res.json({message:'End Resources Seed'});
    }
  });
};

module.exports.Resources = Resources;
