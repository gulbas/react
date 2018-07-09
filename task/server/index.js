// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../config/db');

const Comment = require('./models/comment');

mongoose.connect(db.url);

const app = express();
app.use(cors());

app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

app.get('/comments/:id', async (req, res) => {
    const id = req.params.id;
    const comment = await Comment.findById(id);

    res.json(comment);
});

app.listen(3000);

