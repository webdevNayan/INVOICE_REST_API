const Invoice = require('../models/Invoice');

// Create an invoice
exports.createInvoice = (req, res) => {
    const newInvoice = new Invoice(req.body);

    newInvoice.save()
        .then(invoice => res.json(invoice))
        .catch(err => res.status(400).json({ error: 'Unable to save the invoice' }));
};

// Get all invoices
exports.getInvoices = (req, res) => {
    Invoice.find()
        .then(invoices => res.json(invoices))
        .catch(err => res.status(404).json({ noinvoicesfound: 'No Invoices found' }));
};

// Get a single invoice by Order Number
exports.getInvoiceByOrderNumber = (req, res) => {
    Invoice.findOne({ 'order.number': req.params.orderNumber })
        .then(invoice => res.json(invoice))
        .catch(err => res.status(404).json({ noinvoivefound: 'No Invoice found with that Order Number' }));
};
