const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// Create an invoice
router.post('/', invoiceController.createInvoice);

// Get all invoices
router.get('/', invoiceController.getInvoices);

// Get a single invoice by Order Number
router.get('/:orderNumber', invoiceController.getInvoiceByOrderNumber);

module.exports = router;
