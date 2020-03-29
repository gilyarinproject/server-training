const customers = require('./MOCK-CUSTOMERS').customers;



class CustomersService {
    constructor() {
        this.customers = customers;
    }

    getCustomers() {
        return this.customers;
    }

    getSingleCustomer(customerId) {
        return this.customers.find(customer => customer.id === customerId);
    }

    createCustomer(info) {
        const newCustomer = {
            firstName: info.firstName,
            lastName: info.lastName,
            address: {
                city: info.city,
                country: info.country
            },
            id: info.id
        };
        return newCustomer;
    }

    addCustomer(info) {
        info.id = Math.floor(Math.random() * 90000) + 10000;    //rands 6 digit number in radix 10
        const newCustomer = this.createCustomer(info);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    updateCustomer(customerId, info) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].id === customerId) {
                this.customers[i].firstName = info.firstName ? info.firstName : this.customers[i].firstName;
                this.customers[i].lastName = info.lastName ? info.lastName : this.customers[i].lastName;
                this.customers[i].address.city = info.city ? info.city : this.customers[i].address.city;
                this.customers[i].address.country = info.country ? info.country : this.customers[i].address.country;
                return this.customers[i];
            }
        }

        return 'not updated';
    }

    deleteCustomer(customerId) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].id === customerId) {
                this.customers.splice(i, 1);
                break;
            }
        }
        // check if actually deleted
        if (this.customers.find(customer => customer.id === customerId)) {
            return 'not deleted';
        }
        return 'deleted';
    }
}

module.exports = new CustomersService();