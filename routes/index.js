'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
});
router.get('/history', function(req, res) {
    res.render('index', {
        title: 'History'
    });
});
router.get('/statistic', function(req, res) {
    res.render('index', {
        title: 'Statistic'
    });
});
router.get('/pending', function(req, res) {
    res.render('index', {
        title: 'Pending'
    });
});
router.get('/maintenance', function(req, res) {
    res.render('index', {
        title: 'Maintenance'
    });
});
router.get('/node/:nodeName', function(req, res) {
    res.render('node', {
        title: 'NodeInfo',
        nodeName: req.params.nodeName
    });
});

module.exports = router;