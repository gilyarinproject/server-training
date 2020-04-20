const { gql } = require('apollo-server');

const typeDefs = gql`
    enum Countries {
        Israel
        California
        Italy
        Greece
        Texas
    }
    
    enum Gender {
        Male
        Female
    }
    
    type Order {
        itemName: String!
        itemPrice: Float!
    }
    
    type Customer {
        id: Int!
        firstName: String!
        lastName: String!
        address: Address!
        gender: Gender!
        orders: [Order!]
    }
    
    type Address {
        city: String!
        country: Countries!
    }
    
    input CustomerInput {
        firstName: String
        lastName: String
        city: String
        country: Countries
    }
    
    input NewCustomerInput {
        firstName: String!
        lastName: String!
        city: String!
        country: Countries!
        gender: Gender!
    }  
    
    type Query {
        customers: [Customer]
        customer(id: Int!): Customer
    }
    
    type Mutation {
        deleteCustomer(id: Int!): String
        updateCustomer(id: Int!, customerDetails: CustomerInput): Customer
        createCustomer(customerDetails: NewCustomerInput!): Customer
    }
    
`;

module.exports = typeDefs;