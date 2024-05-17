// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const markRouter = require('./routes/marks');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://kartikeyakatiyarkk29:k123k@K123K@cluster0.eo3py99.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use(bodyParser.json());

app.use('/marks', markRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
