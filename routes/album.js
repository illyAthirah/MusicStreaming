var express = require('express');
var router = express.Router();
var MusicStreamingController = require('../controller/album')

//POST routes
router.post('/:artistID/album', MusicStreamingController.addAlbum);
router.post('/artist', MusicStreamingController.addArtist);
router.post('/:id/song', MusicStreamingController.addSong);


//GET routes
router.get('/artist', MusicStreamingController.getAllArtist);
router.get('/song/:artistID', MusicStreamingController.getArtistSong);
router.get('/album', MusicStreamingController.getAllAlbum);
router.get('/artist/:artistID', MusicStreamingController.getArtistAlbum);


//PATCH routes
router.patch('/:id', MusicStreamingController.updateAlbum);
router.patch('/artist/:artistID', MusicStreamingController.updateArtist);
router.patch('/song/:songID', MusicStreamingController.updateSong)

//DELETE routes
router.delete('/:id', MusicStreamingController.deleteAlbum);
router.delete('/artist/:artistID', MusicStreamingController.deleteArtist);
router.delete('/song/:songID', MusicStreamingController.deleteSong);

module.exports = router;