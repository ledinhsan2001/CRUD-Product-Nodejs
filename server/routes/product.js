const express = require('express');
const crudProduct  = require('../controllers/ProductController');

const router = express.Router();
router.post('/create', crudProduct.create);
router.get('/:id/detail', crudProduct.detail);
router.put('/:id/update', crudProduct.update)
router.delete('/:id/delete', crudProduct.delete)
router.get('/', crudProduct.show);
module.exports = router;
