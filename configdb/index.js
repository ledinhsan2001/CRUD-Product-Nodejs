const mongoose = require('mongoose');

async function connect() {
    //async co hanlde excep nên dùng try
    try {
        await mongoose.connect('mongodb://localhost:27017/crud_product');
        console.log("Connect mongodb is successed!");
    } catch (error) {
        console.log("Connect mongodb is failed!");
    }
}

module.exports = { connect };