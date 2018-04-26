var models = require('../config/constants').models
let mongoose = require('mongoose')
var Tasks = require('./task')
var Comments = require('./comment')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	// Relations
	boardId: { type: ObjectId, required: true, ref: models.board.name } // boardId: { type: ObjectId, ref: models.board, required: true }
});

schema.pre('remove', function (next) {
	console.log('schema.pre in list')
	Tasks.remove({ listId: this._id }).exec()
	Comments.remove({ listId: this._id }).exec()
	next()
});

module.exports = mongoose.model(models.list.name, schema);