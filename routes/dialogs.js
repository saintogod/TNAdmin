var express = require('express');
var router = express.Router();

router.get('/addnode', function(req, res) {
    res.render('dialogs/addnode', {});
});

router.get('/addtask', function(req, res) {
    res.render('dialogs/addtask', {});
});

router.get('/setting', function(req, res) {
    res.render('dialogs/setting', {});
});
module.exports = router;