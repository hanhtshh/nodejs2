const express=require('express');
const customerController = require('../controllers/customerController');
const authenticateMiddleware = require('../middleware/authenticateMiddleware');
const customerMiddleware = require('../middleware/customerMiddleware');
const router=express.Router();
router.post('/login',customerController.login);
router.get('/logout',customerController.logout);
router.get('/',authenticateMiddleware.verifyToken,authenticateMiddleware.authenAdmin,customerController.get);
router.post('/',customerMiddleware.post,customerController.post);
router.patch('/handleInformation',authenticateMiddleware.verifyToken,customerMiddleware.handleInfo,customerController.handleInfomation);
router.patch('/handlePassword',authenticateMiddleware.verifyToken,customerMiddleware.handlePassword,customerController.handlePassword);
router.delete('/:_id',authenticateMiddleware.verifyToken,authenticateMiddleware.authenAdmin,customerController.delete);
module.exports=router;