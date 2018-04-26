var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	text: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	// Relations
	taskId: { type: ObjectId, required: true, ref: models.task.name },
	// additional Object ID needed for schema.pre('remove') cascading delete:
	boardId: { type: ObjectId, required: true, ref: models.board.name },
	listId: { type: ObjectId, required: true, ref: models.list.name }
}); 

module.exports = mongoose.model(models.comment.name, schema);