const db     = require('./../models');
const jwt    = require('jwt-simple');
const config = require('./../config');

//create a token for the user
const tokenForUser = function(user) {
    const timestamp = new Date().getTime();
    // Sub === subject
    // iat === issued at time
  
    // Its going to encode the whole 1st object and then add our secret to it
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
  };

module.exports = {
    signUp: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: 'You must provide an email and password' });
        }
        try { //check for existing user. If exist, throw error
            const existingUser = await db.User.findOne({ email });
            if(existingUser) {
                return res.status(422).json({error: 'Email is in use'});
            }
            const user = new db.User({email, password});
            await user.save();
            res.json({ token : tokenForUser(user)});

        } catch (error) {
            res.status(404).json({error});
        }
    },

    signIn: (req, res) => {
        res.send("I'm hit!");
    }
};