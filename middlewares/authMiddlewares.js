const passport = require('passport');

//by default pasport wants to use cookie based auths for the user
//we are using tokens instead, so we set the above behavior to 'false'
const requireAuth   = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session:false});



module.exports = {
    requireAuth,
    requireSignIn
}