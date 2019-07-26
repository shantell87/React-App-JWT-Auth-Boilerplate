const router    = require('express').Router();
const authRoutes = require('./authRoutes');

//setup API routes
//prepends /api to all of the routes declared in this file

router.use('/auth', authRoutes);

module.exports = router;