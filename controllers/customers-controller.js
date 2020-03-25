let CustomersService = require('../services/customers');

class CustomersController {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/getAllCustomers', this.getCustomers.bind(this));
        this.router.post('/createCustomer', this.createCustomer.bind(this));
        this.router.post('/updateCustomer/:id', this.updateCustomer.bind(this));
        this.router.post('/deleteCustomer/:id', this.deleteCustomer.bind(this));
    }

    getCustomers(req, res) {
        let customers = CustomersService.getCustomers();
        res.send(customers);
    }

    createCustomer(req, res) {
        let customerInfo = req.body;
        let feedback = CustomersService.addCustomer(customerInfo);
        if (feedback === 'success') {
            res.sendStatus(201);
        }
        else {
            if (feedback === 'country invalid') {
                res.status(400).send(feedback);
            }
            else {
                res.status(400).send(feedback);
            }
        }
    }

    updateCustomer(req, res) {
        let id = parseInt(req.params.id, 10);
        let isCustomerExisting = CustomersService.getSingleCustomer(id);
        let feedback = CustomersService.updateCustomer(id, req.body);

        if (isCustomerExisting) {
            if (feedback === 'updated') {
                res.sendStatus(200);
            }
            else {
                if (feedback === 'country invalid') {
                    res.status(400).send(feedback);
                }
                else {  //not updated
                    res.status(400).send(feedback);
                }
            }
        }
        else {
            res.sendStatus(500);
        }
    }

    deleteCustomer(req, res) {
        let id = parseInt(req.params.id, 10);
        let feedback = CustomersService.deleteCustomer(id);
        if (feedback) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(500);
        }
    }
}

module.exports = CustomersController;