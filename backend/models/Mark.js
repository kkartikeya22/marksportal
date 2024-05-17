// backend/models/Mark.js
const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
    student: { type: String, required: true },
    assignment: { type: String, required: true },
    marks: { type: Number, required: true }
});

module.exports = mongoose.model('Mark', markSchema);
