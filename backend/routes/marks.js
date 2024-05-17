// backend/routes/marks.js
const express = require('express');
const router = express.Router();
const Mark = require('../models/Mark');

// Route to add mark
router.post('/add', async (req, res) => {
    try {
        const { student, assignment, marks } = req.body;
        const newMark = new Mark({ student, assignment, marks });
        await newMark.save();
        res.status(201).json(newMark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all marks
router.get('/', async (req, res) => {
    try {
        const marks = await Mark.find();
        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
