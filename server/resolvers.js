export const resolvers = {
  Query: {
    customers: () => {
      return { 
        email: "email", 
        forename: "forename",
        surname: "surname", 
        contactNumber: "contactNumber", 
        postcode: "postcode" 
      }
    },
    products: () => {
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