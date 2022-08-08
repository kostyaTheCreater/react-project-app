const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');

router.post('/registration', [
    check('email', 'Username cant be void').notEmpty(),
    check('password', 'Password must be longer than 4').isLength({min: 4, max: 10})
]
,controller.registration);

router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router