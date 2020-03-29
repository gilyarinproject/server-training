const customer1 = {
    firstName: 'Ted',
    lastName: 'James',
    address: {
        city: 'Holon',
        country: 'Israel'
    },
    id: 11111
};

const customer2 = {
    firstName: 'Michelle',
    lastName: 'Thompson',
    address: {
        city: 'Encinitas',
        country: 'California'
    },
    id: 22222
};

const customer3 = {
    firstName: 'Zed',
    lastName: 'Bishop',
    address: {
        city: 'Napoli',
        country: 'Italy'
    },
    id: 33333
};

const customer4 = {
    firstName: 'Tina',
    lastName: 'Adams',
    address: {
        city: 'Athens',
        country: 'Greece'
    },
    id: 44444
};

const customer5 = {
    firstName: 'Igor',
    lastName: 'Minar',
    address: {
        city: 'Dallas',
        country: 'Texas'
    },
    id: 55555
};

const CountriesEnum = {
    ISRAEL: 'Israel',
    CALIFORNIA: 'California',
    ITALY: 'Italy',
    GREECE: 'Greece',
    TEXAS: 'Texas'
};

const customers = [customer1, customer2, customer3, customer4, customer5];
exports.customers = customers;
exports.CountriesEnum = CountriesEnum;