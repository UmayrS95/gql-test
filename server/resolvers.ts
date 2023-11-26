import { Customer, Product, Query } from "./interfaces";
import { loadCSVData } from "./utils/serverUtils";

export const resolvers: { Query: Query } = {
  Query: {
    customers: (): Array<Customer> => {
      return loadCSVData('/Users/ushaffi/dev/gql-test/server/resources/customers.csv')
    },
    products: (): Product => {
      return { 
        vin: "vin", 
        colour: "colour",
        make: "make", 
        model: "model", 
        price: 1000
      }
    }
  } 
};