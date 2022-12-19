const router = require('express').Router();
const productRoutes = require('./product-routes');
const user = require('./user.js');

router.use('/products', productRoutes);
router.use('/users', user);


module.exports = router;
