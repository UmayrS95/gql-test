import { Customer, Product, Query } from "./interfaces";
import { loadCSVData } from "./utils/serverUtils";

export const resolvers: { Query: Query } = {
  Query: {
    customers: (): Customer[] => {      
      const customerData = loadCSVData('customers.csv');

      return customerData.map((record: any) => ({
        email: record.email,
        forename: record.forename,
        surname: record.surname,
        contactNumber: record.contact_number,
        postcode: record.postcode,
      }));
    },
    products: (): Product[] => {
      const productsData = loadCSVData("products.csv");

      return productsData.map((record: any) => ({
        vin: record.vin,
        make: record.make,
        model: record.model,
        price: record.price,
        colour: record.colour,
      }));
    }
  } 
};