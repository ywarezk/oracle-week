/**
 * mongoose model for our tasks collection
 */

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date
});

mongoose.model('Task', TaskSchema);

module.exports = mongoose.model('Task');
