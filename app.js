var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

//Controllers
var Slides =  require("./controllers/slides").Slides;
var slides =  new Slides();

//Routes
var Pages =  require("./routes/pages").Pages;
var pages = new Pages();

//App settings
app.set('port', process.env.PORT || 1344);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',             pages.Dash);
app.get('/v1/slides',    slides.List);
app.post('/v1/slide',    slides.Create);
app.put('/v1/slide',     slides.Update);
app.delete('/v1/slide',  slides.Remove);

app.get('/v1/slide/:id/comments', function(req, res) {
	res.json('No yet implemented');
});

app.get('/v1/slide/:id/views', function(req, res) {
	res.json('No yet implemented');
});

app.get('/v1/slides/seed', slides.Seed);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
