// const mongoose = require("mongoose");
// const path = require("path");
// const express = require("express");
const router = require('express').Router();
const db = require("../../models");

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(data => res.json(data))
})

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
        .then(data => res.json(data))
})

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
        .then(newEntry => res.json(newEntry))
})

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate({
        _id: req.params.id
    }, {
        $push: { exercises: req.body }
    }).then(update => res.json(update))
})
module.exports = router