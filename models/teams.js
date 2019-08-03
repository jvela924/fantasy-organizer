const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {type: String, required: true },
  logo: {type: String, required: false },
  sport: {type: String, required: true},
  platform: {type: String, required: false},
  place: {type: Number, min: 1},
  players: [{name: String, team: String, position: String}]
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
