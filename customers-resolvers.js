let CustomersService = require('./customers');

const resolvers = {
    Query: {
        customers() {
            return CustomersService.getCustomers();
        },
        customer(obj, args, context, info) {
            const customer = CustomersService.getSingleCustomer(args.id);
            if (customer) {
                return customer;
            }
            else {
                throw new Error('customer not found');
            }
        }
    },

    Mutation: {
        deleteCustomer(obj, args, context, info) {
            if (CustomersService.getSingleCustomer(args.id)) {
                return CustomersService.deleteCustomer(args.id);
            }
            else {
                throw new Error('customer not found');
            }
        },
        updateCustomer(obj, args, context, info) {
            if (CustomersService.getSingleCustomer(args.id)) {
                const updateResult = CustomersService.updateCustomer(args.id, args.customerDetails);
                if (typeof updateResult !== "object") {
                    throw new Error(updateResult);
                }
                else {
                    return updateResult;
                }
            }
            else {
                throw new Error('customer not found');
            }
        },
        createCustomer(obj, args, context, info) {
            const addResult = CustomersService.addCustomer(args.customerDetails);
            if (typeof addResult !== "object"){
                throw new Error(addResult);
            }
            else {
                return addResult;
            }
        }
    }
}

module.exports = resolvers;

