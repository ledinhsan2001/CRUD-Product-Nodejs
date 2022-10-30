
const { get } = require('mongoose');
const Product = require('../models/productSchema');

class crudProduct{
    create(req, res) {
        // req.body.img = `http://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const product = new Product(req.body);
        product.save()
            .then((product) => {
                return res.status(201).json({
                success: true,
                message: 'New cause created successfully',
                Product: product,
                });
            })
            .catch(function(error) {
                console.log(error);
                return res.status(400).json({
                    message: 'Product create is faile!',
                    error: error.message,
                });
            })
    }
    show(req, res) {
        Product.find()
            .then((listProduct) => {
                return res.status(200).json({
                    success: true,
                    message: 'A list of all product',
                    Course: listProduct,
                    });
                })
            .catch((err) => {
            res.status(400).json({
                success: false,
                message: 'Please try again.',
                error: err.message,
            });
        });
    };
    detail(req, res) {
        Product.findById(req.params.id)
            .then((product) => {
                return res.status(200).json({
                    success: true,
                    message: 'Product detail!',
                    Product: product,
                    });
                })
            .catch((err) => {
            res.status(400).json({
                success: false,
                message: 'Please try again.',
                error: err.message,
            });
        });
    }
    update(req, res) {
        Product.updateOne({_id: req.params.id}, req.body)
            .then((product) => {
                return res.status(200).json({
                    success: true,
                    message: 'Update Product is Success!',
                    Product: product,
                });
            })
            .catch((err) => {
                res.status(400).json({
                    success: false,
                    message: 'Please try again.',
                    error: err.message,
                });
            });
    }
    delete(req, res) {
        Product.deleteOne({_id: req.params.id})
            .then((product) => {
                return res.status(200).json({
                    success: true,
                    message: 'Delete Product is Success!',
                    Product: product,
                });
            })
            .catch((err) => {
                res.status(400).json({
                    success: false,
                    message: 'Please try again.',
                    error: err.message,
                });
            });
    }
}

module.exports = new crudProduct();