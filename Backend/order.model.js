const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Orders = new Schema({
    foodname: {
        type: String
    },
    trainname: {
        type: String
    },
    station: {
        type: String
    },
    qty: {
        type: String
    },
    date: {
        type: String
    },
    price: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    payment: {
        type: String
    },
    deliveryby: {
        type: String
    }
}, {
    collation: 'orders'
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model('Orders',Orders);