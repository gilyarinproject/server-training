const customers = require('./MOCK-CUSTOMERS').customers;

class CustomersService {
    constructor() {
        this.customers = customers;
        this.countries = ['Israel', 'California', 'Italy', 'Greece', 'Texas'];
    }

    getCustomers() {
        return this.customers;
    }

    getSingleCustomer(customerId) {
        return this.customers.find(customer => customer.id === customerId);
    }

    findMissingDetails(info) {
        let missing = [];

        if (!info.firstName) {
            missing.push('first name missing');
        }
        if (!info.lastName) {
            missing.push('last name missing');
        }
        if (!info.city) {
            missing.push('city missing');
        }
        if (!info.country) {
            missing.push('country missing');
        }

        return missing;
    }

    addCustomer(info) {
        if (info.firstName && info.lastName && info.city && info.country) {
            if (!this.countries.includes(info.country)) {
                return 'country invalid';
            }
            info.id = Math.floor(Math.random() * 90000) + 10000;    //rands 6 digit number in radix 10
            this.customers.push(info);
            return 'success';
        }
        else {
            return this.findMissingDetails(info);
        }
    }

    updateCustomer(customerId, info) {
        if (!this.countries.includes(info.country)) {
            return 'country invalid';
        }

        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].id === customerId) {
                this.customers[i].firstName = info.firstName ? info.firstName : this.customers[i].firstName;
                this.customers[i].lastName = info.lastName ? info.lastName : this.customers[i].lastName;
                this.customers[i].city = info.city ? info.city : this.customers[i].city;
                this.customers[i].country = info.country ? info.country : this.customers[i].country;
                return 'updated';
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
            return false;
        }
        return true;
    }
}

module.exports = new CustomersService();