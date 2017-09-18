var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/hello', function (req, res, next) {
    res.send("Hello World!");
});

//Get About page
router.get('/about', function (req, res, next) {
    //res.render('about', { title: 'Express' });
    res.sendFile(path.join(__dirname + '/about.html'));
});
router.get("/about", function (req, res) {
    res.sendFile(__dirname + "/views/about.html");
});

router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
router.get('/about', function (req, res) {
    res.sendFile('/about.html');
});
router.get('/about', function (req, res) {
    res.render('about.html');
});

module.exports = router;
