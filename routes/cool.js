let express = require('express')
let router = express.Router()

/* GET cool page. */

router.get('/', (req, res, next ) => {
    res.render('cool', { msg: 'cool' })
});


module.exports = router