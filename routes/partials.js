var express = require('express');
var router = express.Router();

router.get('/nodelist', function(req, res) {
    res.render('partials/nodelist', {});
});
router.get('/nodeselector', function(req, res) {
    res.render('partials/nodeselector', {});
});
router.get('/scriptselector', function(req, res) {
    res.render('partials/scriptselector', {});
});
router.get('/history', function(req, res) {
    res.render('partials/history', {});
});
router.get('/node', function(req, res) {
    res.render('partials/node', {});
});
router.get('/statistic', function(req, res) {
    res.render('partials/statistic', {});
});
router.get('/pending', function(req, res) {
    res.render('partials/pending', {});
});
router.get('/maintenance', function(req, res) {
    res.render('partials/maintenance', {});
});

module.exports = router;