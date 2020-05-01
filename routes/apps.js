const express = require('express');
const router = express.Router();
const app = require('../controllers/apps');

router.get('/', function(req, res){
    app.index(req,res);
});

router.post('/addapp', function(req, res) {
    app.create(req,res);
});

router.get('/getapp', function(req, res) {
    app.list(req,res);
});

module.exports = router;
