const db = use('MongoDB');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new Schema({
    title: String
});
const Task = db.model('Task', taskSchema);
module.exports = Task;