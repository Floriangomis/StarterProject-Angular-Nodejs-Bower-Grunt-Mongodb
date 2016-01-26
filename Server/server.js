var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require( 'path' );
// Template choose.
var nunjucks = require( 'nunjucks' );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.use( '/bower_components', express.static( './bower_components' ) );
app.use( '/stylesheets', express.static( './public/assets/stylesheets/' ) );
app.use( '/js', express.static('./public/js/' ) );
app.use( '/templates', express.static('./public/templates/' ) );

// view engine setup
app.set( 'view engine', 'nunjucks' );
app.set( 'env', 'local' );

nunjucks.configure( path.join( __dirname, '../public/templates' ) , {
	autoescape: true,
	express: app,
	watch: true
} );

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
    res.render('layout.html');
});

app.listen( 3000, function () {
  console.log('App listening on port 3000!');
});