var models = require("../models");

module.exports = {
  cows: {
    get: function(req, res) {
      models.cows.get(function(err, results) {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    },
    post: function(req, res) {
      var params = [req.body.cowname, req.body.description];
      models.cows.post(params, function(err, results) {
        if (err) {
          throw err;
        } else {
          res.send(req.body);
        }
      });
    },
    //UPDATE
    put: function(req, res) {
      var params = [req.body.description, req.body.cowname];
      models.cows.put(params, function(err, results) {
        if (err) {
          throw err;
        } else {
          res.send(req.body);
        }
      });
    },
    delete: function(req, res) {
      var params = [req.body.cowname];
      models.cows.delete(params, function(err, results) {
        if (err) {
          throw err;
        } else {
          res.send(req.body);
        }
      });
    }
  }
};
