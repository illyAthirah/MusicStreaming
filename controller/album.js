var Model = require('../models')

const album = {

    //CREATE list
    //Add new album
    addAlbum: async (req, res) => {
        let album = {}
        try {
            album = await Model.Album.create({
                albumName: req.body.albumName,
                albumPrice: req.body.albumPrice,
                releaseDate: req.body.releaseDate,
                region: req.body.region,
                ArtistArtistID: req.params.artistID  
            });

            /*download = await Model.Download.create({
                AlbumId: album.id
            });*/

        } catch (error) {
            console.log(error)
        }
        res.json(album)
    },

    //Add artist to album
    addArtist: async (req, res) => {
        let artist = {}
        try {
            artist = await Model.Artist.create({
                artistName: req.body.artistName,
                artistAge: req.body.artistAge,
                artistGender: req.body.artistGender,
                category: req.body.category

            });
        } catch (error) {
            console.log(error)
        }
        res.json(artist)
    },

    //Add song to album
    addSong: async (req, res) => {
        let song = {}
        try {
            song = await Model.Song.create({
                songName: req.body.songName,
                songDuration: req.body.songDuration,
                genre: req.body.genre,
                AlbumId: req.params.id
            });
        } catch (error) {
            console.log(error)
        }
        res.json(song)
    },

    //READ/GET list
    

    getAllArtist: async (res) => {
        let artist = []
        try {

            artist = await Model.Artist.findAll({
                order: [
                    ['artistName' , 'ASC']
                ],
            })
        } catch (error) {
            console.log(error)
        }
        res.json(artist)
    },

    getArtistSong: async (req, res) => {
        let song = []
        try{

            song = await Model.Song.findOne({
                where: {
                        ArtistArtistID: req.params.artistID
                },
                order: [
                    ['songName' , 'ASC']
                ]
            })
        } catch (error) {
            console.log(error)
        }
        res.json(album)
    },

    

    //get all album include artist & song
    getAllAlbum: async (req, res) => {
        let album = []
        try{

            album = await Model.Album.findAll({
               
                order: [
                    ['albumName' , 'ASC']
                ],
                include: [
                    {
                         model: Model.Artist
                    },
                    Model.Song
                ]
            })
        } catch (error) {
            console.log(error)
        }
        res.json(album)
    },

    getArtistAlbum: async (req, res) => {
        let album = []
        try{

            album = await Model.Album.findOne({
                where: {
                        ArtistArtistID: req.params.artistID
                },
                order: [
                    ['albumName' , 'ASC']
                ],
                include: [
                    {
                         model: Model.Artist
                    },
                    Model.Song
                ]
            })
        } catch (error) {
            console.log(error)
        }
        res.json(album)
    },

    //UPDATE list
    //update all information for specific album id
    updateAlbum: async (req, res) => {
        let album = {}
        try {
            album = await Model.Album.update(
                req.body, {
                    where: {
                        id: req.params.id
                    }
            });
        } catch (error) {
            console.log(error)
        }
        res.status(200).json({
            status: 'Album Updated'
        })
    },

    updateArtist: async (req, res) => {
        let artist = {}
        try {
            artist = await Model.Artist.update(
                req.body, {
                    where: {
                        artistID: req.params.artistID
                    }
            });
        } catch (error) {
            console.log(error)
        }
        res.status(200).json({
            status: 'Artist Updated'
        })
    },

    updateSong: async (req, res) => {
        let song = {}
        try {
            song = await Model.Song.update(
                req.body, {
                    where: {
                        songID: req.params.songID
                    }
            });
        } catch  (error) {
            console.log (error)
        }
        res.status(200).json({
            status: 'Song updated'
        })
    },

    //DELETE list
    // delete specific album
    deleteAlbum: async (req, res) => {
        await Model.Album.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            status: 'Album deleted'
        })
    },

    //delete artist
    deleteArtist: async (req, res) => {
        await Model.Artist.destroy({
            where: {
                artistID: req.params.artistID
            }
        });

        res.status(200).json({
            status: 'Artist deleted'
        })
    },
    
    //delete song
    deleteSong: async (req, res) => {
        await Model.Song.destroy({
            where: {
                songID: req.params.songID
            }
        });

        res.status(200).json({
            status: 'Song deleted'
        })
    }


}

module.exports = album;