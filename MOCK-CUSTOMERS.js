const orders1 = [
    {itemName: 'Basketball', itemPrice: 7.99},
    {itemName: 'Shoes', itemPrice: 199.99}
];

const orders2 = [
    {itemName: 'Frisbee', itemPrice: 2.99},
    {itemName: 'Hat', itemPrice: 5.99}
];

const orders3 = [
    {itemName: 'Boomerang', itemPrice: 29.99},
    {itemName: 'Helmet', itemPrice: 19.99},
    {itemName: 'Kangaroo Saddle', itemPrice: 179.99}
];

const customer1 = {
    firstName: 'Ted',
    lastName: 'James',
    address: {
        city: 'Holon',
        country: 'Israel'
    },
    id: 11111,
    gender: 'Male',
    orders: orders1
};

const customer2 = {
    firstName: 'Michelle',
    lastName: 'Thompson',
    address: {
        city: 'Encinitas',
        country: 'California'
    },
    id: 22222,
    gender: 'Female',
    orders: orders2
};

const customer3 = {
    firstName: 'Zed',
    lastName: 'Bishop',
    address: {
        city: 'Napoli',
        country: 'Italy'
    },
    id: 33333,
    gender: 'Male',
    orders: orders3
};

const customer4 = {
    firstName: 'Tina',
    lastName: 'Adams',
    address: {
        city: 'Athens',
        country: 'Greece'
    },
    id: 44444,
    gender: 'Female'
};

const customer5 = {
    firstName: 'Igor',
    lastName: 'Minar',
    address: {
        city: 'Dallas',
        country: 'Texas'
    },
    id: 55555,
    gender: 'Male'
};

const customers = [customer1, customer2, customer3, customer4, customer5];
exports.customers = customers;