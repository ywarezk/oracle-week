/**
 * routes definition for the rest task api
 */

var router = require('express').Router();
var Task = require('../models/Task.model');

router.get('/task/', function(req, res){
    Task.find(function(err, data){
        res.send(data);
    });
});

router.post('/task/', function(req, res){
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
        date: new Date(req.body.date)
    });
    task.save(function(err, data){
        res.send(data);
    });
});

module.exports = router;