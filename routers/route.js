const CRUD = require('../db/CRUDOperations.js');
const express = require('express');
const router = express.Router();

router.get('/get/mains',CRUD.getAllDataByCategory);
router.get('/get/apetizer',CRUD.getApetizerDataByCategory);
router.get('/get/clone',CRUD.getCloneDataByCategory);
router.get('/get/dessert',CRUD.getDessertDataByCategory);
router.get('/get/weired',CRUD.getWeiredByCategory);
router.post('/update/price',CRUD.updatePrice);


module.exports = router;