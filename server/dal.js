/**
 * Created by modestanil on 1/12/16.
 */
'use strict'

var mongoose = require('mongoose')

const artSchema = new mongoose.Schema({
    artistId: Number,
    name: String,
    title: String,
    desc: String,
    imagePath: String,
    createdOn: {type:Date, default:new Date().getDate()},
    image: Buffer
})

const artistSchema = new mongoose.Schema({
    id: String,
    name:String,
    dob:{type:Date},
    createdOn: {type: Date, default: new Date().getDate()},
    place: String
})


module.exports = class DAL {
    constructor(server, port, database) {
        this.server = server
        this.port = port
        this.database = database
        this.artModel = mongoose.model('Art', artSchema)
        this.artistModel = mongoose.model('Artists', artistSchema)
    }

    connect() {
        mongoose.connect('mongodb://' + this.server + ':' + this.port + '/' + this.database)
    }

    addArtWork(id, name, title, desc, createdOn, img) {
        var art = new this.artModel
        art.artistId = id
        art.name = name
        art.title = title
        art.desc = desc
        art.image = img
        art.save(function(err) {
            if (err) {
                console.log('Error adding art work id: ' + err)
                return false
            }
            console.log('added artwork Id: ' + id)
            return true
        })
    }

    addArtist(id, name, dob, createdOn, place) {
        var artist = new this.artistModel
        artist.id = id
        artist.name = name
        artist.dob = dob
        artist.createdOn = createdOn
        artist.place = place
        artist.save(function(err){
            if (err) {
                console.log('Error adding artist id: ' + err)
                return false
            }
            console.log('added artist Id: ' + id)
            return true
        })
    }
}
