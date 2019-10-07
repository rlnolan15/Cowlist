var db = require("../db");

module.exports = {
  cows: {
    get: function(callback) {
      var queryStr = "select * from cows";
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      var queryStr = "insert into cows(cowname, description) value (?, ?)";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    put: function(params, callback) {
      var queryStr = `update cows set description = ? where cowname = ?`;
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    delete: function(params, callback) {
      var queryStr = `delete from cows where cowname = ?`;
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

//when you insert a func as an arg within an
