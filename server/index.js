const mongoose = require( "mongoose" );
const express = require( "express" );
const session = require( "express-session" );
const passport = require( "passport" );
const cors = require( "cors" );
const cookieParser = require( "cookie-parser" );
const bodyParser = require( "body-parser" );
const userRouter = require( "./router/authRouter" );
const morgan = require( "morgan" );
const Error = require( "./utils/expressError" );
const path = require( "path" );
const DBURL = "mongodb://localhost:27017/auth";

mongoose.connect( DBURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () =>
{
	console.log( "Connection to the database successfully!" );
})

const app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( cors( {
	origin: "http://localhost:4000",
	credentials: true
}))

app.use( session( {
	secret: "cod",
	resave: true,
	saveUninitialized: true
} ) );

app.use( cookieParser( "cod" ) );
app.use( morgan( "dev" ) );
app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );
app.use(passport.initialize());
app.use(passport.session());
require( "./config/passportConfig" )( passport );
app.use( "/", userRouter );

app.all( "*", ( req, res, next ) =>
{
	next( new Error( "404 Page not found!", 404 ) );
} );

app.use( ( err, req, res, next ) =>
{
	const { statusCode = 500 } = err;
	if ( !err.message ) err.message = "Oh No, Something Went Wrong!";
	res.status( statusCode ).render( "error", { err } );
} );

const PORT = 4000;

app.listen( PORT, () =>
{
	console.log( `Listening on port ${ PORT }, Start receiving calls!` );
} );