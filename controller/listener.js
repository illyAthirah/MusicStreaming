var Model = require('../models');
const album = require('../models/album');

const listener = {

    //CREATE list
    //Create new listener
    postListener: async (req, res) => {
        let listener = {}
        try {
            listener = await Model.Listener.create({
                listenerName: req.body.listenerName,
                email: req.body.email,
                listenerAge: req.body.listenerAge,
                listenerGender: req.body.listenerGender
            });

            
        } catch (error) {
            console.log(error)
        }
        res.json(listener)
    },

    addDownload: async (req, res) => {
        let download = {}
        try {
            download = await Model.download.create({
                paymentMethod: req.body.paymentMethod,
                AlbumId: req.body.AlbumId,
                ListenerId: req.params.id
            });
        } catch (error) {
            console.log(error)
        }
        res.json(download)
    },

    //GET list
    //get all listener
    getAllListener: async ( res) => {
        let listener = []
        try {
            listener = await Model.Listener.findAll({
                order: [
                    ['listenerName' , 'ASC']
                ],
                include: [{
                    model: Model.download
                }]
            })
        } catch(error) {
            console.log(error)
        }
        res.json(listener)
    },

    getAllDownload: async (res) => {
        let download = []
        try {
            download = await Model.download.findAll({
                order: [
                    ['id' , 'ASC']
                ]
            })
        } catch (error) {
            console.log(error)
        }
        res.json(artist)
    },

   

    //Update listener
    updateListener: async(req, res) =>{
        let listener = {}
        try {
            listener = await Model.Listener.update(
                req.body, {
                    where: {
                        id: req.params.id
                    }
            });
        } catch (error) {
            console.log(error)
        }
        res.status(200).json({
            status: 'Listener Updated'
        })
    },

    updateDownload: async(req, res) =>{
        let download = {}
        try {
            download = await Model.download.update(
                req.body, {
                    where: {
                        id: req.params.id
                    }
                });
        } catch (error) {
            console.log(error)
        }
        res.status(200).json({
            status: 'Download updated'
        })
    },

    //Delete Listener
    deleteListener: async (req, res) => {
        await Model.Listener.destroy({
            where: {
                id: req.params.id
            }
        }) 

        res.status(200).json({
            status: 'Listener Deleted'
        })
    },

    deleteDownload: async (req, res) => {
        await Model.download.destroy({
            where: {
                id: req.params.id
            }
        });
    },

}



module.exports = listener;