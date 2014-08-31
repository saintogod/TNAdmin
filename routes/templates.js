var express = require('express');
var router = express.Router();

router.get('/nodetask', function(req, res) {
    res.render('templates/nodetask', {});
});

router.get('/nodescript', function(req, res) {
    res.render('templates/nodescript', {});
});

router.get('/node', function(req, res) {
    res.render('templates/node', {});
});
module.exports = router;