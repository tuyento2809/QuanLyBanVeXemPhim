const express= require('express');
const router= express.Router();

const TaiKhoanCtrl= require('../controllers/taikhoan')
const VeCtrl=require('../controllers/ve')

router.post('', VeCtrl.createVe);//TaiKhoanCtrl.authMiddleware, 
router.get('',VeCtrl.getVe);
//router.get('/manage',TaiKhoanCtrl.authMiddleware,VeCtrl.getUserVes)

router.get('/:id',VeCtrl.getVeById);



module.exports= router;