const db = require('./../models');

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
            res.json(user);
        } catch (error) {
            res.status(404).json({error});
        }
    }
}