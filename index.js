// let express = require('express');
// let bodyParser = require('body-parser');
// let app = express();
// app.use(bodyParser.json());
//
// let customersApi = express.Router();
// app.use('/', customersApi);
//
// let CustomersController = require('./controllers/customers-controller');
// let cc = new CustomersController(customersApi);
//
//
// let server = app.listen(3000,  () => {
//     let host = server.address().address;
//     host = (host === '::' ? 'localhost' : host);
//     let port = server.address().port;
//
//     console.log('listening at http://%s:%s', host, port);
// });


const { ApolloServer } = require('apollo-server');
const typeDefs = require('./customers-schema');
const resolvers = require('./customers-resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// server.listen(3000, () => {
//     let host = server.address().address;
//     host = (host === '::' ? 'localhost' : host);
//     let port = server.address().port;
//
//     console.log('listening at http://%s:%s', host, port);
// });