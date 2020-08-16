const { Router } = require('express');

const router = Router();

const { home } = require('../controllers/LoginController') ;

router.get( '/' ,  home ) ;

module.exports = router ;