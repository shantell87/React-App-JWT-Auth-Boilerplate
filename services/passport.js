const passport = require('passport');
const User = require('./../models/User');
const config = require('./../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//create local strategy (use a strategy for each third party login system (eg Facebook or Google))
//by default when logging in using LocalStrategy, it is expecting a username and password
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false);
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) return done(err);
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user);
        })
    } catch (e) {
        done(e, false);
    }
})

//setup options for Jwt(jason web token) strategy
//we need to tell out strategy where to look for the token
const jwtOptions = {
    //tells jwt that whenever a request comes in, in needs to look in
    //the header for he property called authorizattion, 
    //if we want passport to handle it
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    //tells jwt what secret we used to encode the token so we decode it
    secretOrKey: config.secret
}

//We are going to get the payload argument from an incoming request
//the payload argument is coming from the function we create in authRoutes
//done is the function we call once we try to authenticate this user
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (e) {
        done(e, false);
    }
})
//this tells passport that we declared there strategies.
//the localLogin says we have a strategy called "Local".
//the jwtLogin says we have a strategy called "jwt".

//when we say passport.authentication('jwt'), passport will look for a strategy called jwt.
passport.use(localLogin);
passport.use(jwtLogin);