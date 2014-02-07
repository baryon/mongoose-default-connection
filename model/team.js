var mongoose = require( 'mongoose' ), db = require('./db');

var teamSchema = new mongoose.Schema({
  Country: String,
  GroupName: String,
  CreatedOn: Date
});

var Team = module.exports = db.model('Team', teamSchema);
