const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Invoice Schema
const InvoiceSchema = new Schema({
    seller: {
        name: String,
        address: String,
        pan: String,
        gst: String,
    },
    buyer: {
        name: String,
        address: String,
        stateCode: String,
    },
    order: {
        number: String,
        date: String,
    },
    invoice: {
        number: String,
        details: String,
        date: String,
        reverseCharge: String,
    },
    items: [
        {
            description: String,
            unitPrice: Number,
            quantity: Number,
            discount: {
                type: Number,
                required: false,
                default: 0,
            },
            taxRate: Number,
            shippingCharges: Number,
        }
    ],
    placeOfSupply: String,
    placeOfDelivery: String,
    signatureImage: String, // Assuming it will store a URL or file path
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
