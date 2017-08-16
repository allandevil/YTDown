var fs = require('fs');
var express = require('express'), app = express();
var youtubedl = require('youtube-dl');
var bodyParser = require('body-parser');

// Callback function
var mycallback = function(err,results) {
	console.log("mycallback");
	if(err) throw err;
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
 	console.log("Inda não implementado");
});

 app.post('/',function(req,res){
   var novo = new Balada(req.body);
 	 console.log(novo);
 });
 app.listen(1337);

var video = youtubedl('https://www.youtube.com/watch?v=k34CRoPRM8A',
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname });

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream('../myvideo.mp4'));
