/**
 * Created by modestanil on 15/11/16.
 */
var express =  require('express')
var app = express()
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')
var fs = require('fs')
var path = require('path')
var Dal = require('./dal')

var database = new Dal('localhost', '27017', 'db')

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json());
app.use(fileUpload());


var port = process.env.PORT || 8081;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}



app.use(allowCrossDomain);
var router = express.Router();
app.use('/api', router);


app.get('/', function(req, res) {
    "use strict";
    res.json({message: 'hello world'})
})

app.get('/test', function(req, res) {
    "use strict";
    res.json({test: 'test'})
})

app.put('/', function(req, res) {
        "use strict";

    console.log(req.files)
        res.send('put')
    })


app.post('/upload', function(req, res) {
    "use strict";
    debugger
    var image = req.files.file;
    var basePath = path.join(__dirname, '../img/upload')
    var imgPath = path.join(basePath, 'test.jpg')
    image.mv(imgPath, function (err) {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send({image_url: './upload/test.jpg'})
        }
    })

    database.addArtWork(1, 'dummy', 'img', 'img', new Date().getDate(), fs.readFileSync(imgPath))
})






app.listen(port);
console.log('APP Server Started')