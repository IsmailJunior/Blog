const mongoose = require( "mongoose" );
const express = require( "express" );
const session = require( "express-session" );
const passport = require( "passport" );
const cors = require( "cors" );
const cookieParser = require( "cookie-parser" );
const bodyParser = require( "body-parser" );
const userRouter = require( "./router/authRouter" );
const morgan = require( "morgan" );

mongoose.connect( "mongodb://localhost:27017/auth", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () =>
{
	console.log( "Connection Successfully!" );
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
app.use(passport.initialize());
app.use(passport.session());
require( "./config/passportConfig" )( passport );
app.use( "/", userRouter );

app.listen( 4000 );