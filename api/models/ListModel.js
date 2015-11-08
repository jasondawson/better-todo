var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var List = new Schema({
	name: {
		type: String,
		required: true
	},
	cards: [{
		type: Schema.ObjectId,
		ref: 'Card'
	}]
})

module.exports = Mongoose.model('List', List);