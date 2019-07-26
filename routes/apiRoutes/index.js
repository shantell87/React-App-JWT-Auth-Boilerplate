const router    = require('express').Router();
const authRoutes = require('./authRoutes');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares')
//setup API routes
//prepends /api to all of the routes declared in this file

router.route('/test')
    .get(authMiddleware.requireAuth, (req, res) =>{
        res.send(req.user);
    })


router.use('/auth', authRoutes);

module.exports = router;