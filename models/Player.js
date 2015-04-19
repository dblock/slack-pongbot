var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  user_id: { type: String, index: { unique: true }, required: false },
	user_name: { type: String, index: { unique: true }, required: true },
	wins: Number,
	losses: Number,
	elo: Number,
	tau: Number,
	currentChallenge: { type: Schema.Types.ObjectId, ref: 'Challenge' }
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
