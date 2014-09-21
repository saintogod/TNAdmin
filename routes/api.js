'use strict';
var express = require('express');
var extend = require('node.extend');
var q = require('q');

var router = express.Router();

router.get('/nodelist', function(req, res) {
    var db = req.db;
    var collection = db.get('nodes');
    var taskCol = db.get('tasks');
    var nodes = [];
    collection.find({}, function(e, docs) {
        q.all(docs.map(function(item){
            var node = {
                NodeName: item.NodeName,
                Status: item.Status
            };
            if(item.CurTask){
                return taskCol.findOne({_id: item.CurTask.oid}, function(err, task){
                    node = extend(true, task, node);
                    nodes.push(node);
                });
            }
            nodes.push(node);
            return true;
        })).then(function(){
            res.json(nodes);
        }, function(err){
            console.log(err);
        });
    });
}).get('/task/:nodename', function(req, res) {
    var db = req.db;
    var collection = db.get('tasks');
    collection.find({
        nodename: req.params.nodename
    }, {}, function(e, docs) {
        res.json(docs);
    });
}).get('/tasks', function(req, res) {
    var db = req.db;
    var collection = db.get('tasks');
    collection.find({}, {}, function(e, data) {
        res.json(data);
    });
}).get('/pending', function(req, res){
    var db = req.db;
    var collection = db.get('tasks');
    collection.find({Stage:'Pending'}, function(e, data){
        res.json(data);
    });
});

module.exports = router;