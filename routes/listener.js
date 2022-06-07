var express = require('express');
var router = express.Router();
var  MusicStreamingController = require('../controller/listener')

//POST routes
router.post('/', MusicStreamingController.postListener);
router.post('/:id/download', MusicStreamingController.addDownload);


//GET routes
router.get('/', MusicStreamingController.getAllListener);
router.get('/download', MusicStreamingController.getAllDownload);

//UPDATE routes
router.patch('/:id', MusicStreamingController.updateListener);
router.patch('/download/:id', MusicStreamingController.updateDownload);

//DELETE routes
router.delete('/:id', MusicStreamingController.deleteListener);
router.delete('/download/:id', MusicStreamingController.updateDownload);

module.exports = router;