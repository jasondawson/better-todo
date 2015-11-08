var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Card = new Schema({
	title: {
		type: String,
		required: true
	}
	// could add other attributes to card (e.g. due date, checklist, comments)
})

module.exports = Mongoose.model('List', List);