const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const Product = new Schema({
    title : { type: String, required: true},
    description: String,
    price: { type: Number, default: 0},
    category : { type: String, required: true},
    img : { type: String}
},{
    //auto createdAt, updatedAt
    timestamps:true,
}
);

module.exports= mongoose.model('Product', Product);